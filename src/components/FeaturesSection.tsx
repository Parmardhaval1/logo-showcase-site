import { Shield, Clock, Smartphone, BadgePercent, Headphones, CreditCard } from "lucide-react";

const features = [
  { icon: BadgePercent, title: "Best Cashback Rates", desc: "Up to 30% cashback on top brands." },
  { icon: Shield, title: "100% Secure", desc: "Your data and payments are fully protected." },
  { icon: Clock, title: "Instant Payouts", desc: "Get cashback within 24 hours." },
  { icon: Smartphone, title: "Mobile Friendly", desc: "Shop & earn on any device, anywhere." },
  { icon: Headphones, title: "24/7 Support", desc: "Our team is always here to help you." },
  { icon: CreditCard, title: "Easy Withdrawal", desc: "Transfer earnings directly to your bank." },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider font-body">
          Features
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
          Why Users <span className="text-secondary">Love Us</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex items-start gap-4 rounded-xl bg-card p-6 border border-border hover:border-primary/30 hover:shadow-card transition-all"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <f.icon size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
