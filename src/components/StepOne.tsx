import next from "next";
import { ReactElement } from "react";
import styles from '../../src/styles/StepOne.module.scss'
import { FormData, SetFormData } from "../data/formData";
import Button from "./Button";
import InputElement from "./InputElement";

type StepOneProps = {
    formData: FormData
    setFormData: SetFormData
    handleClickPrevious: () => void
    handleClickNext: () => void
}

const StepOne = (props: StepOneProps): ReactElement => {

    const {formData, setFormData, handleClickPrevious, handleClickNext} = props

    return (
        <div>
            <h1>Step One</h1>
            <form action="">
                <InputElement label="Email address" type="email" placeholder="Enter email.." value={formData.email} onChange={(email)=> setFormData({...formData, email})}/>
                <InputElement label="Password" type="password" placeholder="Enter password.." value={formData.password} onChange={(password)=> setFormData({...formData, password})}/>
                <Button disabled label="Previous" onClick={handleClickPrevious} />
                <Button label="Next" onClick={handleClickNext} />
            </form>
        </div>
    )
}

export default StepOne