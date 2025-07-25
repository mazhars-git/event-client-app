// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Adjust path to your shadcn button

const Navbar = () => {
  return (
    <div className="bg-sky-500 shadow-md">
      <nav className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-primary uppercase">
          Event<span className="text-white">App</span>
        </Link>

        {/* Links */}
        <div className="flex gap-4">
          <Button variant="link" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="/create-event">CreateEvent</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
