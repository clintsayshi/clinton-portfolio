import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Skills() {
  const data = useStaticQuery(graphql`
    {
      storyblokEntry(slug: { eq: "skills" }) {
        content
      }
    }
  `);
  const heading = JSON.parse(data.storyblokEntry.content).heading;
  const skills = JSON.parse(data.storyblokEntry.content).skills;

  return (
    <section
      id="skills"
      className="container mx-auto py-28 flex flex-col justify-center"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex-[1]">
          <h3 className="mb-2 text-3xl">{heading}</h3>
          <p className="hidden text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            quidem eos delectus molestias tempora! Reiciendis.
          </p>
        </div>

        <div className="flex-[1]">
          <ul className="flex flex-col gap-2">
            {React.Children.toArray(
              skills.map((skill) => (
                <li className="border-b border-slate-200 py-2">
                  <h4 className="text-lg">{skill.title}</h4>
                  <p className="text-xs">{skill.desc}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
