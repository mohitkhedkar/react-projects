import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const socials = [
  {
    href: "https://www.linkedin.com/in/mohitkhedkar",
    label: "Linkedin",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.github.com/mohitkhedkar",
    label: "Github",
    icon: <FaGithub />,
  },
  {
    href: "https://www.instagram.com/mohitk_dev",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://www.x.com/mohitk_dev",
    label: "X",
    icon: <FaX />,
  },
];

function Contact() {
  return (
    <div className="mt-10 flex items-center justify-between border-t border-[#797979] py-[15px]">
      <ul className="flex list-none gap-4 text-2xl opacity-80 m-8">
        {socials.map(({ href, label, icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
