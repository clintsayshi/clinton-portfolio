import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
//import {  StaticImage } from "gatsby-plugin-image";

function Featured() {
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

      console.log(content);

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
    <div className="flex flex-col gap-6">
      {React.Children.toArray(
        projects().map((project) => {
          console.log(project);

          return (
            <article className="block flex flex-col sm:flex-row items-start gap-2 sm:gap-6">
              <img
                src={project.images.filename}
                alt={project.images.alt}
                className="block sm:mb-2 flex h-52 w-full sm:w-[20vw] sm:w-2/5 object-cover rounded-md"
              />
              <div className="flex flex-col gap-1 sm:gap-2">
                <h4 className="text-lg font-medium uppercase">
                  {project.title}
                </h4>

                <Link to={project.slug} className="">
                  View Project
                </Link>
              </div>
            </article>
          );
        })
      )}
    </div>
  );
}

export default Featured;
