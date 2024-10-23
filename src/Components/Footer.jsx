import React from "react";
import { CONTACT } from "../constants";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact Details
      </h2>
      <div className="text-center tracking-wider ">
        <p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </p>
        <a href="">{CONTACT.email}</a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl opacity-80">
        <a
          href="https://www.linkedin.com/in/mohitkhedkar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/mohitkhedkar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/mohitk_dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.x.com/mohitk_dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaX />
        </a>
      </div>
    </div>
  );
}

export default Contact;
