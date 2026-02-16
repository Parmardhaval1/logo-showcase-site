import logo from "@/assets/applogo.png";
import { ShoppingBag, TrendingUp, IndianRupee } from "lucide-react";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden pt-20"
  >
    {/* decorative circles */}
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl" />

    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
      {/* Left */}
      <div className="text-center md:text-left space-y-6 animate-fade-in-up">
        <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent font-body">
          🛒 India's Smartest Cashback Platform
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black leading-tight text-primary-foreground">
          Buy Today, <br />
          <span className="text-accent">Earn Tomorrow</span>
        </h1>
        <p className="text-lg text-primary-foreground/70 font-body max-w-lg">
          Shop from your favourite brands and earn real cashback on every purchase. Start saving smarter with Buy n Earn!
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="rounded-lg bg-gold-gradient px-8 py-3.5 text-sm font-bold text-accent-foreground shadow-hero hover:scale-105 transition-transform"
          >
            Start Earning Now
          </a>
          <a
            href="#how-it-works"
            className="rounded-lg border-2 border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            How It Works
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8 justify-center md:justify-start pt-4">
          {[
            { icon: ShoppingBag, value: "500+", label: "Brands" },
            { icon: TrendingUp, value: "₹2Cr+", label: "Cashback Given" },
            { icon: IndianRupee, value: "50K+", label: "Happy Users" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto mb-1 text-accent" size={20} />
              <p className="text-xl font-bold text-primary-foreground">{s.value}</p>
              <p className="text-xs text-primary-foreground/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Logo */}
      <div className="flex justify-center animate-float">
        <img
          src={logo}
          alt="Buy n Earn Logo"
          className="w-72 sm:w-80 lg:w-[420px] drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
