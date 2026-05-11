import BrandLogo from "@/components/ui/brand-logo";
import { WHATSAPP_URL } from "@/lib/site-links";

const links = [
  { label: "Home", href: "#home" },
  { label: "Members", href: "#members" },
  { label: "Events", href: "#events" },
  { label: "Join", href: "#join" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#b7d6d9]/80 bg-[#eef8f8]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="block w-[138px] transition-opacity hover:opacity-80">
              <BrandLogo />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#486f7d]">
              Dubai's first 0% social club — a community for meeting people, going out, staying
              active, and enjoying the city without the pressure to drink.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#205b86]">Explore</p>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#486f7d] hover:text-[#205b86]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#205b86]">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-[#486f7d]">
              <li>
                <a href="mailto:dubaizeroclub@gmail.com" className="hover:text-[#205b86]">
                  dubaizeroclub@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#205b86]"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[#b7d6d9]/80 pt-6 text-xs text-[#668b96]">
          © {new Date().getFullYear()} Dubai 0% Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
