import { ContactListItem } from "./ContactListItem";
import { EmployeeListItem } from "./EmployeeListItem";
import styles from "./ContactList.module.css";

type Props = {
  name: string;
  title: string;
  img: string;
  officePhone: string;
  mobilePhone: string;
  email: string;
};

export const ContactList = ({
  name,
  title,
  img,
  officePhone,
  mobilePhone,
  email,
}: Props) => {
  return (
    <div className={styles.container}>
      <EmployeeListItem name={name} title={title} imgPath={img} size="large" />
      <ContactListItem title="Call Office" contactInfo={officePhone} />
      <ContactListItem title="Call Mobile" contactInfo={mobilePhone} />
      <ContactListItem title="SMS" contactInfo={mobilePhone} />
      <ContactListItem title="Email" contactInfo={email} />
    </div>
  );
};
