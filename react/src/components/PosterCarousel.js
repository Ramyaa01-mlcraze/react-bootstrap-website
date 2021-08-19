import React from "react";
import { Alert, Carousel, Image } from "react-bootstrap";

export default function PosterCarousel(props) {
  const carouselStyle = {
    marginBottom: "10px"
  };

  const renderItem = (destination, index) => {
    return (
      <Carousel.Item key={index}>
        <Image src={destination.poster} fluid />
      </Carousel.Item>
    );
  };

  return (
    <div>
      <Carousel
        style={carouselStyle}
        fade={true}
        indicators={false}
        activeIndex={props.destinationIndex}
        onSelect={(key, event) => props.setDestinationIndex(key)}
        interval={null}
      >
        {props.destinations.map((destination, index) =>
          renderItem(destination, index)
        )}
      </Carousel>
      <Alert variant="primary">
        Travel Blog by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/RamyaaS2"
        >
          Ramyaa
        </a>
      </Alert>
    </div>
  );
}
