import React, { useState } from "react";
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
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeButton from "./ThemeButton";

const Header = () => {
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=287aa00fd9d0384e651f7f3865c5a54f&query";
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=287aa00fd9d0384e651f7f3865c5a54f&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  const changeHandler = (e) => {
    setQuery(e.target.value);
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
          {/* <ThemeButton /> */}
          <Navbar.Toggle aria-controls="navbarScroll"> </Navbar.Toggle>
          <Navbar.Collapse id="nabarScroll">
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
      <div>
        {movies.length > 0 ? <h2>Ok</h2> : <h2>Sorry!! No Movies Found</h2>}
      </div>
    </>
  );
};

export default Header;
