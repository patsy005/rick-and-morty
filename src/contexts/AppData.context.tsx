import React, { createContext, useEffect, useMemo, useReducer } from "react";
import ky from "ky";
import { API_URL } from "../config";
import type { Character } from "../types/RickAndMorty.types";

export type AppStatus = "idle" | "loading" | "error";

export type AppData = {
  status: AppStatus;
  character: {
    name: Character["name"];
    status: Character["status"];
    imageUrl: string;
    id: Character["id"];
    gender: Character["gender"];
    episode: Character["episode"];
  } | null;
  characterNumber: number;
  maxCharacterNumber: number;
  errorMessage: string | null;
  dispatch: React.Dispatch<Action>;
};

type Action =  
  { type: "fulfilled"; payload: AppData["character"] }
  | { type: "rejected"; payload: string }
  | {type: "nextCharacter"}
  | {type: "previousCharacter"}
  | {type: "fetchCharacterCount"; payload: number}

function reducer(state:AppData, action: Action): AppData {
  switch(action.type){
    case "fulfilled":
      return {
        ...state,
        status: "idle",
        character: action.payload,
        errorMessage: null
      }
    case "rejected":
      return {
        ...state,
        status: "error",
        errorMessage: action.payload
      }
    case "nextCharacter":
      return {
        ...state,
        status: "loading",
        characterNumber: state.characterNumber + 1
      }
    case "previousCharacter":
      return {
        ...state,
        status: "loading",
        characterNumber: state.characterNumber - 1
      }
    case "fetchCharacterCount":
      return {
        ...state,
        status: "idle",
        maxCharacterNumber: action.payload
      }
    default:
      return state
  }
}

const initialState: AppData = {
  status: "loading",
  character: null,
  characterNumber: 1,
  maxCharacterNumber: 0,
  errorMessage: null,
  dispatch: () => {}
};

export const AppDataContext = createContext<AppData>(initialState);

export const AppDataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [
    {
      status, 
      character, 
      characterNumber, 
      errorMessage, 
      maxCharacterNumber, 
    }, dispatch] = useReducer(reducer, initialState)

  const appData: AppData = useMemo(() => (
    { 
      status, 
      character, 
      characterNumber, 
      errorMessage, 
      maxCharacterNumber, 
      dispatch 
    }
    ), [status, character, characterNumber, errorMessage]);

    useEffect(() => {
      const fetchCharacterCount = async () => {
        try {
          const characterCountResponse: {info: {count:number}} = await ky.get(`${API_URL}/character`).json();
  
          dispatch({ type: "fetchCharacterCount", payload: characterCountResponse.info.count });
  
        } catch (error){
          dispatch({ type: "rejected", payload: "An error occured... try again later." });
        }
      }

      fetchCharacterCount();
    }, []);

  useEffect(() => {
    (async () => {
      try {
        const response: Character = await ky.get(`${API_URL}/character/${characterNumber}`).json();

        dispatch({ type: "fulfilled", payload: {
          id: response.id,
          name: response.name,
          status: response.status,
          imageUrl: response.image,
          gender: response.gender,
          episode: response.episode
        } });


      } catch (error){
        dispatch({ type: "rejected", payload: "An error occured... try again later." });
      }
    })();
  }, [characterNumber, maxCharacterNumber]);

  return (
    <AppDataContext.Provider value={appData}>
      {children}
    </AppDataContext.Provider>
  );
};
