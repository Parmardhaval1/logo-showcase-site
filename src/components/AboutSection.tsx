import { Target, Heart, Zap } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To make every purchase rewarding by giving real cashback to our users on their daily shopping.",
  },
  {
    icon: Heart,
    title: "Why Choose Us",
    desc: "Trusted by thousands, we partner with 500+ brands to bring you the best cashback deals across India.",
  },
  {
    icon: Zap,
    title: "Instant Rewards",
    desc: "No waiting, no hidden terms. Get your cashback credited directly to your wallet instantly.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider font-body">
          About Us
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
          Smart Shopping, <span className="text-secondary">Real Earnings</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-body">
          Buy n Earn is India's leading cashback and rewards platform that helps you save money on every purchase.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <div
            key={c.title}
            className="group rounded-2xl bg-card p-8 shadow-card hover:shadow-hero transition-shadow border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <c.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">{c.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
