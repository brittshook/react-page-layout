import { Employee } from "../data";
import { EmployeeListItem } from "./EmployeeListItem";
import styles from "./EmployeeList.module.css";

type Props = {
  employees: Employee[];
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const EmployeeList = ({ employees, onClick }: Props) => {
  return (
    <div className={styles.container}>
      {employees.map((employee, i) => (
        <EmployeeListItem
          key={i}
          name={employee.name}
          title={employee.title}
          imgPath={employee.img}
          onClick={onClick}
          size="small"
        />
      ))}
    </div>
  );
};
