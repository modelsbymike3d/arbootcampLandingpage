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
const description = `Looking for Lens Studio or Spark AR tutorials? Look no further.`
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
        <TextBlock id="blog-list" title="Newsletter Archive">
          <div className="vertical-spacing">
              <ButtonWrapper className="anchor" as="a" href="#email-signup-form">Signup today!</ButtonWrapper>
              
              <div className="vertical-spacing">
                { pages.length === 0 && 
                    <div>Coming soon!</div>
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

const ButtonWrapper = styled.button`
  position: relative;
  display: inline-block;
  padding: 0 20px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  text-decoration: none;
  box-sizing: border-box;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 30px;
  border: none;
  z-index: 1;

  &:hover {
    cursor: pointer;
    animation: animate 8s linear infinite;

    &::before {
      filter: blur(20px);
      opacity: 1;
      animation: animate 8s linear;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
`
