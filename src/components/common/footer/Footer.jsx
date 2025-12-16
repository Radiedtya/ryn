import logo from "../../../assets/logo.png";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "Home" },
  { id: 2, name: "About", url: "About" },
  { id: 3, name: "Process", url: "Process" },
  { id: 4, name: "Portfolio", url: "Portfolio" },
  { id: 5, name: "Blog", url: "Blog" },
  { id: 6, name: "Services", url: "Services" },
  { id: 7, name: "Contact", url: "Contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="pt-25 md:pt-40 bg-neutral-950 text-neutral-200 max-2xl:px-3">
      <div className="content grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#introduction" className="flex items-center border-0 mb-4">
            <img src={logo} className="h-10 sm:h-14 rounded-2xl" alt="logo" />
            <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
              Ryn<span className="text-purple-700">Dev</span>
            </p>
          </a>
          <p className="text-sm text-neutral-400 max-w-sm">
            RynDev adalah personal portfolio & digital studio yang berfokus pada
            UI/UX Design, Web Development, dan solusi digital modern.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.url.toLowerCase()}`}
                className="relative group text-sm sm:text-base"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-600 scale-x-0 duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact & Social */}
        <div className="text-center md:text-right">
          <h4 className="font-semibold mb-4 text-lg">Sosial Media</h4>
          <p className="text-sm text-neutral-400 mb-3">Let’s build something together 🚀</p>
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/Radiedtya"
              target="_blank"
              className="hover:text-purple-500 duration-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-purple-500 duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-800 mt-12 pt-6 text-center">
        <p className="text-xs sm:text-sm text-neutral-400">
          © {copyrightYear} RynDev. All Rights Reserved.
        </p>
        <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-6">
          {" "}
          <a
            href="https://github.com/Radiedtya"
            className="underline font-bold"
            target="_blank"
          >
            
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

