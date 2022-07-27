import next from "next";
import { ReactElement } from "react";

type ButtonProps = {
    label: string,
    disabled?: boolean
    page?: number
    onClick: () => void
}

const Button = (props: ButtonProps): ReactElement => {

    const {label, disabled, onClick, page} = props

    return (
        <button disabled={page === 0 && disabled } onClick={onClick} >{label}</button>
    )
}

export default Button