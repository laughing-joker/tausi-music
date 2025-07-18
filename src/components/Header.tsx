import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import musicDiscIcon from "@/assets/music-disc-icon.png";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img 
            src={musicDiscIcon} 
            alt="Tausi Music Logo" 
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold text-foreground">Tausi Music</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition-colors font-medium ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            to="/album" 
            className={`transition-colors font-medium ${isActive('/album') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
          >
            Album
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors font-medium ${isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
          >
            About
          </Link>
          <Link 
            to="/news" 
            className={`transition-colors font-medium ${isActive('/news') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
          >
            News
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors font-medium ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
          >
            Contact
          </Link>
        </nav>

        {/* Login Button */}
        <Button variant="default" size="default" className="rounded-full px-6">
          Login
        </Button>

        {/* Mobile menu button - placeholder for future implementation */}
        <button className="md:hidden text-foreground">
          <Music className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;