import { useEffect, useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { ModeToggle } from "./ui/modle-toggle";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isAuthenticated,logout,checkAuth} = useAuthStore()
useEffect(() => {
checkAuth()
}, [])
  return (
    <nav className="p-4 shadow-lg w-full overflow-hidden bg-[#3762C6]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white">
            <Shield className="h-8 w-8" />
            <span className="text-2xl font-bold">JusticeBridge</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/story">Story</NavLink>
            <NavLink href="/grievence">Log Grievence</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          <div className="flex gap-3">
            <div>
              <ModeToggle />
            </div>
            {isAuthenticated && <Link to={'/dashboard'} className="hidden md:block"><Button>Dashboard</Button></Link>}
           {isAuthenticated ? <Button variant={"destructive"} className="hidden md:block" onClick={logout}>Logout</Button>: <Link to={'/login'}>
            <button className="hidden md:block bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Login
          </button>
            </Link>}
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <NavLink href="/story" mobile>
              Story
            </NavLink>
            <NavLink href="/grievence" mobile>
              Log Greivence
            </NavLink>
            <NavLink href="/about" mobile>
              About
            </NavLink>
            {isAuthenticated && <Link to={'/dashboard'} className="mr-4"><Button>Dashboard</Button></Link>}
          {isAuthenticated ? <Button variant={"destructive"} onClick={logout}>Logout</Button>:  <Link to={'/login'}>
            <button className=" bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Login
          </button>
            </Link>}
          </div>
        )}
      </div>
    </nav>
  );
}
interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  mobile?: boolean;
}
function NavLink({ href, children, mobile = false }: NavLinkProps) {
  const baseClasses =
    "text-white hover:text-yellow-300 font-semibold transition duration-300 ease-in-out";
  const mobileClasses = mobile ? "block py-2" : "";
  return (
    <Link to={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </Link>
  );
}
