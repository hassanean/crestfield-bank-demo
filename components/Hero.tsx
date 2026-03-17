import { ArrowRight, ShieldCheck, TrendingUp, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#0B1F4A] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1A3B7C] rounded-full opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#071433] rounded-full opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0F2A5E] rounded-full opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#D4AF37] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-[#D4AF37]/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              FDIC Insured · Trusted Since 1974
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Banking Built{" "}
              <span className="text-[#D4AF37]">for Your</span>{" "}
              Future
            </h1>

            <p className="text-lg text-blue-200 mb-8 max-w-lg leading-relaxed">
              From everyday checking to long-term investments, Crestfield Bank gives you the tools, rates, and support
              to reach your financial goals — at every stage of life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#C9931A] text-[#0B1F4A] font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg text-base"
              >
                Open an Account
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-medium px-7 py-3.5 rounded-full transition-colors text-base"
              >
                Explore Products
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: ShieldCheck, label: "FDIC Insured", sub: "Up to $250K" },
                { icon: TrendingUp, label: "4.85% APY", sub: "High-Yield Savings" },
                { icon: Smartphone, label: "Award-Winning App", sub: "iOS & Android" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[#D4AF37] w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{label}</p>
                    <p className="text-blue-300 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: product highlights */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Open account CTA card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
              <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-2">Get Started Today</p>
              <h3 className="text-white text-xl font-bold mb-1">Open an Account in Minutes</h3>
              <p className="text-blue-200 text-sm mb-5">No paperwork. No branch visit required. Just a few details and you're in.</p>
              <div className="space-y-3 mb-5">
                {[
                  { step: "1", label: "Choose your account type" },
                  { step: "2", label: "Verify your identity securely" },
                  { step: "3", label: "Fund and start banking" },
                ].map(({ step, label }) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0">
                      <span className="text-[#0B1F4A] text-xs font-bold">{step}</span>
                    </div>
                    <span className="text-white text-sm">{label}</span>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="block text-center bg-[#D4AF37] hover:bg-[#C9931A] text-[#0B1F4A] font-semibold text-sm py-3 rounded-full transition-colors"
              >
                Open Your Account
              </a>
            </div>

            {/* Rate highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "High-Yield Savings APY", value: "4.85%", note: "No minimum balance" },
                { label: "12-Month CD APY", value: "5.10%", note: "FDIC insured up to $250K" },
              ].map(({ label, value, note }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-4">
                  <p className="text-blue-300 text-xs mb-1">{label}</p>
                  <p className="text-[#D4AF37] text-2xl font-bold">{value}</p>
                  <p className="text-blue-400 text-xs mt-1">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
