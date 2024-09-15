import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between w-full px-16 py-4 bg-white border-b border-neutral-400">
      <img
        src="/digistar-oca-29/images/logo/logo.png"
        alt="Logo"
        className="h-8"
      />
      <Bell className="text-blue-500" />
    </nav>
  );
};

export default Navbar;
