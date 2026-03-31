import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({carts}) => {
  return (
    <div className="flex justify-between items-center px-3 md:px-8 py-4 shadow-md bg-white max-w-7xl mx-auto rounded-lg">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold cursor-pointer text-purple-500">
          DigiTools
        </h1>
      </div>

      {/* Menu */}
      <nav className="hidden md:flex">
        <ul className="flex gap-6 items-center text-gray-600 font-medium">
          <li className="hover:text-primary cursor-pointer transition">
            Product
          </li>
          <li className="hover:text-primary cursor-pointer transition">
            Features
          </li>
          <li className="hover:text-primary cursor-pointer transition">
            Pricing
          </li>
          <li className="hover:text-primary cursor-pointer transition">
            Testimonials
          </li>
          <li className="hover:text-primary cursor-pointer transition">FAQ</li>
        </ul>
      </nav>

      {/* Right Side */}
      <div className="flex gap-3 md:gap-5 items-center">

        <div className="relative cursor-pointer group">
          <FaCartShopping className="text-2xl cursor-pointer hover:text-primary transition" />

        {
          carts.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
              {carts.length}
            </span>
          )
        }
        </div>
        
        

        <h2 className="text-sm font-medium cursor-pointer hover:text-primary">
          Login
        </h2>

        <button className="btn bg-linear-to-br from-purple-500 rounded-full px-5">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
