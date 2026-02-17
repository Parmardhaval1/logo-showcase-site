import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-8">
          Terms of <span className="text-accent">Service</span>
        </h1>
        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground font-body">
          <p>
            These Terms of Service govern the use of the Buy n Earn mobile application and related services provided by Buy N Earn Private Limited.
          </p>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground">1. Acceptance of Terms</h2>
            <p className="mt-4">
              By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground">2. Use of Services</h2>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>The software shall be used solely for the purpose defined in this agreement and in accordance with the authorized scope of use.</li>
              <li>Reverse engineering, decompiling, disassembling, or attempting to derive the source code or underlying algorithms is strictly prohibited.</li>
              <li>Buy N Earn Private Limited reserves the right to monitor or audit software usage to ensure compliance with this agreement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground">3. Reward Points</h2>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>The value of Reward Points shall be Rs. 1/- against 1 Reward Point.</li>
              <li>Reward Points cannot be converted into cash.</li>
              <li>Reward Points must be repurchased from the vendor according to applicable charges and product conditions at the time of purchase.</li>
              <li>Gold biscuits or loose gold are not available against Reward Points; only ornaments may be purchased using Reward Points.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground">4. Limitation of Liability</h2>
            <p className="mt-4">
              Buy N Earn Private Limited shall not be liable for any indirect, incidental, or consequential damages arising from software usage. The company is not responsible for any product purchased by any user which may be returned or exchanged as per the vendor's rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground">5. Complaints</h2>
            <p className="mt-4">
              Users can submit complaints to the Complaint Officer: <strong>Mr. Sagar Parajiya</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground">6. Jurisdiction</h2>
            <p className="mt-4">
              All disputes arising under this Agreement shall be subject to the jurisdiction of the courts of <strong>Rajkot</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground">7. Contact Us</h2>
            <div className="mt-4 space-y-2">
              <p>Email: <a href="mailto:info@buynearn.in" className="text-accent hover:underline">info@buynearn.in</a></p>
              <p>Phone: <a href="tel:+919824844356" className="text-accent hover:underline">+91 98248 44356</a></p>
            </div>
          </section>

          <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border">
            <p className="text-sm text-foreground font-medium">
              By using our services, you acknowledge that you have read, understood, and agree to these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;
