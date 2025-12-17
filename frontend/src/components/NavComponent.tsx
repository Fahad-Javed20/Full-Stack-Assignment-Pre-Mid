const NavbarComponent = () => {
  return (
    <nav  style={{ backgroundColor: '#547792', color: '#EEE9DC' }}>
      <div className="container mx-auto flex space-x-6 px-5 py-2">
        <a href="#" className="hover:opacity-90 transition-opacity">Home</a>
        <a href="#" className="hover:opacity-90 transition-opacity">Employees</a>
        <a href="#footer" className="hover:opacity-90 transition-opacity">Departments</a>
        <a href="#" className="hover:opacity-90 transition-opacity">Reports</a>
        <a href="#" className="hover:opacity-90 transition-opacity">Settings</a>
      </div>
    </nav>
  );
};

export default NavbarComponent;
