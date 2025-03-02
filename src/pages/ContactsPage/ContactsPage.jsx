import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import s from "./ContactsPage.module.css";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className={s.wrapper}>
      <h1>Phone Book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
