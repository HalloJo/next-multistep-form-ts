import next from "next";
import { ReactElement, useState } from "react";
import styles from '../../src/styles/Form.module.scss'
import { data } from "../data/formData";
import Button from "./Button";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const Form = (): ReactElement => {

    const [page, setPage] =  useState(0)
    const [formData, setFormData] = useState(data)

    const formTitles: Array<string> = ["SignUp", "PersonalInfo", "Confirm"]

    const length:number = 2

    const handleClickNext = () => {
        setPage((page) => {
        return page < length ? page + 1 : 0;
        });
        console.log(page);
        
    };
    const handleClickPrevious = () => {
        setPage((page) => {
        return page === 0 ? length : page - 1;
        });
        console.log(page);
        
    };
    

    return (
        <>
            { page === 0 ? <StepOne formData={formData} setFormData={setFormData}  /> : 
              page === 1 ? <StepTwo formData={formData} setFormData={setFormData}  /> : 
              <StepThree formData={formData} setFormData={setFormData} /> }
              <div>
                <Button page={page} disabled label="Previous" onClick={handleClickPrevious} />
                <Button label={page === 2 ? "Submit" : "Next"} onClick={handleClickNext} />
              </div>
        </>
    )
}

export default Form