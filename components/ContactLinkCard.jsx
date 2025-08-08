import Image from "next/image";
import Paragraph from "./Paragraph";
import Link from "next/link";

export default function ContactLinkCard({
  iconSrc = "/placeholder-icon.png",
  title = "Title",
  link = "/",
  disableTitleOnMobile = false,
}) {
  return (
    <Link
      href={link}
      className={`flex w-fit items-center ${
        !disableTitleOnMobile ? "gap-1" : ""
      }`}
    >
      {/* Contact Icon */}
      <div className="w-4 h-4">
        <Image
          className="w-full h-full"
          src={iconSrc}
          alt="A contact icon."
          width={20}
          height={20}
        />
      </div>

      {/* Contact Title */}
      <div>
        <p
          className={`text-primary text-sm ${
            disableTitleOnMobile ? "hidden" : ""
          }`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
}
