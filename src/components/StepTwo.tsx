import next from "next";
import { ReactElement } from "react";
import styles from '../../src/styles/StepTwo.module.scss'
import { FormData, SetFormData } from "../data/formData";

type StepTwoProps = {
    formData: FormData
    setFormData: SetFormData
}

const StepTwo = (props: StepTwoProps): ReactElement => {

    const {formData, setFormData} = props

    return (
        <div>
            <h1>Step Two</h1>
        </div>
    )
}

export default StepTwo