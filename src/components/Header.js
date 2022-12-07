import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    // alert(query);
    // alert(localStorage.getItem("query"));
    try {
      // navigation.navigate(name, params)

      navigate("/searchhome", { state: { query } });
    } catch (error) {
      console.log(error);
    }
  };
  const changeHandler = (e) => {
    setQuery(e.target.value);
    // alert(query);
    // localStorage.setItem("query", query);
  };

  return (
    <>
      <Navbar
        // bg="light"
        expand="lg"
        // variant="light"
        // style={{ position: "absolute", right: "20%", color: "red" }}
      >
        <Container fluid>
          <Navbar.Brand href="">Welcome</Navbar.Brand>
          <Navbar.Brand href="">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"> </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" onSubmit={searchMovie}>
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
              ></FormControl>
              <Button variant="secondary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
