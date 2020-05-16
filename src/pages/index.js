import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/Content/content"
const IndexPage = ({data}) => {

  const {markdownRemark} = data;
  const {frontmatter} = markdownRemark;
  console.log(markdownRemark);
  console.log(frontmatter);
  return (
    <Layout>
    <h1>{frontmatter.heading}</h1>
      <Content data={frontmatter.contentModule} id={markdownRemark.id}/>
    </Layout>
  )
}

export default IndexPage


export const indexQuery = graphql`
  query IndexPageQuery {
    markdownRemark {
      frontmatter {
        heading
        templateKey
        contentModule {
          date
          heading
          content
        }
      }
      id
    }
  }
`