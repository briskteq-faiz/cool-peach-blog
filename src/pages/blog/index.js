import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/Layout";
import * as styles from "../index.module.css";

const Blog = ({ data }) => {
  console.log(data);
  const blogLists = data.allBlogJson.nodes.map((node) => node);
  let i = -1;
  return (
    <Layout pageTitle="Blog">
      <p>Blog List</p>
      {data.allFile.nodes.map((node) => (
        <article key={blogLists[++i].id}>
          <h2>
            <Link to={node.name} className={styles.blogList}>
              {blogLists[++i].title}
            </Link>
          </h2>
        </article>
      ))}
    </Layout>
  );
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
        id
      }
    }
  }
`;

export default Blog;

export const Head = () => <title>Home Page</title>;
