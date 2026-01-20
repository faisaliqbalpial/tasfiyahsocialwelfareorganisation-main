import { useState, useEffect } from "react";
import { Menu, X, User, Users, UserCheck, Heart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "হোম", href: "#home" },
    { name: "আমাদের সম্পর্কে", href: "#about" },
    { name: "কার্যক্রম", href: "#activities" },
    { name: "সাম্প্রতিক ঘটনা", href: "#events" },
    { name: "যোগাযোগ", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="তাসফিয়াহ্ সমাজকল্যাণ সংস্থা"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-soft group-hover:shadow-card transition-all duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                তাসফিয়াহ্
              </h1>
              <p className="text-xs text-muted-foreground">সমাজকল্যাণ সংস্থা</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-muted cursor-pointer"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}

            {/* Using NavigationMenu ONLY for the dropdown ensuring correct positioning and hover */}
            <NavigationMenu className="flex-none">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-muted text-muted-foreground hover:text-primary data-[state=open]:bg-muted data-[active]:bg-muted h-9 px-4 py-2 font-medium">
                    আরও
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-2 bg-popover rounded-md shadow-md">
                      <li>
                        <Link
                          to="/founder"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted select-none leading-none no-underline outline-none transition-colors text-popover-foreground"
                        >
                          <User className="w-4 h-4" />
                          <span className="text-sm font-medium">প্রতিষ্ঠাতা</span>
                        </Link>
                      </li>
                      <li className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase">
                        কমিটি
                      </li>
                      <li>
                        <Link
                          to="/committee?type=executive"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted select-none leading-none no-underline outline-none transition-colors text-popover-foreground"
                        >
                          <Users className="w-4 h-4" />
                          <span className="text-sm font-medium">কার্যনির্বাহী কমিটি</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/committee?type=advisory"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted select-none leading-none no-underline outline-none transition-colors text-popover-foreground"
                        >
                          <UserCheck className="w-4 h-4" />
                          <span className="text-sm font-medium">উপদেষ্টা কমিটি</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/committee?type=adhoc"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted select-none leading-none no-underline outline-none transition-colors text-popover-foreground"
                        >
                          <FileText className="w-4 h-4" />
                          <span className="text-sm font-medium">অ্যাডহক কমিটি</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/committee?type=volunteers"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted select-none leading-none no-underline outline-none transition-colors text-popover-foreground"
                        >
                          <Heart className="w-4 h-4" />
                          <span className="text-sm font-medium">স্বেচ্ছাসেবক</span>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="hero" size="default" asChild>
              <Link to="/membership">সদস্য হন</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors mx-2"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}

              {/* Founder - Direct Link */}
              <Link
                to="/founder"
                className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  প্রতিষ্ঠাতা
                </div>
              </Link>

              {/* Committee - Accordion */}
              <Accordion type="single" collapsible className="w-full px-2">
                <AccordionItem value="committee" className="border-none">
                  <AccordionTrigger className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:no-underline hover:bg-muted rounded-lg">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      কমিটি
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0 pt-1">
                    <div className="flex flex-col gap-1 pl-4 border-l ml-6 my-1">
                      <Link
                        to="/committee?type=executive"
                        className="flex items-center gap-2 py-3 px-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md hover:bg-muted/50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        কার্যনির্বাহী কমিটি
                      </Link>
                      <Link
                        to="/committee?type=advisory"
                        className="flex items-center gap-2 py-3 px-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md hover:bg-muted/50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        উপদেষ্টা কমিটি
                      </Link>
                      <Link
                        to="/committee?type=adhoc"
                        className="flex items-center gap-2 py-3 px-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md hover:bg-muted/50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FileText className="w-4 h-4" />
                        অ্যাডহক কমিটি
                      </Link>
                      <Link
                        to="/committee?type=volunteers"
                        className="flex items-center gap-2 py-3 px-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md hover:bg-muted/50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Heart className="w-4 h-4" />
                        স্বেচ্ছাসেবক
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="px-6 mt-4 pb-4">
                <Button variant="hero" size="lg" className="w-full justify-center" asChild>
                  <Link to="/membership" onClick={() => setIsMenuOpen(false)}>সদস্য হন</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
