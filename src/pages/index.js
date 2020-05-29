import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/Hero/hero'
import Content from "../components/Content/content"
import Filter from "../components/Filter/Filter"
const IndexPage = ({data}) => {

  const {markdownRemark} = data;
  const {frontmatter} = markdownRemark;
  return (
    <Layout>
      <Hero heading={frontmatter.heading}
            subheading={frontmatter.subheading}
            background={frontmatter.background}
            foreground={frontmatter.foreground}
      />
      <Filter posttypes={frontmatter.contentModule}/>
      <Content data={frontmatter.contentModule} id={markdownRemark.id}/>
    </Layout>
  )
}

export default IndexPage


export const indexQuery = graphql`
  query IndexPageQuery {
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
        }
      }
      id
    }
  }
`