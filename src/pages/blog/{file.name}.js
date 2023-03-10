import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

const Blog = ({data}) => {
  console.log(data);

  return (
    <Layout pageTitle={data.blogJson.title}>
      <p>{data.blogJson.date}</p>
      <p>
        {data.blogJson.description}
      </p>
      {data.blogJson.body}
    </Layout>
  );

};

export const query = graphql`
query MyQuery {
  blogJson {
    id
    body
    title
    description
    date
  }
}
`;

export default Blog;
