import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Featured from "../components/featured";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />

      <About />

      <Skills />

      <section
        id="work"
        className="container mx-auto py-28 flex flex-col gap-8 justify-center z-10"
      >
        <h3 className="text-3xl text-center">Some of my work</h3>

        <Featured />

        <Link className="py-2 text-base text-center underline" to="/projects">
          View More
        </Link>
      </section>
    </Layout>
  );
};

export default IndexPage;
