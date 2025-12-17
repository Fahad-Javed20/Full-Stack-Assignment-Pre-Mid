import HeaderComponent from "./headerComponent";
import NavComponent from "./NavComponent";
import EmployeeFormComponent from "./EmployeeFormComponent";
import EmployeeListComponent from "./EmployeeListComponent";
import FooterComponent from "./FooterComponent";
import HeroComponent from "./HeroComponent";

const EmployeeDashboardComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <NavComponent />
      <HeroComponent />
      <EmployeeFormComponent />
      <EmployeeListComponent />
      <FooterComponent />
    </div>
  );
};

export default EmployeeDashboardComponent;
