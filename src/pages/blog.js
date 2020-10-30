import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import TutorialSection from "../components/Tutorial/TutorialSection"
import { Link } from "react-scroll"
import BlogLink from "../components/Blog/BlogLink"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext, GoLinkExternal } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"
import { Helmet } from "react-helmet"

const title = `AR Bootcamp | Blog`
const description = `Looking for Lens Studio or Spark AR tutorials? Look no further.`
const imageUrl = `https://arbootcamp.com/mainImage.jpg`
const canonicalUrl = `https://arbootcamp.com/blog`

export default ({ data }) => {
  const pages = data.allMarkdownRemark.edges

  console.log(pages)

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="twitter:image" content={imageUrl} />
        <meta property="og:image:alt" content={title} />
        <meta property="twitter:image:alt" content={title} />
        <meta property="og:site_name" content={title} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="512x512" />
      </Helmet>
      <Layout>
        <TextBlock id="blog-list" title="Blog">

          <div className="vertical-spacing">
              {pages.map((page, index) => {
                  const entry = {
                      description: page.node.excerpt,
                      ...page.node.frontmatter
                  };
                  return (
                      <BlogLink key={index} {...entry} />
                  )
              })}
          </div>

          {/* <div className="vertical-spacing">
            {Object.entries(tutList)
              .sort((a, b) => {
                return a[0].localeCompare(b[0])
              })
              .map((entry, index) => {
                return (
                  <TutorialSection
                    key={index}
                    platform={entry[0]}
                    data={entry[1]}
                  />
                )
              })}
          </div> */}
        </TextBlock>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/blog/**/*.md" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          frontmatter {
            path
            title
            image
            date
          }
        }
      }
    }
  }
`
