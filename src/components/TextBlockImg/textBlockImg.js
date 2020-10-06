import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const TextBlockImg = ({ title, children, subtitle, id }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "purple-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      id="perks"
      Tag="section"
      fluid={data.file.childImageSharp.fluid}
    >
      <TextBlockImgWrapper>
        <div className="content-container">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          {children}
        </div>
      </TextBlockImgWrapper>
    </BackgroundImage>
  )
}

const TextBlockImgWrapper = styled.section`
  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }

  text-align: center;
  padding: 100px 30px;

  .content-container {
    max-width: 500px;

    @media (min-width: 768px) {
      max-width: 650px;
    }

    @media (min-width: 1200px) {
      max-width: 900px;
    }
  }

  h2 {
    font-weight: bold;
    background: -webkit-linear-gradient(
      45deg,
      #03a9f4,
      #f441a5,
      #ffeb3b,
      #03a9f4
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animate 24s linear infinite;
    background-size: 400%;
  }

  p {
    margin-bottom: 50px;
  }
`

// background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);

export default TextBlockImg
