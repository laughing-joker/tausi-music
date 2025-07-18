import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import musicDiscIcon from "@/assets/music-disc-icon.png";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src={musicDiscIcon} 
            alt="Tausi Music Logo" 
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold text-foreground">Tausi Music</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#album" className="text-foreground hover:text-primary transition-colors font-medium">
            Album
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#news" className="text-foreground hover:text-primary transition-colors font-medium">
            News
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </a>
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