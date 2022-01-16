import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const About = () => {
  const content = JSON.parse(
    useStaticQuery(graphql`
      {
        storyblokEntry(slug: { eq: "about" }) {
          content
        }
      }
    `).storyblokEntry.content
  );

  return (
    <section
      id="about"
      className="container mx-auto py-28 flex flex-col justify-center"
    >
      <h3 className="mb-8 text-3xl">{content.heading}</h3>
      <div className="flex flex-col gap-2">
        <p className="text-lg sm:text-base">{content.bio}</p>
      </div>
    </section>
  );
};

export default About;
