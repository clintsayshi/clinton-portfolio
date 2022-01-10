import React from "react";
import { Link } from "gatsby";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import Header from "../components/header";
import Work from "../components/work";
import Footer from "../components/footer";

// markup
const IndexPage = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-gray-50 overflow-hidden">
      <Header />

      <main className="">
        <section className="container mx-auto min-h-screen flex flex-col justify-center">
          <h1 className="mb-2 text-6xl font-black">Clinton Manakane</h1>
          <p className="mb-4 text-4xl font-light">a frontend developer</p>
          <Link
            to="/#contact"
            className="inline-block w-max px-4 py-2 text-white bg-black"
          >
            Get in touch
          </Link>
        </section>

        <section
          id="about"
          className="container mx-auto py-28 flex flex-col justify-center"
        >
          <h3 className="mb-8 text-3xl">
            I'm Clinton, a frontend developer living in Tembisa, JHB
          </h3>
          <div className="flex flex-col gap-2">
            <p className="text-lg sm:text-base">
              I love working on user interfaces and writing the code that brings
              them to life.
            </p>
            <p className="text-lg sm:text-base">
              I love listening to music, watching movies(most especially MCU
              movies if you know what I mean), series and learning something new
              on the internet.
            </p>
            <p className="text-lg sm:text-base">
              I also like going for walks, some landscape photography and going
              to new places.
            </p>
          </div>
        </section>

        <section
          id="skills"
          className="container mx-auto py-28 flex flex-col justify-center"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex-[1]">
              <h3 className="mb-2 text-3xl">Skills</h3>
              <p className="hidden text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum quidem eos delectus molestias tempora! Reiciendis.
              </p>
            </div>

            <div className="flex-[1]">
              <ul className="flex flex-col gap-2">
                <li className="border-b border-slate-200 py-2">
                  <h4 className="text-lg">Mobile App Development</h4>
                  <p className="text-xs">React Native</p>
                </li>

                <li className="border-b border-slate-200 py-2">
                  <h4 className="text-lg">Responsive Web Design</h4>
                </li>

                <li className="border-b border-slate-200 py-2">
                  <h4 className="text-lg">Frontend Development</h4>
                  <p className="text-xs">HTML, CSS and JavaScript</p>
                  <p className="text-xs">Reactjs, Gatsbyj</p>
                </li>

                <li className="border-b border-slate-200 py-2">
                  <h4 className="text-lg">CMS Integration</h4>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="container mx-auto py-28 flex flex-col justify-center"
        >
          <h3 className="mb-10 text-3xl text-center">Some of my work</h3>

          <div className="flex gap-8 overflow-x-auto snap-x snap-center">
            {/* <article className="">
              <div className="mb-2 flex h-48 w-[75vw] sm:w-[50vw] md:w-[35vw] rounded-md bg-green-300"></div>
              <h4 className="font-medium uppercase">
                Daisy Bakery - Business Website
              </h4>
            </article>

            <article className="">
              <div className="mb-2 flex h-48 w-[75vw] sm:w-[50vw] md:w-[35vw] rounded-md bg-green-300"></div>
              <h4 className="font-medium uppercase">
                Daisy Bakery - Business Website
              </h4>
            </article> */}
          </div>
          <Work />
        </section>

        <section
          id="contact"
          className="container mx-auto py-28 flex flex-col justify-center"
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

        <Footer />
      </main>
    </div>
  );
};

export default IndexPage;
