import css from './Contact.module.css';
export default function Contact({ contact }) {
  const { id, name, number } = contact;
  return (
    <ul className={css['contact-list']}>
      <li className={css['contact-item']}>
        <svg className="svg-icon" width="24" height="24">
          <use href="img/icons.svg#icon-user" />
        </svg>
        <p>{name}</p>
      </li>
      <li className={css['contact-item']}>
        <svg className="svg-icon" width="24" height="24">
          <use href="img/icons.svg#icon-phone" />
        </svg>
        <p>{number}</p>
      </li>
      <button id={id} className={css['btn-contact']}>
        Delete
        <svg className="svg-icon" width="24" height="24">
          <use href="img/icons.svg#icon-bin" />
        </svg>
      </button>
    </ul>
  );
}
