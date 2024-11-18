import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

function ContactsList({ contacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h3>your contacts</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.massage}>no contacts yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
