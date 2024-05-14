import { ErrorMessage, Field } from "formik"
import styles from "./AuthForm.module.css";

const CustomInputs = ({name, placeholder, type = 'text'}) => {
    return (
            <label className={styles.label}>
        {name}
            <Field className={styles.input} type={type} name={name} placeholder={placeholder} />
            <ErrorMessage className={styles.error} name={name} component={'p'} />
        </label>
    )
}

export default CustomInputs