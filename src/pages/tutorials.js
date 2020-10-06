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

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext, GoLinkExternal } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"
import { Helmet } from "react-helmet"

const title = `AR Bootcamp`
const description = `Looking for Lens Studio or Spark AR tutorials? Look no further.`
const imageUrl = `https://arbootcamp.com/mainImage.jpg`
const canonicalUrl = `https://arbootcamp.com/tutorials`

export default ({ data }) => {
  const pages = data.allMarkdownRemark.edges
  const tutList = {}
  pages.forEach(page => {
    const platform = page.node.frontmatter.platform
    if (!tutList[platform]) {
      tutList[platform] = {}
      tutList[platform].software = page.node.frontmatter.software
      tutList[platform].tutorials = []
    }
    tutList[platform].tutorials.push({
      ...page.node.frontmatter,
      excerpt: page.node.excerpt,
    })
  })
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
        {/* <Banner /> */}
        {/* <TextBlock
        id="about"
        title="Developing a new business is never easy, but Startup is here to help"
        paragraph="With a super-fast Gatsby powered website you have the perfect platform to get your idea off the ground. Its the perfect template to help turn your idea into a reality."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button cta="Tell Me More!" />
        </Link>
      </TextBlock> */}
        <TextBlock
          id="perks"
          title="Let's get started!"
          subtitle="Want to make Snapchat lenses using Lens Studio? What about Instagram filters using Spark AR Studio? You've come to the right place!"
        >
          <p>
            {`
                Making augmented reality filters is a ton of fun, but it can be daunting when you are starting out or trying something new. I've been there, so that's why I created AR Bootcamp to help you succeed! You can head on over to our learning pages to get started, or you can scroll down to view various tutorials we've compiled from across the web.
              `}
          </p>
          <Button
            cta="Start Learning"
            anchor={true}
            href="https://learn.arbootcamp.com"
            external={true}
          />

          <div className="vertical-spacing">
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
          </div>
        </TextBlock>

        {/* <Packages
        title="Our Packages"
        para="Choose the perfect solution for you. With benefits to suit all budgets Startup can offer amazing value and expert advice"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Standard">
            <ul>
              <li>
                <MdDone />1 User
              </li>
              <li>
                <MdDone />
                1GB Storage
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                24/7 Support
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button cta="I want this!" />
            </Link>
          </Package>
          <Package title="Hyper" active={true}>
            <ul>
              <li>
                <MdDone />
                24/7 Support
              </li>
              <li>
                <MdDone />
                Dedicated Advisor
              </li>
              <li>
                <MdDone />
                Unlimited Storage
              </li>
              <li>
                <MdDone />
                Unlimited Users
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button cta="I want this!" />
            </Link>
          </Package>
          <Package title="Super">
            <ul>
              <li>
                <MdDone />
                10 Users
              </li>
              <li>
                <MdDone />
                500GB Storage
              </li>
              <li>
                <MdDone />
                Advice Support
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button cta="I want this!" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Packages> */}
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/landing/**/*.md" } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          frontmatter {
            path
            title
            description
            image
            platform
            software
          }
        }
      }
    }
  }
`
