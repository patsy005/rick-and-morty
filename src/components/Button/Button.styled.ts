import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.8rem;
    margin-top: 1.8rem;
`;

export const Button = styled.button`
  padding: .7rem;
  width: 90px;
  border-radius: 4px;
  background-color: ${colors.grey100};
  border: 1px solid ${colors.grey300};
  font-size: 1.2rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${colors.grey300};
  }
`;