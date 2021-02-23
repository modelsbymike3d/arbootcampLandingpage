import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import "typeface-gothic-a1"
import "./reset.css"
import Navbar from "./Navbar/navbar"
import Footer from "./Footer/footer"
import Layout from "./layout"
import Banner from "./Banner/banner"
import TextBlock from "./TextBlock/textBlock"
import LandingCTA from "./LandingCTA"

const NewsletterPage = ({ data }) => {
  const { markdownRemark, site } = data
  const { frontmatter, html } = markdownRemark

  const canonicalUrl = site.siteMetadata.siteUrl + frontmatter.path
  const imageUrl = frontmatter.image
    ? site.siteMetadata.siteUrl + frontmatter.image
    : site.siteMetadata.siteUrl + "/mainImage.jpg"

  return (
    <>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="title" content={frontmatter.title} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="twitter:title" content={frontmatter.title} />
        <meta name="description" content={frontmatter.excerpt} />
        <meta property="og:description" content={frontmatter.excerpt} />
        <meta property="twitter:description" content={frontmatter.excerpt} />
        <meta property="og:image" content={imageUrl} />
        <meta property="twitter:image" content={imageUrl} />
        <meta property="og:image:alt" content={frontmatter.title} />
        <meta property="twitter:image:alt" content={frontmatter.title} />
        <meta
          property="og:site_name"
          content={`AR Bootcamp | ${frontmatter.title}`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          name="publish_date"
          property="og:publish_date"
          content={frontmatter.date}
        ></meta>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="512x512" />
      </Helmet>
      <Layout>
        <TextBlock title={frontmatter.title}>
          <div className="date-line">{`Published ${frontmatter.date}`}</div>
          {frontmatter.image ? (
            <img
              className="content-container"
              src={frontmatter.image}
              alt={frontmatter.title}
            />
          ) : null}
          <div
            className="content-container text-left newsletter-container"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>

          <LandingCTA />
        </TextBlock>
      </Layout>
    </>
  )
}

export default NewsletterPage

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 100)
      frontmatter {
        image
        title
        path
        date
      }
    }
  }
`
