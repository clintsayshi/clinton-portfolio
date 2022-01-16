import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section
        id="contact"
        className="container mx-auto pb-28 pt-36 flex flex-col justify-center"
      >
        <h3 className="mb-10 text-3xl text-center">Get in touch</h3>
        <a
          className="mb-6 text-center text-2xl underline"
          href="mailto:clintonwamanakane@gmail.com"
        >
          clintonwamanakane@gmail.com
        </a>
        <div className="flex flex-row items-center justify-center gap-4">
          <a className="text-3xl" href="http://twitter.com/mcclintsayshi">
            <FaTwitter className="text-3xl" />
          </a>
          <a className="" href="http://github.com/mcclintsayshi">
            <FaGithub className="text-3xl" />
          </a>
          <a className="" href="http://linkedin.com/in/mcclintsayshi">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </section>

      <footer className="flex justify-center py-4 border-t border-slate-300">
        <p className="pt-2 text-sm font-medium uppercase">Clinton 2022</p>
      </footer>
    </>
  );
}

export default Footer;
