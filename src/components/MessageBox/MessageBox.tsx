import React from "react";
import { LoadingStyled, MessageBoxStyled } from "./MessageBox.styled";
import { AppData, AppStatus } from "../../contexts/AppData.context";

type MessageBoxProps = {
    status: AppStatus
    errorMessage?: AppData["errorMessage"]
}

const MessageBox: React.FC<MessageBoxProps> = ({status, errorMessage}) => {
    return (
        <MessageBoxStyled>
            {status === "loading" && (
                <LoadingStyled>
                    <h2>Loading</h2>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </LoadingStyled>
            )}

            {status === "error" && (
                <h2>{errorMessage}</h2>
            )}
        </MessageBoxStyled>
    )
}

export default MessageBox;