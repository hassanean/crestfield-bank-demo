import { ShieldCheck, Zap, HeadphonesIcon, Eye, Globe, Lock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Bank-Level Security",
    description:
      "256-bit SSL encryption, multi-factor authentication, and real-time fraud monitoring protect every transaction.",
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description:
      "Move money in seconds with Zelle®, wire transfers, and instant account-to-account transfers — 24/7.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Live Support",
    description:
      "Real humans available around the clock by phone, chat, or email. Average wait time under 2 minutes.",
  },
  {
    icon: Eye,
    title: "No Hidden Fees",
    description:
      "Transparent pricing with no surprise charges. We show you exactly what you'll pay — nothing more.",
  },
  {
    icon: Globe,
    title: "Worldwide Access",
    description:
      "50,000+ free ATMs, zero foreign transaction fees, and banking access in 180+ countries.",
  },
  {
    icon: Lock,
    title: "Zero Liability Guarantee",
    description:
      "You're covered 100% if unauthorized charges appear on your account. Report it, and we handle the rest.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-[#F5F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">Why Crestfield</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F4A] mb-5">
              Banking That Works as Hard as You Do
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              We combine the stability of a trusted financial institution with the speed and convenience of modern
              digital banking. Powerful tools, honest pricing, and people who genuinely care.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#0B1F4A] hover:bg-[#1A3B7C] text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm"
            >
              Why Choose Crestfield
            </a>
          </div>

          {/* Right: feature grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#EFF2F9] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#0B1F4A]" />
                </div>
                <h3 className="text-[#0B1F4A] font-semibold text-sm mb-1.5">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
