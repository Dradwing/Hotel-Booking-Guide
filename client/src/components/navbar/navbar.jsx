import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import MyProfile from "./myprofile";
import axios from "axios";

function NNavbar(props) {
  const history = useHistory();
  const signout = () => {
    axios.get("/api/v1/users/logout/");
    props.setsignedIn(false);
    props.sethistory([]);
    history.push("/");
    return;
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Hotel Booking Guide
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#footer">About Me</Nav.Link>
            </Nav>
            {!props.signedIn ? (
              <Nav>
                <Nav.Link>
                  <Link
                    to="/register"
                    style={{ color: "whitesmoke", textDecoration: "none" }}
                  >
                    Create an account
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <Link
                    to="/signin"
                    style={{
                      backgroundColor: "white",
                      padding: "5px 20px",
                      color: "rgb(13,110,253)",
                      textDecoration: "none",
                      fontWeight: "550",

                      borderRadius: "2px",
                    }}
                  >
                    {" "}
                    <i class="fas fa-sign-in-alt"></i> Sign-In
                  </Link>
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <MyProfile
                  user={props.user}
                  sethistory={props.sethistory}
                  setuser={props.setuser}
                  setsignedIn={props.setsignedIn}
                />
                <Nav.Link eventKey={2}>
                  <buttton
                    style={{
                      backgroundColor: "whitesmoke",
                      padding: "5px 15px",
                      color: "rgb(13,110,253)",
                      textDecoration: "none",
                      fontWeight: "550",
                      borderRadius: "2px",
                    }}
                    onClick={() => signout()}
                  >
                    <i class="fas fa-power-off"></i> Sign-out
                  </buttton>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NNavbar;
