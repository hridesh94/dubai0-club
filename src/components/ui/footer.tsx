const links = ["Home", "Members", "Events", "Insights", "Shop", "Join"];

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/70 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-base font-semibold tracking-tight text-neutral-900">
              Dubai 0% Club
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-600">
              Dubai's first 0% social club — a community for meeting people, going out, staying
              active, and enjoying the city without the pressure to drink.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">Explore</p>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>
                <a href="mailto:dubaizeroclub@gmail.com" className="hover:text-neutral-900">
                  dubaizeroclub@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-200/70 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Dubai 0% Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}