import next from "next"
import { ReactElement } from "react"

type InputProps = {
    label: string,
    type: string,
    placeholder?: string,
    value?: string | number,
    min?: number
    max?: number
    onChange: (value: string) => void
}

const InputElement = (props: InputProps): ReactElement => {

    const {label, type, placeholder, value, onChange, min, max} = props

    return (
        <div>
            <label htmlFor="">{label}</label>
            <input type={type} placeholder={placeholder} min={min} max={max} value={value} onChange={(event)=> onChange(event.target.value) } />
        </div>
    )
}

export default InputElement