import css from './ContactList.module.css';
import Contact from './contact/Contact';
export default function ContactList({ contactsData }) {
  console.log(contactsData);
  return (
    <ul className={css['contact-list']}>
      {contactsData.map(contact => (
        <li className={css['contact-item']} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
