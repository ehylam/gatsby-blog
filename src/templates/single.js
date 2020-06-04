import React from "react"
import SEO from "../components/seo"
import {graphql} from "gatsby"




import Layout from "../components/layout"


const SinglePage = ({data}) => {

  const {markdownRemark} = data
  const {frontmatter,html} = markdownRemark

  return (
    <Layout>
    <SEO title="Post Title Here"/>
      <section className="single">
      <h1>{frontmatter.header}</h1>
      <div className="content" dangerouslySetInnerHTML={{__html: frontmatter.content }}/>
      </section>
    </Layout>
   );
}

export default SinglePage;



export const singleQuery = graphql`
  query singlePageQuery {
    markdownRemark {
      frontmatter {
        header
        content
      }
      id
    }
  }
`