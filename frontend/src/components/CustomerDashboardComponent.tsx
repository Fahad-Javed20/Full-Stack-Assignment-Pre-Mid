import HeaderComponent from "./headerComponent";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import HeroComponent from "./HeroComponent";
import CustomerFormComponent from "./CustomerFormComponent";
import CustomerListComponent from "./CustomerListComponent";

const CustomerDashboardComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <NavComponent />
      <HeroComponent />
      <CustomerFormComponent />
      <CustomerListComponent />
      <FooterComponent />
    </div>
  );
};

export default CustomerDashboardComponent;
