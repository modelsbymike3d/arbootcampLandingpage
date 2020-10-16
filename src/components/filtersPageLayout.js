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
const relatedData = require("../landing/related.json")

const LandingPage = ({ data }) => {
  const { allFiltersJson, site } = data
  const pageData = allFiltersJson.edges[0].node

  const canonicalUrl = site.siteMetadata.siteUrl + pageData.path
  const imageUrl = pageData.image
    ? site.siteMetadata.siteUrl + pageData.image
    : site.siteMetadata.siteUrl + "/mainImage.jpg"

  return (
    <>
      <Helmet>
        <title>{pageData.title}</title>
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
          <div
            className="content-container"
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
