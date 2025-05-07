import { Formik, Form } from "formik";
import css from "./SearchBox.module.css";



const SearchBox = ({value, onFilter}) => {

    return (
        <Formik>
            <Form className={css.form}>
                <label  htmlFor="" 
                        className={css.label}>
                    Find contact by form
                            </label>

                <input  type="text" 
                        className={css.input}
                        value={value}
                        onChange={(event) => onFilter(event.target.value)}
                            />
            </Form>
        </Formik>
    );
};


export default SearchBox;