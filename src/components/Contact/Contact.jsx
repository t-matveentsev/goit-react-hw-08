import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <p>{name}</p>
      <p>{number}</p>
      <button className={s.itemBtn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
