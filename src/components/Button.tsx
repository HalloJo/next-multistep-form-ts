import next from "next";
import { ReactElement } from "react";

type ButtonProps = {
    label: string,
    disabled?: boolean
    onClick: () => void
}

const Button = ({label, disabled, onClick}: ButtonProps): ReactElement => {
    return (
        <button disabled={disabled} onClick={onClick} >{label}</button>
    )
}

export default Button