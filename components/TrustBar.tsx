import { Users, Building2, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "2.4M+", label: "Customers Served" },
  { icon: Building2, value: "50+", label: "Years in Business" },
  { icon: TrendingUp, value: "$58B+", label: "Assets Under Management" },
  { icon: Award, value: "#1 Rated", label: "Regional Bank 2024" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#F5F7FC] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
              <div className="w-11 h-11 rounded-xl bg-[#0B1F4A]/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[#0B1F4A]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0B1F4A]">{value}</p>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
