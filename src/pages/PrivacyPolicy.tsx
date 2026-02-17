import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-8">
          Privacy Policy & Terms – <span className="text-accent">Buyn Earn</span>
        </h1>
        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground font-body">
          <p>
            This Privacy Policy and Terms & Conditions document governs the use of the Buyn Earn mobile application and related services.
          </p>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground">Reward Points Policy</h2>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>The value of Reward Points which will be given by the vendor to their consumers shall be Rs. 1/- against 1 Reward Point.</li>
              <li>The Reward Point cannot be converted into cash.</li>
              <li>The Reward Points given by the vendor have to be repurchased from the vendor itself and they have to repurchase according to the making charge, other charges, the price of the product at that time, and the condition of the product at that time.</li>
              <li>Buy N Earn Private Limited is not responsible for any product purchased by any user which may be returned or exchanged as per the vendor's rules.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground">Terms and Conditions for Vendor</h2>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>The software shall be used solely for the purpose defined in this agreement and in accordance with the authorized scope of use.</li>
              <li>Reverse engineering, decompiling, disassembling, or attempting to derive the source code or underlying algorithms is strictly prohibited.</li>
              <li>The value of Reward Points which will be given by the party of the "Second Part" to their consumers shall be Rs. 1/- against 1 Reward Point. As against the number of reward points the customer gets, the customer has to buy from that place and all extra charges in relation to purchase will be charged separately. The Reward Point cannot be converted into cash.</li>
              <li>The Reward Points given by the vendor have to be repurchased from the vendor itself according to the making charge, other charges, the price of the product at that time, and the condition of the product at that time. Gold biscuits or loose gold are not available against Reward Points; only ornaments may be purchased using Reward Points.</li>
              <li>Buy N Earn Private Limited (hereinafter referred to as the "First Part") is not responsible for any product purchased by any user which may be returned or exchanged as per the vendor's rules.</li>
              <li>User can submit complaints to the Complaint Officer: <strong>Mr. Sagar Parajiya</strong>.</li>
              <li>The party of the "First Part" reserves the right to monitor or audit software usage to ensure compliance with this agreement.</li>
              <li>The party of the "First Part" shall not be liable for any indirect, incidental, or consequential damages arising from software usage.</li>
              <li>These usage restrictions shall remain in effect even after the expiration or termination of this agreement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground">Privacy Policy</h2>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>All personal data, user data, source code, system architecture, and software-related information shall be treated as confidential and protected from unauthorized access, disclosure, or misuse.</li>
              <li>Confidential information and personal data shall be used only for the purposes defined in this agreement and not for any other commercial or personal use.</li>
              <li>Reasonable technical and organizational security measures such as access controls, encryption, and secure storage shall be implemented to protect the software and associated data.</li>
              <li>Access to confidential software data shall be limited to authorized personnel who have a legitimate need to know and are bound by confidentiality obligations.</li>
              <li>Privacy and confidentiality obligations shall survive the termination or expiration of this agreement.</li>
              <li>Upon termination of the agreement, all confidential data including copies, backups, and derived materials shall be returned or securely deleted.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground">Jurisdiction</h2>
            <p className="mt-4">
              All disputes arising under this Agreement shall be subject to the jurisdiction of the courts of <strong>Rajkot</strong>.
            </p>
          </section>

          <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border">
            <p className="text-sm text-foreground font-medium">
              By using our services, you acknowledge that you have read, understood, and agree to these Terms & Conditions and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
