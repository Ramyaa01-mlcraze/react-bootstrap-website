import React from "react";
import { Navbar, Dropdown, Nav } from "react-bootstrap";

export default function Navigation(props) {
  const renderItem = (destination, index) => {
    return (
      <Dropdown.Item
        onSelect={() => props.setDestinationIndex(index)}
        key={index}
      >
        {destination.title}
      </Dropdown.Item>
    );
  };

  const renderDestinationMenu = () => {
    const { destinations, destinationIndex: current } = props;
    return (
      <Dropdown>
        <Dropdown.Toggle id="destination-menu">
          {destinations[current].title}
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight={true}>
          {props.destinations.map((destination, index) =>
            renderItem(destination, index)
          )}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Explore India</Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="mr-auto" />
        {renderDestinationMenu()}
      </Navbar.Collapse>
    </Navbar>
  );
}
