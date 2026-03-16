export default function Rates() {
  const savingsRates = [
    { product: "High-Yield Savings", apy: "4.85%", min: "$0", term: "No minimum" },
    { product: "12-Month CD", apy: "5.10%", min: "$1,000", term: "12 months" },
    { product: "24-Month CD", apy: "4.90%", min: "$1,000", term: "24 months" },
    { product: "Money Market", apy: "4.50%", min: "$2,500", term: "No lock-in" },
  ];

  const loanRates = [
    { product: "30-Year Fixed Mortgage", rate: "6.875%", note: "APR 6.92%" },
    { product: "15-Year Fixed Mortgage", rate: "6.125%", note: "APR 6.18%" },
    { product: "Auto Loan (48 mo)", rate: "5.49%", note: "As low as" },
    { product: "Personal Loan", rate: "7.99%", note: "Starting APR" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">Rates & Offers</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F4A] mb-4">
            Competitive Rates, Honest Terms
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Our rates are updated daily and always clearly disclosed. No teaser rates, no bait-and-switch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Savings & CDs */}
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-[#0B1F4A] px-6 py-4">
              <h3 className="text-white font-semibold text-lg">Savings &amp; CDs</h3>
              <p className="text-blue-300 text-xs mt-0.5">Rates effective as of today · FDIC insured</p>
            </div>
            <table className="w-full">
              <thead className="bg-[#F5F7FC]">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Product</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">APY</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden sm:table-cell">Min. Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {savingsRates.map((row, i) => (
                  <tr key={row.product} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-[#0B1F4A] font-medium">{row.product}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`font-bold text-sm ${i === 0 ? "text-emerald-600" : "text-[#0B1F4A]"}`}>
                        {row.apy}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-500 hidden sm:table-cell">{row.min}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-3 bg-[#F5F7FC] border-t border-gray-200">
              <a href="#" className="text-[#0B1F4A] text-xs font-semibold hover:text-[#D4AF37] transition-colors">
                View all savings rates →
              </a>
            </div>
          </div>

          {/* Loan Rates */}
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-[#1A3B7C] px-6 py-4">
              <h3 className="text-white font-semibold text-lg">Loan &amp; Mortgage Rates</h3>
              <p className="text-blue-300 text-xs mt-0.5">Rates subject to credit approval · See disclosures</p>
            </div>
            <table className="w-full">
              <thead className="bg-[#F5F7FC]">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Product</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Rate</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden sm:table-cell">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loanRates.map((row) => (
                  <tr key={row.product} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-[#0B1F4A] font-medium">{row.product}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-bold text-sm text-[#0B1F4A]">{row.rate}</span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-500 hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-3 bg-[#F5F7FC] border-t border-gray-200">
              <a href="#" className="text-[#0B1F4A] text-xs font-semibold hover:text-[#D4AF37] transition-colors">
                View all loan rates →
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          * APY = Annual Percentage Yield. Rates are illustrative and subject to change without notice. Not an offer of credit.
        </p>
      </div>
    </section>
  );
}
