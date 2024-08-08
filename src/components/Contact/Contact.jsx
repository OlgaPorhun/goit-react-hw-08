import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <p>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          {contact.name}
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          {contact.number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
