import React from "react";
import { Character } from "../../types/RickAndMorty.types";
import { CharacterStatusBox } from "./CharacterWidget.styled";

type CharacterStatusProps = {
    status: Character["status"];
    name: Character["name"];
}

const CharacterStatus: React.FC<CharacterStatusProps> = ({status, name}) => {
    return (
        <CharacterStatusBox status={status}>
        <p>{name}</p>
      </CharacterStatusBox>
    )
}

export default CharacterStatus;