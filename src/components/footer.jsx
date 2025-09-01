export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 md:pt-[10rem] px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#A3D421] mb-6">
            Sidcup
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Fun, adventure, and experiences you’ll never forget. 
            Stay updated with our latest offers and news.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-[#A3D421] mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-lg md:text-xl">
            <li><a href="#" className="hover:text-[#A3D421] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#A3D421] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[#A3D421] transition">Events</a></li>
            <li><a href="#" className="hover:text-[#A3D421] transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold text-[#A3D421] mb-6">
            Services
          </h3>
          <ul className="space-y-3 text-lg md:text-xl">
            <li><a href="#" className="hover:text-[#A3D421] transition">Mini Golf</a></li>
            <li><a href="#" className="hover:text-[#A3D421] transition">Food & Drinks</a></li>
            <li><a href="#" className="hover:text-[#A3D421] transition">Parties</a></li>
            <li><a href="#" className="hover:text-[#A3D421] transition">Membership</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-2xl font-semibold text-[#A3D421] mb-6 text-center md:text-left">
            Newsletter
          </h3>
          <div className="flex flex-col md:flex-col lg:flex-row items-center w-full gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="md:px-18 p-14 lg:p-5 py-4  rounded-lg border border-white text-white outline-none text-lg md:text-xl"
            />
            <button className="w-full md:w-full lg:w-auto px-8 py-4 bg-[#A3D421] hover:bg-lime-600 rounded-lg font-bold text-lg md:text-xl transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-14 pt-8 text-center text-gray-400 text-base md:text-lg">
        © {new Date().getFullYear()} Sidcup. All Rights Reserved.
      </div>
    </footer>
  );
};
