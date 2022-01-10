import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Work() {
  //
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

  /* useEffect(() => {
    //
    fetch(
      "https://api.storyblok.com/v2/cdn/stories/home?cv=1641819293&token=dldZUMPKO5eZGthKskKwqAtt&version=published"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.story.content));

    return () => {
      //cleanup
    };
  }, []); */

  return (
    <Carousel swipeable={true} responsive={responsive}>
      <article className="">
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
      </article>
    </Carousel>
  );
}

export default Work;
