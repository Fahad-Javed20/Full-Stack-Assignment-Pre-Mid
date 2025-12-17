const FooterComponent = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">

          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li><a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-gray-800">Careers</a></li>
              <li><a href="/press" className="text-gray-600 hover:text-gray-800">Press</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-gray-800">Blog</a></li>
            </nav>
          </div>

          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              PRODUCTS
            </h2>
            <nav className="list-none mb-10">
              <li><a href="/features" className="text-gray-600 hover:text-gray-800">Features</a></li>
              <li><a href="/pricing" className="text-gray-600 hover:text-gray-800">Pricing</a></li>
              <li><a href="/integrations" className="text-gray-600 hover:text-gray-800">Integrations</a></li>
              <li><a href="/updates" className="text-gray-600 hover:text-gray-800">Updates</a></li>
            </nav>
          </div>

          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              RESOURCES
            </h2>
            <nav className="list-none mb-10">
              <li><a href="/docs" className="text-gray-600 hover:text-gray-800">Documentation</a></li>
              <li><a href="/tutorials" className="text-gray-600 hover:text-gray-800">Tutorials</a></li>
              <li><a href="/community" className="text-gray-600 hover:text-gray-800">Community</a></li>
              <li><a href="/api" className="text-gray-600 hover:text-gray-800">API Reference</a></li>
            </nav>
          </div>

          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="list-none mb-10">
              <li><a href="/help" className="text-gray-600 hover:text-gray-800">Help Center</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
              <li><a href="/report" className="text-gray-600 hover:text-gray-800">Report Issue</a></li>
              <li><a href="/status" className="text-gray-600 hover:text-gray-800">System Status</a></li>
            </nav>
          </div>

          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              LEGAL
            </h2>
            <nav className="list-none mb-10">
              <li><a href="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-gray-800">Terms of Service</a></li>
              <li><a href="/cookies" className="text-gray-600 hover:text-gray-800">Cookie Policy</a></li>
              <li><a href="/licenses" className="text-gray-600 hover:text-gray-800">Licenses</a></li>
            </nav>
          </div>

          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CONTACT
            </h2>
            <nav className="list-none mb-10">
              <li><a href="mailto:support@yourcompany.com" className="text-gray-600 hover:text-gray-800">Email Us</a></li>
              <li><a href="/chat" className="text-gray-600 hover:text-gray-800">Live Chat</a></li>
              <li><a href="/locations" className="text-gray-600 hover:text-gray-800">Office Locations</a></li>
              <li><a href="/partners" className="text-gray-600 hover:text-gray-800">Partnerships</a></li>
            </nav>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label className="leading-7 text-sm text-gray-600">
                Subscribe to our newsletter
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8"
              />
            </div>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 YourCompany. All rights reserved.
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 text-gray-500 text-sm">
            Built with ♥ by Fahad Bin Javed
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
