import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

const ContactList = ({contacts, onDelete}) => {

    return (
        <ul className={css.listContact}>
            {
                contacts.map(contact => (<Contact     
                        key={contact.id} 
                        name={contact.name} 
                        number={contact.number} 
                        onDelete={() => onDelete(contact.id)}
                        />
                        
                ))
            }
        </ul>
    );
};


export default ContactList;
