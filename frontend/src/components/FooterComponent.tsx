const FooterComponent = () => {
  return (
    <footer>
      <div style={{  color: '#213448' }} className=" bg-whitecontainer mx-auto px-5 py-10">
        <div className="flex flex-wrap justify-between text-sm">
          <div className="w-full sm:w-1/2 md:w-1/6 mb-6">
            <h2 className="font-bold mb-3">COMPANY</h2>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:opacity-80">About Us</a></li>
              <li><a href="/careers" className="hover:opacity-80">Careers</a></li>
              <li><a href="/press" className="hover:opacity-80">Press</a></li>
              <li><a href="/blog" className="hover:opacity-80">Blog</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/6 mb-6">
            <h2 className="font-bold mb-3">PRODUCTS</h2>
            <ul className="space-y-2">
              <li><a href="/features" className="hover:opacity-80">Features</a></li>
              <li><a href="/pricing" className="hover:opacity-80">Pricing</a></li>
              <li><a href="/integrations" className="hover:opacity-80">Integrations</a></li>
              <li><a href="/updates" className="hover:opacity-80">Updates</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/6 mb-6">
            <h2 className="font-bold mb-3">RESOURCES</h2>
            <ul className="space-y-2">
              <li><a href="/docs" className="hover:opacity-80">Documentation</a></li>
              <li><a href="/tutorials" className="hover:opacity-80">Tutorials</a></li>
              <li><a href="/community" className="hover:opacity-80">Community</a></li>
              <li><a href="/api" className="hover:opacity-80">API Reference</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/6 mb-6">
            <h2 className="font-bold mb-3">SUPPORT</h2>
            <ul className="space-y-2">
              <li><a href="/help" className="hover:opacity-80">Help Center</a></li>
              <li><a href="/contact" className="hover:opacity-80">Contact Us</a></li>
              <li><a href="/report" className="hover:opacity-80">Report Issue</a></li>
              <li><a href="/status" className="hover:opacity-80">System Status</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/6 mb-6">
            <h2 className="font-bold mb-3">LEGAL</h2>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:opacity-80">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:opacity-80">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:opacity-80">Cookie Policy</a></li>
              <li><a href="/licenses" className="hover:opacity-80">Licenses</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/6 mb-6">
            <h2 className="font-bold mb-3">CONTACT</h2>
            <ul className="space-y-2">
              <li><a href="mailto:support@yourcompany.com" className="hover:opacity-80">Email Us</a></li>
              <li><a href="/chat" className="hover:opacity-80">Live Chat</a></li>
              <li><a href="/locations" className="hover:opacity-80">Office Locations</a></li>
              <li><a href="/partners" className="hover:opacity-80">Partnerships</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#547792', color: '#EEE9DC' }} className="py-4 text-sm text-center">
        © 2025 EmployeePortal. Built with ♥ by Fahad Bin Javed
      </div>
      
    </footer>
  );
};

export default FooterComponent;
