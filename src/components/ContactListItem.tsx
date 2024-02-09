import styles from "./ContactListItem.module.css";

type Props = {
  title: string;
  contactInfo: string;
};

export const ContactListItem = ({ title, contactInfo }: Props) => {
  return (
    <div className={`has-click-event ${styles.container}`}>
      <div>
        <h3>{title}</h3>
        <p>{contactInfo}</p>
      </div>
      <button>
        <img src="icons/chevron_right.svg" alt={title} title={title}></img>
      </button>
    </div>
  );
};
