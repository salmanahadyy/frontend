import Link from "next/link";
import { IconType } from "react-icons";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";

interface IShare {
  Icon: IconType;
  link: string;
  style: string;
}

const share: IShare[] = [
  { Icon: IoLogoFacebook, link: "https://www.facebook.com/sharer/share.php?u=", style:"text-blue-500" },
  { Icon: IoLogoLinkedin, link: "https://www.linkedin.com/sharing/share-offsite/?url=", style:"text-blue-600" },
  { Icon: IoLogoTwitter, link: "https://www.twitter.com/intent/tweet?url=", style:"text-blue-400" },
  { Icon: IoLogoWhatsapp, link: "https://wa.me/?text=", style:"text-green-500" },
];

export default function ShareButton() {
  return (
    <div className=" my-4">
      <p className="uppercase font-bold text-[12px]">bagikan</p>
      <div className="flex text-xl gap-2 my-2">
        {share.map((item,idx) => {
          return (
            <Link key={idx} href={item.link} className={`${item.style}`}>
              <item.Icon />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
