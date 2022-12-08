import React from "react";
import Layout from "../layout/Layout";
import { Row, Col, Container } from "react-bootstrap";
import MovieInfo from '../components/MovieInfo'

function DisplayMoviePage() {
  
  return (
    <Layout>
      <MovieInfo/>
    </Layout>
  );
}

export default DisplayMoviePage;
