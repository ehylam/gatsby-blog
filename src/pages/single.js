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
      <div className="content" dangerouslySetInnerHTML={{__html: frontmatter.contentModule.content }}/>
      </section>
    </Layout>
   );
}

export default SinglePage;



export const singleQuery = graphql`
  query singlePageQuery {
    markdownRemark {
      frontmatter {
        templateKey
        heading
        subheading
        background
        foreground
        contentModule {
          content
          heading
          date(fromNow: false, formatString: "dddd DD MMMM YYYY HH:mm", locale: "")
          posttype
          publishtype
        }
      }
      id
    }
  }
`