import React from "react";
//import { StaticImage } from "gatsby-plugin-image";
import { render } from "storyblok-rich-text-react-renderer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Layout from "../components/layout";

function Project({ pageContext }) {
  const content = JSON.parse(pageContext.story.content);

  console.log(content);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <Layout>
      <section className="container mx-auto py-4 h-20 flex flex-col gap-2 justify-center">
        <h1 className="text-4xl font-medium text-center">{content.title}</h1>
        <p className="hidden text-lg text-center">Except text over here</p>
      </section>

      <Carousel
        containerClass="z-10"
        itemClass="z-10"
        swipeable={true}
        responsive={responsive}
      >
        {React.Children.toArray(
          content.image.map((item) => (
            <img
              className="w-full sm:w-[50vw] h-96 my-4 object-cover"
              src={item.filename}
              alt={item.alt}
            />
          ))
        )}
      </Carousel>

      <section className="container mx-auto">{render(content.body)}</section>

      <div className="my-28"></div>
    </Layout>
  );
}

export default Project;
