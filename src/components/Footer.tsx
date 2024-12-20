import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";

const Footer = () => {
  const links = [
    { link: "mailto:nikhar663@gmail.com", text: "email", Icon: Icons.Mail },
    { link: "https://x.com/nikharx", text: "Twitter/X", Icon: Icons.Twitter },
    {
      link: "https://github.com/nikhar-savaliya",
      text: "github",
      Icon: Icons.Github,
    },
    {
      link: "https://www.linkedin.com/in/nikharsavaliya/",
      text: "linkedin",
      Icon: Icons.LinkedIn,
    },
    {
      link: "https://youtube.com/@nikharx",
      text: "youtube",
      Icon: Icons.Youtube,
    },
    {
      link: "https://peerlist.io/nikharsavaliya",
      text: "Peerlist",
      Icon: Icons.Peerlist,
    },
  ];
  return (
    <div className="mt-16 mb-8 mx-4 xl:mx-0">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white uppercase">
        links <span className="text-accent ml-1"> ˮ</span>
      </h2>
      <div>
        {links.map((link) => (
          <Link
            key={link.link}
            className="flex group my-3 uppercase items-center gap-2 text-muted-foreground"
            href={link.link}
            target="_blank"
          >
            <span className="font-medium group-hover:text-accent">
              {link.text}
            </span>
            <div
              data-orientation="horizontal"
              role="none"
              className="bg-border h-px w-full flex-1"
            ></div>
            <link.Icon className="size-6 group-hover:text-accent group-hover:grayscale-0" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
