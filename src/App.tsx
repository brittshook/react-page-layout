import { useState } from "react";
import "./App.css";
import { EmployeePage } from "./pages/EmployeePage";
import { HomePage } from "./pages/HomePage";
import { Employee, allEmployees } from "./data";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >();

  const handleEmployeeClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const employeeName = event.currentTarget.id;
    let selectedEmployee;
    for (const employee of allEmployees) {
      if (employee.name === employeeName) {
        selectedEmployee = employee;
      }
    }
    setSelectedEmployee(selectedEmployee);
  };

  return (
    <div id="app">
      <HomePage onClick={handleEmployeeClick} />
      <EmployeePage employee={selectedEmployee} />
    </div>
  );
}

export default App;
