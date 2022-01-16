const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve("./src/templates/project-template.js");

    resolve(
      graphql(
        `
          {
            projects: allStoryblokEntry(
              filter: { field_component: { eq: "project" } }
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
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const allProjects = result.data.projects.edges;

        allProjects.forEach((entry) => {
          // 👇 the name of content type
          if (entry.slug !== "project") {
            const page = {
              path: `/${entry.node.full_slug}`,
              component: projectTemplate,
              context: {
                story: entry.node,
              },
            };
            createPage(page);
          }
        });
      })
    );
  });
};
