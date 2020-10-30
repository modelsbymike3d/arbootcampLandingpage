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
import Related from "./Tutorial/Related"
import AuthorSection from "./Author/AuthorSection"

const relatedData = require("../landing/related.json")

const BlogPage = ({ data }) => {
  const { markdownRemark, site } = data
  const { frontmatter, html } = markdownRemark

  const canonicalUrl = site.siteMetadata.siteUrl + frontmatter.path
  const imageUrl = frontmatter.image
    ? site.siteMetadata.siteUrl + frontmatter.image
    : site.siteMetadata.siteUrl + "/mainImage.jpg"

  const authorInfo = {
    author: frontmatter.contributor,
    site: frontmatter.contributor_site,
    snapchat: frontmatter.contributor_snapchat,
    instagram: frontmatter.contributor_instagram,
    twitter: frontmatter.contributor_twitter,
    youtube: frontmatter.contributor_youtube,
    facebook: frontmatter.contributor_facebook,
    linkedin: frontmatter.contributor_linkedin,
  }

  return (
    <>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="title" content={frontmatter.title} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="twitter:title" content={frontmatter.title} />
        <meta name="description" content={frontmatter.description} />
        <meta property="og:description" content={frontmatter.description} />
        <meta
          property="twitter:description"
          content={frontmatter.description}
        />
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
        <meta name="author" content={frontmatter.contributor} />
        <meta
          name="publish_date"
          property="og:publish_date"
          content={frontmatter.date}
        ></meta>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="512x512" />
      </Helmet>
      <Layout>
        <TextBlock title={frontmatter.title}>
          <AuthorSection {...authorInfo} />
          <div className="date-line">{`Published ${frontmatter.date}`}</div>
          {frontmatter.image ? (
            <img
              className="content-container"
              src={frontmatter.image}
              alt={frontmatter.title}
            />
          ) : null}
          <div
            className="content-container text-left"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>

          {relatedData[frontmatter.path] ? (
            <Related related={relatedData[frontmatter.path]} />
          ) : null}
          <LandingCTA />
        </TextBlock>
      </Layout>
    </>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        contributor
        contributor_site
        contributor_snapchat
        contributor_instagram
        contributor_twitter
        contributor_youtube
        contributor_facebook
        contributor_linkedin
        description
        image
        title
        path
        date
      }
    }
  }
`
