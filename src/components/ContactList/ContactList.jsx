import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { Triangle } from "react-loader-spinner";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { selectLoading } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loader = useSelector(selectLoading);

  return (
    <div>
      {loader && (
        <div className={s.loader}>
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#e9caae"
            ariaLabel="triangle-loading"
          />
        </div>
      )}

      {!loader && contacts.length > 0 ? (
        <ul className={s.wrapper}>
          {contacts.map((item) => (
            <Contact key={item.id} {...item} />
          ))}
        </ul>
      ) : (
        !loader && (
          <p className={s.info}>
            Oops, it seems you don&apos;t have any contacts yet, add them in the
            field above!
          </p>
        )
      )}
    </div>
  );
};

export default ContactList;
