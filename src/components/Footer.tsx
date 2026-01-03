import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Info */}
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="তাসফিয়াহ্ সমাজকল্যাণ সংস্থা" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold">তাসফিয়াহ্ সমাজকল্যাণ সংস্থা</h3>
                <p className="text-sm text-primary-foreground/70">
                  মানবতার সেবায় নিবেদিত
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#about"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                আমাদের সম্পর্কে
              </a>
              <a
                href="#activities"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                কার্যক্রম
              </a>
              <a
                href="#contact"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                যোগাযোগ
              </a>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} তাসফিয়াহ্ সমাজকল্যাণ সংস্থা। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <p className="text-xs text-primary-foreground/40 mt-2">
              Tasfiyah Social Welfare Organisation - A Non-Profit, Non-Political
              Organization
            </p>
            <p className="text-xs text-primary-foreground/50 mt-3">
              Designed by <span className="text-primary-foreground/70 font-medium">MD Faisal Iqbal</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
