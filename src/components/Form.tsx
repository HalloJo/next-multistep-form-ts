import next from "next";
import { ReactElement, useState } from "react";
import styles from '../../src/styles/Form.module.scss'
import { formData } from "../data/formData";

const Form = (): ReactElement => {

    const [page, setPage] =  useState(0)
    const [data, setData] = useState(formData)

    return (
        <div className={styles.title}>Form!</div>
    )
}



export default Form