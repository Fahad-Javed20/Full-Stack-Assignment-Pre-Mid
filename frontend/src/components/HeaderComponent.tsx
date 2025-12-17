const HeaderComponent = () => {
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#213448', color: '#EEE9DC' }}>
      <div className="container mx-auto flex items-center justify-between py-3 px-5">
        <a href="#" className="flex items-center font-bold text-xl hover:text-gray-300 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-#EEE9DC p-1 bg-#5B7C96 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-2">EmployeePortal</span>
        </a>

        <div className="flex flex-1 mx-5">
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
            style={{ backgroundColor: '#EEE9DC' }}
          />
          <button
            className="px-4 py-2 rounded-r-md font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#A6BBC8', color: '#213448' }}
          >
            Search
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hover:opacity-90 cursor-pointer">Hello, Admin</div>
          <div className="px-3 py-1 rounded cursor-pointer" style={{ backgroundColor: '#A6BBC8', color: '#213448' }}>
            Cart
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
