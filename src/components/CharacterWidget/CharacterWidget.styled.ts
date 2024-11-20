import styled from "@emotion/styled";
import {colors} from "../../styles/colors";
import { Character } from "../../types/RickAndMorty.types";

export const CharacterWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey100};
  border: 1px solid ${colors.grey300};
  border-radius: 8px;
  width: 360px;
  height: 120px;

  @media screen and (max-width: 400px){
    width: 80%;
  }
`;

export const CharacterStatusBox = styled.div<{status : Character["status"]}>`
  padding: 0.8rem 1rem;
  background-color: ${(props) => {
    if (props.status === "Alive") return colors.green;
    if (props.status === "Dead") return colors.red;
    return colors.grey300;
  }};

  p {
    font-size: 1.1rem;
    font-weight: 700;
  }
`;
export const CharacterDetailContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;

`;
export const CharacterDetailBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const CharacterInfoBox = styled.div`
  display: flex;
  gap: .4rem;
  width: 50%;
  font-size: 1.1rem;
  color: ${colors.grey900};
  font-weight: 600;
  align-items: center;
`;

export const CharacterInfoLabel = styled.div`
  padding: 0.4rem;
  background-color: ${colors.blue};
  border-radius: 4px;
  text-align: center;
  vertical-align: middle;
`;

export const CharacterImageBox = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    aspect-ratio: 16/9;
  }
`;