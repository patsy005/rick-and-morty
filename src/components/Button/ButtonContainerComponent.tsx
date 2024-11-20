import React, { useContext } from "react"
import { AppDataContext } from "../../contexts/AppData.context"
import ButtonComponent from "./ButtonComponent"
import { ButtonsContainer } from "./Button.styled"

const ButtonContainerComponent: React.FC = () => {
	const { status, character, maxCharacterNumber, dispatch } = useContext(AppDataContext)
	const minCharacterNumber = 1

	if (!character) return null
	return (
		<>
			{status !== "error" && (
                <ButtonsContainer>
                    <ButtonComponent
                        disabled={character.id === minCharacterNumber}
                        text="Previous"
                        onClick={() => dispatch({ type: "previousCharacter" })}
                    />
                    <ButtonComponent
                        disabled={character.id === maxCharacterNumber}
                        text="Next"
                        onClick={() => dispatch({ type: "nextCharacter" })}
                    />
                </ButtonsContainer>
			)} 
		</>
	)
}

export default ButtonContainerComponent
