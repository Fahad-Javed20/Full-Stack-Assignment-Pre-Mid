import HeaderComponent from "./headerComponent";
import NavComponent from "./NavComponent";
import EmployeeFormComponent from "./EmployeeFormComponent";
import EmployeeListComponent from "./EmployeeListComponent";
import FooterComponent from "./FooterComponent";

const EmployeeDashboardComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <NavComponent />
      <EmployeeFormComponent />
      <EmployeeListComponent />
      <FooterComponent />
    </div>
  );
};

export default EmployeeDashboardComponent;
