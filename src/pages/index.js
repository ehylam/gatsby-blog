import React, {useState, useEffect} from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/Hero/hero'
import Content from "../components/Content/content"
import Filter from "../components/Filter/Filter"
import SEO from "../components/seo"

// TODO:
// Dynamic Filter List that can be added using NetlifyCMS repeater widget?
const IndexPage = ({data}, props) => {
  const {markdownRemark} = data;
  const {frontmatter} = markdownRemark;
  const [windowState, setWindowState] = useState({
    windowOn: false,
    posts: null
  })



  useEffect(() => {
      var posts = document.getElementsByClassName('content--wrapper');
      setWindowState({
        windowOn: true,
        posts: posts
      })
  },[])


  return (
    <Layout>
      <SEO title={windowState.windowOn ? "I know that I don't know what I'm doing.." : 'Hold UP! loading...'}/>
      <Hero heading={frontmatter.heading}
            subheading={frontmatter.subheading}
            background={frontmatter.background}
            foreground={frontmatter.foreground}
      />
      {/* Replace loading to a new loading component? */}
      { windowState.windowOn  ? <Filter posttypes={frontmatter.contentModule} postData={windowState.posts}/> : 'loading'}
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
          publishtype
        }
      }
      id
    }
  }
`