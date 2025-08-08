import ContactLinkCard from "./ContactLinkCard";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b-tertiary border-b-[0.5px]">
      <div className="px-4 py-3 max-w-[800px] mx-auto">
        <nav>
          <ul className="flex items-center justify-between">
            {/* Location */}
            <li>
              <ContactLinkCard
                iconSrc="/map-icon.png"
                title="Toronto, Canada"
              />
            </li>

            {/* Contact Information */}
            <div className="flex gap-5">
              <li>
                <ContactLinkCard
                  iconSrc="/email-icon.png"
                  title="joeward_peralta@outlook.com"
                  link="mailto:joeward_peralta@outlook.com"
                  disableTitleOnMobile
                />
              </li>
              <li>
                <ContactLinkCard
                  iconSrc="/telephone-icon.png"
                  title="+1 (647) 901-3040"
                  link="tel:+16479013040"
                  disableTitleOnMobile
                />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
