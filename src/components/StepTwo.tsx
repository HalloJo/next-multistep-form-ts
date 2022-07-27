import next from "next";
import { ReactElement } from "react";
import styles from '../../src/styles/StepTwo.module.scss'
import { FormData, SetFormData } from "../data/formData";
import InputElement from "./InputElement";

type StepTwoProps = {
    formData: FormData
    setFormData: SetFormData
}

const StepTwo = (props: StepTwoProps): ReactElement => {

    const {formData, setFormData} = props

    return (
        <div>
            <h1>Step Two</h1>
            <form action="">
                <InputElement label="First name" type="text" placeholder="Enter your first name.." value={formData.name} onChange={(name)=> setFormData({...formData, name})}/>
                <InputElement label="Age" type="number" value={formData.age} onChange={(age)=> setFormData({...formData, age: Number(age)})} min={0} max={100} />
                <InputElement label="Phone number" type="tel" placeholder="Enter phone number.." value={formData.number} onChange={(number)=> setFormData({...formData, number})}/>
            </form>
        </div>
    )
}

export default StepTwo