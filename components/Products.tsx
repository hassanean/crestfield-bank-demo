import { CreditCard, PiggyBank, Wallet, Home, Briefcase, BarChart3, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Wallet,
    title: "Checking Accounts",
    description: "No monthly fees, free ATM access nationwide, and real-time transaction alerts.",
    cta: "Open Checking",
    badge: "Most Popular",
    highlight: true,
  },
  {
    icon: PiggyBank,
    title: "Savings Accounts",
    description: "Earn up to 4.85% APY with our High-Yield Savings — no minimums required.",
    cta: "Start Saving",
    badge: "4.85% APY",
    highlight: false,
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Earn 3% cash back on dining and travel, 1.5% on everything else. No annual fee.",
    cta: "Apply Now",
    badge: "3% Cash Back",
    highlight: false,
  },
  {
    icon: Home,
    title: "Home Loans",
    description: "Competitive mortgage rates with personalized guidance from application to closing.",
    cta: "Get a Quote",
    badge: null,
    highlight: false,
  },
  {
    icon: Briefcase,
    title: "Business Banking",
    description: "Everything your business needs — from payroll to merchant services to business credit.",
    cta: "Learn More",
    badge: null,
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Investments",
    description: "Grow your wealth with IRAs, brokerage accounts, and personalized wealth management.",
    cta: "Start Investing",
    badge: null,
    highlight: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">Our Products</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F4A] mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            From daily banking to long-term planning, Crestfield has a product designed to fit your life and financial goals.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className={`group relative rounded-2xl p-6 border transition-all hover:shadow-lg ${
                  product.highlight
                    ? "bg-[#0B1F4A] border-[#0B1F4A] text-white"
                    : "bg-white border-gray-200 hover:border-[#0B1F4A]/30"
                }`}
              >
                {product.badge && (
                  <span
                    className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full ${
                      product.highlight
                        ? "bg-[#D4AF37] text-[#0B1F4A]"
                        : "bg-[#EFF2F9] text-[#0B1F4A]"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    product.highlight ? "bg-white/15" : "bg-[#EFF2F9]"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${product.highlight ? "text-[#D4AF37]" : "text-[#0B1F4A]"}`} />
                </div>

                <h3 className={`text-lg font-semibold mb-2 ${product.highlight ? "text-white" : "text-[#0B1F4A]"}`}>
                  {product.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${product.highlight ? "text-blue-200" : "text-gray-500"}`}>
                  {product.description}
                </p>

                <a
                  href="#"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    product.highlight
                      ? "text-[#D4AF37] hover:text-white"
                      : "text-[#0B1F4A] hover:text-[#D4AF37]"
                  }`}
                >
                  {product.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
