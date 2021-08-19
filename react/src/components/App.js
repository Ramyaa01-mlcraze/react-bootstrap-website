import React, { useState } from "react";
import Navigation from "./Navigation";
import Page from "./Page";

export default function App(props) {
  const [destinationIndex, setDestinationIndex] = useState(0);

  return (
    <React.Fragment>
      <Navigation
        {...props}
        destinationIndex={destinationIndex}
        setDestinationIndex={setDestinationIndex}
      />
      <Page
        {...props}
        destinationIndex={destinationIndex}
        setDestinationIndex={setDestinationIndex}
      />
    </React.Fragment>
  );
}
