import React from "react"
import { Link, graphql } from "gatsby"
import { Card, Grid } from 'semantic-ui-react';
import Layout from "../components/Layout";
import './index.css';
export default ({data}) => {
    return (
        <div>
            <Layout>
                <Grid columns={1}>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Grid.Column key={node.id}>
                        <Card style={{ width: "100%" } } key={node.id}>
                            <Card.Content>
                                <Card.Header>
                                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                                </Card.Header>
                                <Card.Meta>{node.frontmatter.date}</Card.Meta>
                                <Card.Description>{node.excerpt}</Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                ))}
                </Grid>
            </Layout>
        </div>

    )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`