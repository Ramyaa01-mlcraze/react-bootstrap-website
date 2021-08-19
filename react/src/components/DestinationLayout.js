import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Jumbotron,
  ListGroup,
  Row,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";

export default function DestinationLayout(props) {
  const { destinations, destinationIndex: index } = props;
  const destination = destinations[index];

  const [arrivalSiteIndex, setArrivalSiteIndex] = useState(0);
  const [carrierIndex, setCarrierIndex] = useState(0);
  const [cryoSelection, setCryoSelection] = useState(true);
  useEffect(() => {
    setCarrierIndex(0);
    setArrivalSiteIndex(0);
    setCryoSelection(
      destination.cryoSleep === "optional" ||
        destination.cryoSleep === "required"
    );
  }, [destination]);

  const renderHero = () => {
    return (
      <Jumbotron>
        <h2>{destination.header}</h2>
        <p>{destination.blurb}</p>
        <Button>Book Your Trip Now!</Button>
      </Jumbotron>
    );
  };

  const renderTravelCard = () => {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Travel Info</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Current Time Estimation
          </Card.Subtitle>
          <ListGroup>
            <ListGroup.Item>{destination.distance}</ListGroup.Item>
            <ListGroup.Item>{destination.travelTime}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="text-muted">
          Due to Pandemic, the arrival might be delayed
        </Card.Footer>
      </Card>
    );
  };

  const renderPassageCard = () => {
    const carrier = destination.transport[carrierIndex];

    const renderCryoOptions = () => {
      let options;
      const buttonStyle = { width: "100%", marginTop: "23px" };
      switch (destination.cryoSleep) {
        case "required":
          options = (
            <Button disabled style={buttonStyle}>
              Type of travel Required
            </Button>
          );
          break;

        case "none":
          options = (
            <Button disabled style={buttonStyle}>
              Type of travel is not available
            </Button>
          );
          break;

        case "optional":
          options = (
            <ToggleButtonGroup
              style={buttonStyle}
              type="radio"
              name="cryo-options"
              value={cryoSelection}
              onChange={selection => setCryoSelection(selection)}
            >
              <ToggleButton value={true}>Train</ToggleButton>
              <ToggleButton value={false}>Flight</ToggleButton>
            </ToggleButtonGroup>
          );
          break;

        default:
      }
      return options;
    };

    const renderCarrierItem = (carrier, index) => {
      return (
        <Dropdown.Item key={index} onSelect={() => setCarrierIndex(index)}>
          {carrier}
        </Dropdown.Item>
      );
    };

    return (
      <Card>
        <Card.Body>
          <Card.Title>Travel Mode</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Choose a Type
          </Card.Subtitle>
          <Dropdown style={{ width: "100%" }}>
            <Dropdown.Toggle id="transport-menu">{carrier}</Dropdown.Toggle>
            <Dropdown.Menu alignRight={true}>
              {destination.transport.map((carrier, index) =>
                renderCarrierItem(carrier, index)
              )}
            </Dropdown.Menu>
          </Dropdown>
          {renderCryoOptions()}
        </Card.Body>
        {!cryoSelection ? (
          <Card.Footer className="text-muted">
            Food expenses will apply
          </Card.Footer>
        ) : null}
      </Card>
    );
  };

  const renderArrivalCard = () => {
    const arrivalSite = destination.arrivalSites[arrivalSiteIndex];
    const buttonStyle = { width: "100%", marginTop: "23px" };
    const renderSiteMapOption = () => {
      let option;

      if ("siteMap" in destination) {
        option = (
          <Button
            href={destination.siteMap}
            target="_blank"
            style={buttonStyle}
          >
            Site Map
          </Button>
        );
      } else {
        option = (
          <Button disabled style={buttonStyle}>
            No Site Map Available
          </Button>
        );
      }

      return option;
    };

    const renderArrivalSiteItem = (site, index) => {
      return (
        <Dropdown.Item key={index} onSelect={() => setArrivalSiteIndex(index)}>
          {site}
        </Dropdown.Item>
      );
    };

    return (
      <Card>
        <Card.Body>
          <Card.Title>Arrival</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Choose a Site
          </Card.Subtitle>
          <Dropdown style={{ width: "100%" }}>
            <Dropdown.Toggle id="arrival-site-menu">
              {arrivalSite}
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight={true}>
              {destination.arrivalSites.map((site, index) =>
                renderArrivalSiteItem(site, index)
              )}
            </Dropdown.Menu>
          </Dropdown>
          {renderSiteMapOption()}
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container>
      <Row>
        <Col>{renderHero()}</Col>
      </Row>
      <Row>
        <Col lg={true}>{renderTravelCard()}</Col>
        <Col sm>{renderPassageCard()}</Col>
        <Col sm>{renderArrivalCard()}</Col>
      </Row>
    </Container>
  );
}
