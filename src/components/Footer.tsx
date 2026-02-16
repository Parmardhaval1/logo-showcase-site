import logo from "@/assets/applogo.png";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <img src={logo} alt="Buy n Earn" className="h-16 w-auto mb-4 brightness-0 invert" />
          <p className="text-primary-foreground/60 text-sm font-body">
            India's smartest cashback platform. Buy today, earn tomorrow.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm font-body">
            {["Home", "About", "How It Works", "Features"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-primary-foreground/60 hover:text-accent transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Legal</h4>
          <ul className="space-y-2 text-sm font-body">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
              <li key={l}>
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-2 text-sm font-body text-primary-foreground/60">
            <li>support@buynearn.in</li>
            <li>+91 98765 43210</li>
            <li>New Delhi, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-sm text-primary-foreground/50 font-body">
          © {new Date().getFullYear()} Buy n Earn. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
