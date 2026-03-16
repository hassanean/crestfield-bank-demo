import { Bell, PieChart, Send, ShieldCheck } from "lucide-react";

const appFeatures = [
  { icon: Bell, text: "Instant transaction alerts" },
  { icon: PieChart, text: "Spending insights & budgeting" },
  { icon: Send, text: "Send money in seconds" },
  { icon: ShieldCheck, text: "Biometric login & freeze card instantly" },
];

export default function MobileApp() {
  return (
    <section className="py-20 bg-[#0B1F4A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A3B7C] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#071433] rounded-full translate-y-1/2 -translate-x-1/2 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div>
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">Mobile Banking</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Your Bank in Your Pocket
            </h2>
            <p className="text-blue-200 text-base leading-relaxed mb-8">
              The Crestfield app puts full banking power at your fingertips — check balances, pay bills, transfer
              funds, deposit checks, and more. Available for iOS and Android.
            </p>

            <ul className="space-y-3 mb-8">
              {appFeatures.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="text-blue-100 text-sm">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-[#0B1F4A] px-5 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[8px] font-medium text-gray-500 uppercase tracking-wide leading-none">Download on the</p>
                  <p className="text-sm font-semibold leading-tight">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-[#0B1F4A] px-5 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.65.18.98.06l12.87-7.43-2.78-2.78-11.07 10.15zM.32 1.32C.12 1.65 0 2.07 0 2.58v18.84c0 .51.12.93.33 1.26l.07.06 10.55-10.55v-.25L.39 1.26.32 1.32zM20.65 10.03l-2.75-1.59-3.1 3.1 3.1 3.1 2.76-1.59c.79-.45.79-1.18-.01-1.62zM3.18.24L16.05 7.67l-2.78 2.78L.32.3c.33-.12.7-.1.98-.06l2.88 0z" />
                </svg>
                <div className="text-left">
                  <p className="text-[8px] font-medium text-gray-500 uppercase tracking-wide leading-none">Get it on</p>
                  <p className="text-sm font-semibold leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64">
              {/* Phone shell */}
              <div className="bg-[#0A0A0A] rounded-[3rem] p-3 shadow-2xl border border-white/10">
                <div className="bg-white rounded-[2.3rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[#0B1F4A] h-10 flex items-center justify-between px-5">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="w-24 h-5 bg-black rounded-full" />
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-2.5 h-full bg-white rounded-sm ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="bg-[#F5F7FC] px-4 pt-4 pb-6 min-h-[440px]">
                    <p className="text-gray-400 text-xs mb-0.5">Good morning,</p>
                    <p className="text-[#0B1F4A] font-bold text-base mb-4">Sarah ✨</p>

                    {/* Balance card */}
                    <div className="bg-[#0B1F4A] rounded-2xl p-4 mb-4 text-white">
                      <p className="text-blue-300 text-xs mb-1">Total Balance</p>
                      <p className="text-2xl font-bold mb-3">$48,295.00</p>
                      <div className="flex justify-between text-xs text-blue-200">
                        <span>Checking: $3,840</span>
                        <span>Savings: $22,105</span>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {["Send", "Receive", "Pay", "More"].map((action) => (
                        <div key={action} className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                            <div className="w-4 h-4 bg-[#EFF2F9] rounded" />
                          </div>
                          <span className="text-gray-500 text-[9px]">{action}</span>
                        </div>
                      ))}
                    </div>

                    {/* Recent transactions */}
                    <p className="text-[#0B1F4A] text-xs font-semibold mb-2">Recent Transactions</p>
                    <div className="space-y-2">
                      {[
                        { name: "Netflix", amount: "-$15.99", color: "bg-red-100" },
                        { name: "Direct Deposit", amount: "+$3,200.00", color: "bg-green-100" },
                        { name: "Whole Foods", amount: "-$67.43", color: "bg-blue-100" },
                      ].map((txn) => (
                        <div key={txn.name} className="flex items-center justify-between bg-white rounded-xl px-3 py-2.5 shadow-sm">
                          <div className="flex items-center gap-2">
                            <div className={`w-7 h-7 rounded-full ${txn.color}`} />
                            <span className="text-gray-700 text-xs font-medium">{txn.name}</span>
                          </div>
                          <span className={`text-xs font-semibold ${txn.amount.startsWith("+") ? "text-emerald-600" : "text-gray-700"}`}>
                            {txn.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-8 top-20 bg-white rounded-xl px-3 py-2 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-emerald-600 text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-800">Transfer sent</p>
                    <p className="text-[9px] text-gray-400">$500 to Mom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
