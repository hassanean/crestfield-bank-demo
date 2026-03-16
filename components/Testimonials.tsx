import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Small Business Owner",
    location: "Austin, TX",
    avatar: "SM",
    rating: 5,
    text: "Switching to Crestfield was the best financial decision I made for my business. The business checking has no fees, and their business loan team worked with me personally to find the right rate. Highly recommend.",
  },
  {
    name: "James T.",
    role: "Homeowner",
    location: "Denver, CO",
    avatar: "JT",
    rating: 5,
    text: "I refinanced my mortgage through Crestfield and saved over $400 a month. The process was incredibly smooth — my loan officer kept me updated every step of the way. Closed in 28 days.",
  },
  {
    name: "Priya K.",
    role: "Software Engineer",
    location: "Seattle, WA",
    avatar: "PK",
    rating: 5,
    text: "The High-Yield Savings account is genuinely unmatched. I moved my emergency fund here and earned more in 3 months than I had in 2 years at my old bank. The app is also beautiful and easy to use.",
  },
  {
    name: "Marcus L.",
    role: "Retiree",
    location: "Phoenix, AZ",
    avatar: "ML",
    rating: 5,
    text: "I've been a Crestfield customer for 22 years. Their wealth management team has helped me navigate retirement planning with expertise and patience. I feel genuinely taken care of.",
  },
  {
    name: "Annika B.",
    role: "Graduate Student",
    location: "Boston, MA",
    avatar: "AB",
    rating: 5,
    text: "As a student, I needed a checking account with zero fees and easy mobile deposits. Crestfield delivers exactly that — plus their customer service actually picks up the phone. 10/10.",
  },
  {
    name: "David R.",
    role: "Real Estate Investor",
    location: "Miami, FL",
    avatar: "DR",
    rating: 5,
    text: "I use Crestfield for both personal and business accounts. The ability to manage everything in one dashboard, with instant transfers between accounts, saves me hours every week.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F5F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">Customer Stories</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F4A] mb-4">
            Trusted by 2.4 Million Customers
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
            <span className="text-gray-600 text-sm ml-1">4.8 out of 5 · 47,000+ reviews</span>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#0B1F4A]"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B1F4A] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-[#0B1F4A] text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
