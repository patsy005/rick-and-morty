import React, { useContext } from "react"
import { AppDataContext } from "../../contexts/AppData.context"
import {
	CharacterWidgetContainer,
	CharacterDetailContainer,
	CharacterDetailBox,
	CharacterImageBox,
} from "./CharacterWidget.styled"
import CharacterStatus from "./CharacterStatus"
import CharacterInfo from "./CharacterInfo"
import MessageBox from "../MessageBox/MessageBox"

const CharacterWidget: React.FC = () => {
	const { character, errorMessage, status } = useContext(AppDataContext)

	if (!character) return null
	
	return (
		<CharacterWidgetContainer>
			{status === "loading" && <MessageBox status={status} />}

			{status === "error" && <MessageBox status={status} errorMessage={errorMessage} />}

			{status === "idle" && (
					<>
						<CharacterStatus status={character.status} name={character.name} />

						<CharacterDetailContainer>
							<CharacterDetailBox>
								<CharacterInfo label="id" value={`#${character.id}`} />

								<CharacterInfo label="status" value={character.status} />

								<CharacterInfo label="gender" value={character.gender} />

								<CharacterInfo label="episodes" value={character.episode.length} />
							</CharacterDetailBox>

							<CharacterImageBox>
								<img src={character.imageUrl} alt={character.name} loading="lazy" />
							</CharacterImageBox>
						</CharacterDetailContainer>
					</>
				)}
		</CharacterWidgetContainer>
	)
}

export default CharacterWidget
