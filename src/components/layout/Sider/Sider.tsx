import SocialButtons from "@/components/layout/Sider/SocialButtons";
import RouteButtons from "@/components/layout/Sider/RouteButtons";
import AvatarBox from "@/components/layout/Sider/AvatarBox";
import { useState, useEffect } from "react";
import {
  MenuIcon,
  XIcon
} from 'lucide-react'

type SiderProps = {
  isMobile?: boolean;
};

const Sider = ({isMobile = false}: SiderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when switching from mobile to desktop view
  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [menuOpen]);

  // Close menu when route changes
  const handleRouteClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };
  
  const siderContent = (
    <>
      <AvatarBox />
      <RouteButtons onRouteClick={handleRouteClick} />
      <SocialButtons />
    </>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile header with avatar and menu button */}
        <header className="fixed top-0 left-0 right-0 flex justify-between items-center bg-secondary z-20 px-4 py-3 shadow-md">
          <div className="flex-shrink-0">
            <AvatarBox mobile={true} />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-gray-200 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? 
              <XIcon className="h-6 w-6" /> : 
              <MenuIcon className="h-6 w-6" />
            }
          </button>
        </header>

        {/* Mobile menu overlay */}
        {/* Backdrop overlay - animate opacity */}
        <div 
          className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenuOpen(false)}
        />
            
        {/* Slide-in menu - animate transform */}
        <div 
          className={`fixed top-0 left-0 h-screen w-64 px-4 py-12 space-y-4 overflow-y-auto bg-secondary z-40 shadow-xl transition-all duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {siderContent}
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
            aria-label="Close menu"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
      </>
    );
  }

  // Desktop view
  return (
    <div className="fixed left-0 top-0 h-screen w-60 px-4 py-12 space-y-4 overflow-y-auto bg-secondary">
      {siderContent}
    </div>
  )
};

export default Sider;
