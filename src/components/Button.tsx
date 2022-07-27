import next from "next";
import { ReactElement } from "react";

type ButtonProps = {
    label: string,
    disabled?: boolean
    page?: number
    onClick: () => void
}

const Button = ({label, disabled, onClick, page}: ButtonProps): ReactElement => {
    return (
        <button disabled={page === 0 && disabled } onClick={onClick} >{label}</button>
    )
}

export default Button