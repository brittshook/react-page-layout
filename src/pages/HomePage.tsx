import { EmployeeList } from "../components/EmployeeList";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { allEmployees } from "../data";
import styles from "./Page.module.css"

type Props = {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const HomePage = ({ onClick }: Props) => {
  return (
    <div className={styles.page}>
      <Header>Employee Directory</Header>
      <SearchBar />
      <EmployeeList employees={allEmployees} onClick={onClick} />
    </div>
  );
};
