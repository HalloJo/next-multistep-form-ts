import next from "next";
import { ReactElement, useState } from "react";
import styles from '../../src/styles/Form.module.scss'

const Form = (): ReactElement => {

    const [page, setPage] =  useState(0)

    return (
        <div className={styles.title}>General Form</div>
    )
}



export default Form