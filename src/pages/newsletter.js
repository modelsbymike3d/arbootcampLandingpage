import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

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

const title = `AR Bootcamp | Newsletter`
const description = `Stay up-to-date with augmented reality on Snapchat, Instagram, and Facebook! The AR Bootcamp newsletter is brought to you by me, Mike (aka modelsbymike3d), and I'll be sharing my tips, tricks, thoughts, and ramblings on social AR. Whether you are looking to get started with AR filters, are a seasoned professional, or you have no idea what I'm talking about, this newsletter is for you!`
const imageUrl = `https://arbootcamp.com/mainImage.jpg`
const canonicalUrl = `https://arbootcamp.com/newsletter`

export default ({ data }) => {
  const pages = data.allMarkdownRemark.edges

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
        <TextBlock id="blog-list" title="Newsletter Archive" paragraph={description}>
          <div className="vertical-spacing">
            
              <Button anchor={true} href="#email-signup-form" cta="Signup today!" />
              
              <div className="vertical-spacing">
                { pages.length === 0 && 
                    <div>Issues coming soon!</div>
                }
                {pages.map((page, index) => {
                const entry = {
                    description: page.node.excerpt,
                    ...page.node.frontmatter,
                }
                return <BlogLink key={index} {...entry} />
                })}
            </div>
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
      filter: { fileAbsolutePath: { glob: "**/src/newsletter/**/*.md" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`
