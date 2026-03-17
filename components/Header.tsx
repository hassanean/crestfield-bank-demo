"use client";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";

const navItems = [
  {
    label: "Personal",
    children: ["Checking Accounts", "Savings Accounts", "Credit Cards", "Personal Loans", "Mortgages"],
  },
  {
    label: "Business",
    children: ["Business Checking", "Business Savings", "Business Loans", "Merchant Services", "Payroll"],
  },
  {
    label: "Loans",
    children: ["Home Loans", "Auto Loans", "Personal Loans", "Student Loans", "HELOC"],
  },
  {
    label: "Investments",
    children: ["Brokerage Accounts", "Retirement (IRA)", "Wealth Management", "College Savings (529)"],
  },
  { label: "About", children: null },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top utility bar */}
      <div className="bg-[#0B1F4A] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <span className="hidden sm:block opacity-70">FDIC Insured &nbsp;·&nbsp; Member FDIC &nbsp;·&nbsp; Equal Housing Lender</span>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:+17013948910"
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span className="font-medium">(701) 394-8910</span>
            </a>
            <span className="opacity-30">|</span>
            <button
              onClick={() => document.getElementById("dx_chatbot_fab_id")?.click()}
              className="flex items-center gap-1.5 text-[#D4AF37] hover:text-white transition-colors font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              Chat Live with George
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-[#0B1F4A] flex items-center justify-center">
              <span className="text-[#D4AF37] font-bold text-lg leading-none">C</span>
            </div>
            <div>
              <span className="text-[#0B1F4A] font-bold text-lg tracking-tight">Crestfield</span>
              <span className="text-[#D4AF37] font-bold text-lg tracking-tight"> Bank</span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0B1F4A] rounded-md hover:bg-gray-50 transition-colors">
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </button>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-[#EFF2F9] hover:text-[#0B1F4A] transition-colors"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-[#0B1F4A] hover:text-[#1A3B7C] transition-colors">
              Sign In
            </a>
            <a
              href="#"
              className="bg-[#D4AF37] hover:bg-[#C9931A] text-[#0B1F4A] font-semibold text-sm px-5 py-2 rounded-full transition-colors shadow-sm"
            >
              Open Account
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </button>
                {item.children && activeDropdown === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#0B1F4A] hover:bg-gray-50 rounded-md"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-2 border-t border-gray-100">
              <a href="#" className="text-center py-2.5 text-sm font-medium text-[#0B1F4A] border border-[#0B1F4A] rounded-full">
                Sign In
              </a>
              <a href="#" className="text-center py-2.5 text-sm font-semibold bg-[#D4AF37] text-[#0B1F4A] rounded-full">
                Open Account
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
