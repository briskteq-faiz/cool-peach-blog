import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "./index.module.css";

const IndexPage = ({ file, data }) => {
  return <Layout pageTitle="Home">Welcome! to MEdiu</Layout>;
};

export const query = graphql`
  query MyQuery {
    allFile {
      nodes {
        name
      }
    }
    allBlogJson {
      nodes {
        title
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
