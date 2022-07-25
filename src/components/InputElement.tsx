import next from "next"
import { SetFormData } from "../data/formData"

type InputProps = {
    label: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: (value: string) => void
}

const InputElement = (props: InputProps) => {

    const {label, type, placeholder, value, onChange} = props

    return (
        <div>
            <label htmlFor="">{label}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={(event)=> onChange(event.target.value) } />
        </div>
    )
}

export default InputElement