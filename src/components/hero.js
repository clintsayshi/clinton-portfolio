import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      storyblokEntry(slug: { eq: "home" }) {
        content
      }
    }
  `);
  const content = JSON.parse(data.storyblokEntry.content);

  return (
    <section className="container mx-auto min-h-screen flex flex-col justify-center">
      <h1 className="mb-2 text-6xl font-black">{content.name}</h1>
      <p className="mb-4 text-4xl font-light">{content.subheading}</p>
      <Link
        to="/#contact"
        className="inline-block w-max px-4 py-2 text-white bg-black"
      >
        {content.cta}
      </Link>
    </section>
  );
};

export default Hero;
