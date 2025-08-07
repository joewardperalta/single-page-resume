import Link from "next/link";
import Image from "next/image";
import Paragraph from "./Paragraph";

export default function SkillCard({
  iconSrc = "/placeholder-icon.png",
  title = "Title",
  link = "/",
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex w-fit items-center gap-1 bg-tertiary px-2 py-1 rounded-md"
    >
      {/* Contact Icon */}
      <div className="w-4 h-4 md:w-4 md:h-4">
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
        <Paragraph>{title}</Paragraph>
      </div>
    </Link>
  );
}
