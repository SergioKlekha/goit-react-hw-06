import { Formik, Form, Field, ErrorMessage} from "formik";
import { FiUser, FiPhone } from "react-icons/fi";
import * as Yup from "yup";
import css from "./ContactForm.module.css"
import { nanoid } from "nanoid";




const ContactForm = ({onAdd}) => {
    const ContactSchema = Yup.object().shape({
        name:   Yup.string().min(3, 'Too Short!')
                                .max(50, 'Too Long')
                                .required('Required'), 
        number:  Yup.string().min(3, 'Too Short!')
                                .max(50, 'Too Long')
                                .required('Required'),
    });
    return (
        <Formik initialValues={{name: "", 
                                number: "" }}
                validationSchema={ContactSchema}

                onSubmit={(data, actions) => {
                    actions.resetForm();
                    onAdd({
                        id: nanoid(),
                        name: data.name,
                        number: data.number,
                    });
                    console.log(data);
                    
        }}>
            
            <Form className={css.form}>
                <div className={css.blockForm}>

                    <label  
                        htmlFor="name" 
                        className={css.label}>Name</label>

                    <FiUser 
                        className={css.icon}/>

                    <Field  
                        type="text" 
                        name="name"  
                        className={css.input} 
                        autoComplete="off"
                        placeholder="User Name"
                        />

                    <ErrorMessage    
                        name="name" 
                        component="span" 
                        className={css.error}/>
                </div>

                <div className={css.blockForm}>

                    <label 
                        htmlFor="number" 
                        className={css.label}>Number</label>

                    <FiPhone 
                        className={css.icon}/>

                    <Field 
                        type="text" 
                        name="number" 
                        className={css.input} 
                        autoComplete="off"
                        placeholder="User Number"
                        /> 

                    <ErrorMessage 
                        name="number" 
                        component="span" 
                        className={css.error}/>
                </div>
                <button 
                        type="submit" 
                        className={css.button}>Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;