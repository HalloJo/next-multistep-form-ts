import next from "next";
import { ReactElement } from "react";
import styles from '../../src/styles/StepThree.module.scss'
import { FormData, SetFormData } from "../data/formData";

type StepThreeProps = {
    formData: FormData
    setFormData: SetFormData
}

const StepThree = (props: StepThreeProps): ReactElement => {

    const {formData, setFormData} = props

    return (
        <div>
            <h1>Step Three</h1>
        </div>
    )
}

export default StepThree