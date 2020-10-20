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
import FilterBlock from "./Filters/FilterBlock"
import LandingCTA from "./LandingCTA"
import Related from "./Tutorial/Related"
import AuthorSection from "./Author/AuthorSection"

const relatedData = require("../landing/related.json")

const LandingPage = ({ data }) => {
  const { allFiltersJson, site } = data
  const pageData = allFiltersJson.edges[0].node

  const canonicalUrl = site.siteMetadata.siteUrl + pageData.path
  const imageUrl = pageData.image
    ? site.siteMetadata.siteUrl + pageData.image
    : site.siteMetadata.siteUrl + "/mainImage.jpg"

  const authorInfo = {
    author: pageData.contributor,
    site: pageData.contributor_site,
    snapchat: pageData.contributor_snapchat,
    instagram: pageData.contributor_instagram,
    twitter: pageData.contributor_twitter,
    youtube: pageData.contributor_youtube,
    facebook: pageData.contributor_facebook,
  }

  return (
    <>
      <Helmet>
        <title>{pageData.title}</title>
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="title" content={pageData.title} />
        <meta property="og:title" content={pageData.title} />
        <meta property="twitter:title" content={pageData.title} />
        <meta name="description" content={pageData.description} />
        <meta property="og:description" content={pageData.description} />
        <meta property="twitter:description" content={pageData.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="twitter:image" content={imageUrl} />
        <meta property="og:image:alt" content={pageData.title} />
        <meta property="twitter:image:alt" content={pageData.title} />
        <meta
          property="og:site_name"
          content={`AR Bootcamp | ${pageData.title}`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="512x512" />
      </Helmet>
      <Layout>
        <TextBlock title={pageData.title}>
          <AuthorSection {...authorInfo} />
          <div
            className="content-container text-left"
            dangerouslySetInnerHTML={{ __html: pageData.intro }}
          ></div>

          {pageData.filters.map((filter, index) => {
            return <FilterBlock key={index} {...filter} />
          })}

          {relatedData[pageData.path] ? (
            <Related related={relatedData[pageData.path]} />
          ) : null}
          <LandingCTA platform={pageData.platform} />
        </TextBlock>
      </Layout>
    </>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allFiltersJson(filter: { path: { eq: $path } }) {
      edges {
        node {
          contributor
          contributor_site
          contributor_snapchat
          contributor_instagram
          contributor_twitter
          contributor_youtube
          contributor_facebook
          description
          intro
          image
          title
          platform
          path
          date
          filters {
            author
            author_link
            code_image
            description
            filter_link
            name
            preview
          }
        }
      }
    }
  }
`
