import React from "react";
import { CharacterInfoBox, CharacterInfoLabel } from "./CharacterWidget.styled";

type CharacterInfoProps = {
    label: string;
    value: string | number;
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({ label, value }) => {
    return (
        <CharacterInfoBox>
        <CharacterInfoLabel>{label}</CharacterInfoLabel>
        <p>{value}</p>
      </CharacterInfoBox>
    )
};

export default CharacterInfo;