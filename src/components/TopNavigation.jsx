export default function TopNavigation() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <i className="fas fa-code mr-2 text-blue-600 text-2xl"></i>
            <span className="text-xl font-bold gradient-text">Portfolio</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="nav-link px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="nav-link px-3 py-2 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="nav-link px-3 py-2 text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="nav-link px-3 py-2 text-sm font-medium"
              >
                Testimonials
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="hidden md:hidden bg-white shadow-lg">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block px-3 py-2 text-base font-medium">
            Home
          </a>
          <a href="#about" className="block px-3 py-2 text-base font-medium">
            About
          </a>
          <a href="#services" className="block px-3 py-2 text-base font-medium">
            Services
          </a>
          <a
            href="#portfolio"
            className="block px-3 py-2 text-base font-medium"
          >
            Work
          </a>
          <a href="#contact" className="block px-3 py-2 text-base font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
