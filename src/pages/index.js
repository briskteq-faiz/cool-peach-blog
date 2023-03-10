import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="Home">
      <p>Blog List</p>
      {data.allBlogJson.nodes.map((node) => <p>{node.title}</p>)}
    </Layout>
  );
};

export const query = graphql`
  query {
    allBlogJson {
      nodes {
        id
        title
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
