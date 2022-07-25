import next from "next";
import { ReactElement } from "react";
import styles from '../../src/styles/StepOne.module.scss'
import { FormData, SetFormData } from "../data/formData";

type StepOneProps = {
    formData: FormData
    setFormData: SetFormData
}

const StepOne = (props: StepOneProps): ReactElement => {

    const {formData, setFormData} = props

    return (
        <div>
            <h1>Step One</h1>
            <form action="">
            <div>
                <label htmlFor="">Email address</label>
                <input type="email" placeholder="Enter email.." value={formData.email} onChange={(event) => setFormData({...formData, email: event?.target.value })}/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter password.." value={formData.password} onChange={(event) => setFormData({...formData, password: event?.target.value })} />
            </div>
            </form>
        </div>
    )
}

export default StepOne