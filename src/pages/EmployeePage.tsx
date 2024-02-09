import { ContactList } from "../components/ContactList";
import { Header } from "../components/Header";
import { Employee } from "../data.ts";
import styles from "./Page.module.css";

type Props = {
  employee?: Employee;
};

export const EmployeePage = ({ employee }: Props) => {
  return (
    <div className={styles.page}>
      <Header showBackButton={true}>Employee</Header>
      {employee && (
        <ContactList
          name={employee.name}
          title={employee.title}
          img={employee.img}
          officePhone={employee.officePhone}
          mobilePhone={employee.mobilePhone}
          email={employee.email}
        />
      )}
    </div>
  );
};
