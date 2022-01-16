import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allStoryblokEntry(
        filter: { field_component: { eq: "project" } }
        limit: 3
      ) {
        edges {
          node {
            id
            name
            slug
            full_slug
            field_component
            content
          }
        }
      }
    }
  `);

  const projects = () => {
    return data.allStoryblokEntry.edges.map((item) => {
      const content = JSON.parse(item.node.content);

      return {
        slug: item.node.full_slug,
        title: content.title,
        body: content.body.content,
        url: content.url,
        images: content.image,
      };
    });
  };

  return (
    <Layout>
      <section className="container mx-auto h-52 flex flex-col justify-end">
        <h1 className="mb-2 text-6xl font-black">Some of my work</h1>
        <p className="mb-4 text-xl">a frontend developer projects</p>
      </section>

      <section className="container mx-auto mb-8 flex flex-col gap-8 justify-center z-10">
        {React.Children.toArray(
          projects().map((project) => (
            <article className="block flex flex-col sm:flex-row items-start gap-2 sm:gap-6">
              <img
                src={project.images.filename}
                alt={project.images.alt}
                className="block sm:mb-2 flex h-52 w-full sm:w-2/5 object-cover rounded-md"
              />

              <div className="flex flex-col gap-1 sm:gap-2">
                <h4 className="text-lg font-medium uppercase">
                  {project.title}
                </h4>

                <p className="text-sm">
                  Hey dflkdsfdskjsd Ihave had no love like your love from Nobody
                </p>

                <Link to={project.slug} className="">
                  More about project
                </Link>
              </div>
            </article>
          ))
        )}
      </section>
    </Layout>
  );
};

export default Projects;
