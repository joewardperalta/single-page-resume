import Image from "next/image";

export default function ProfilePhoto({ src }) {
  return (
    <div className="w-[70px] h-[70px] rounded-lg overflow-hidden">
      <Image
        className="w-full h-full"
        src={src}
        alt="Author's profile photo."
        width={70}
        height={70}
      />
    </div>
  );
}
