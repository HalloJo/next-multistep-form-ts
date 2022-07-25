import next from "next";
import { ReactElement } from "react";
import styles from '../../src/styles/StepOne.module.scss'
import { FormData, SetFormData } from "../data/formData";
import InputElement from "./InputElement";

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
            
                <InputElement label="Email address" type="email" placeholder="Enter email.." value={formData.email} onChange={(email)=> setFormData({...formData, email})}/>
                <InputElement label="Password" type="password" placeholder="Enter password.." value={formData.password} onChange={(password)=> setFormData({...formData, password})}/>
                

                {/* <div>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter password.." value={formData.password} onChange={(event) => setFormData({...formData, password: event?.target.value })} />
                </div> */}
            </form>
        </div>
    )
}

export default StepOne