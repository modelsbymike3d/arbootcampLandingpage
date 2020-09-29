import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import "typeface-gothic-a1"
import "./reset.css"
import Navbar from "./Navbar/navbar"
import Footer from "./Footer/footer"
import Layout from "./layout"
import Banner from "../components/Banner/banner"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"

const LandingPage = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Helmet>
        <title>{frontmatter.title}</title>
        <link
          rel="icon"
          type="image/png"
          href="../favicon.png"
          sizes="512x512"
        />
        <meta name="description" content={frontmatter.description} />
      </Helmet>
      <Layout>
        <TextBlockImg title={frontmatter.title} />
        <div
          className="content-container"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </Layout>
    </>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
      }
    }
  }
`
