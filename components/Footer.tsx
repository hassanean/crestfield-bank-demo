import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  Personal: ["Checking Accounts", "Savings Accounts", "Credit Cards", "Mortgages", "Personal Loans", "Auto Loans"],
  Business: ["Business Checking", "Business Savings", "Business Loans", "Merchant Services", "Payroll", "Business Credit Cards"],
  Investments: ["Brokerage Accounts", "Retirement (IRA)", "401(k) Rollover", "Wealth Management", "College Savings (529)", "Life Insurance"],
  Company: ["About Crestfield", "Careers", "Newsroom", "Investor Relations", "Community", "Accessibility"],
};

export default function Footer() {
  return (
    <footer className="bg-[#071433] text-white">
      {/* CTA Banner */}
      <div className="bg-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[#0B1F4A] font-bold text-lg">Ready to make the switch?</p>
            <p className="text-[#0B1F4A]/70 text-sm">Open an account in minutes. No paperwork required.</p>
          </div>
          <a
            href="#"
            className="whitespace-nowrap bg-[#0B1F4A] hover:bg-[#1A3B7C] text-white font-semibold px-7 py-3 rounded-full text-sm transition-colors shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-[#D4AF37] font-bold text-lg leading-none">C</span>
              </div>
              <span className="text-white font-bold text-lg">Crestfield Bank</span>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed mb-6">
              Serving communities with trusted banking since 1974. FDIC insured. Equal Housing Lender.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-300 text-xs">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>1200 Financial Blvd, Austin, TX 78701</span>
              </div>
              <div className="flex items-center gap-2 text-blue-300 text-xs">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>1-800-555-BANK (2265)</span>
              </div>
              <div className="flex items-center gap-2 text-blue-300 text-xs">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>support@crestfieldbank.com</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-blue-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-blue-300 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-400 text-xs">
            © {new Date().getFullYear()} Crestfield Bank. All rights reserved. Member FDIC. Equal Housing Lender.
          </p>
          <div className="flex flex-wrap gap-4">
            {["Privacy Policy", "Terms of Use", "Cookie Policy", "Accessibility", "Sitemap"].map((link) => (
              <a key={link} href="#" className="text-blue-400 text-xs hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
