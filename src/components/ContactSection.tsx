import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 lg:py-28 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider font-body">
          Contact Us
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-body">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5 bg-card rounded-2xl p-8 shadow-card border border-border"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>

        {/* Info */}
        <div className="space-y-8 flex flex-col justify-center">
          {[
            { icon: Mail, label: "Email Us", value: "info@buynearn.in" },
            { icon: Phone, label: "Call Us", value: "+91 98248 44356" },
            { icon: MapPin, label: "Visit Us", value: "New Delhi, India" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <c.icon size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">{c.label}</p>
                <p className="text-muted-foreground font-body text-sm">{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
