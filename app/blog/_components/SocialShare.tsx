'use client';
import { useState,useEffect } from "react";
import { Twitter, Linkedin, Facebook, Copy } from "lucide-react";

export default function SocialShare({ title }: { title: string }) {
  const [location, setLocation] = useState("");
  const [socialLinks, setSocialLinks] = useState<Array<{
    name: string;
    url: string;
    icon: React.ReactNode;
  }>>([])

  useEffect(() => { 
    const url = window.location.href;
    setLocation(url);

    setSocialLinks([
      {
        name: "Twitter",
        url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          location
        )}&text=${encodeURIComponent(title)}`,
        icon: <Twitter size={18} />,
      },
      {
        name: "LinkedIn",
        url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          location
        )}&title=${encodeURIComponent(title)}`,
        icon: <Linkedin size={18} />,
      },
      {
        name: "Facebook",
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          location
        )}`,
        icon: <Facebook size={18} />,
      }
    ])
  }, [location, title]);


   
   const liClasses = "list-none bg-dark text-light p-2 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg hover:text-lime hover:scale-110 transition-all"

  return (
    <div className="social-share fixed lg:relative bottom-28 left-2.5 lg:bottom-0 lg:left-0">
      <ul className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:justify-around">
        {socialLinks.map((link) => (
          <li
            key={link.name}
            className={liClasses}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${link.name}`}
            >
              {link.icon}
            </a>
          </li>
        ))}
           <li className={liClasses}>
          <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            aria-label="Copy link to this page"            
          >
            <Copy size={18} />
          </button>
        </li>
      </ul>
    </div>
  );
}
