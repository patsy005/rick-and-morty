import React, { ComponentPropsWithoutRef } from "react";
import { Button } from "./Button.styled";

type ButtonProps = {
    text: string;
} & ComponentPropsWithoutRef<'button'>;

const ButtonComponent: React.FC<ButtonProps> = ({text, ...props}) => {
    return (
        <Button {...props}>{text}</Button>
    )
}

export default ButtonComponent;