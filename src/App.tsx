import React from "react";
import { AppDataContextProvider } from "./contexts/AppData.context";
import { AppContainer, globalStyles } from "./App.styled";
import CharacterWidget from "./components/CharacterWidget";
import { Global } from "@emotion/react";
import ButtonContainerComponent from "./components/Button/ButtonContainerComponent";

const App: React.FC = () => {
  return (
    <AppDataContextProvider>
      <Global styles={globalStyles} />
      <AppContainer>
        <CharacterWidget />
        <ButtonContainerComponent />
      </AppContainer>
    </AppDataContextProvider>
  );
};

export default App;
