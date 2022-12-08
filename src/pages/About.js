import React from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import Layout from "../layout/Layout";

function About() {
  return (
    <Layout>
      <div className="container" style={{ width: "80%", marginLeft: "18%" }}>
        <div className="about">About Us</div>
      </div>
    </Layout>
  );
}

export default About;
