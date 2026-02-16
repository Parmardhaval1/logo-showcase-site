import { UserPlus, ShoppingCart, Wallet, Gift } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Sign Up Free", desc: "Create your free Buy n Earn account in seconds." },
  { icon: ShoppingCart, title: "Shop Online", desc: "Browse 500+ partner brands and shop as usual." },
  { icon: Wallet, title: "Earn Cashback", desc: "Get real cashback credited to your wallet instantly." },
  { icon: Gift, title: "Withdraw or Spend", desc: "Transfer to your bank or use it on your next purchase." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 lg:py-28 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider font-body">
          How It Works
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
          4 Simple Steps to <span className="text-accent">Start Earning</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={s.title} className="relative text-center group">
            {/* connector line */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
            )}
            <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-card mb-5 group-hover:scale-110 transition-transform">
              <s.icon size={32} className="text-accent-foreground" />
            </div>
            <span className="text-xs font-bold text-secondary font-body">Step {i + 1}</span>
            <h3 className="text-lg font-heading font-bold text-foreground mt-1 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
