import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import "typeface-gothic-a1"
import "./reset.css"
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      />
      <Navbar />
      <div className="layout">{children}</div>
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  font-family: "Gothic A1", sans-serif;
  color: #fff;
  /* background-color: #060c21; */
  background: linear-gradient(45deg, #060c21, #0d0139);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 900;
    line-height: 1.4;
  }

  h1,
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -1px;
    margin: 1rem 0;

    @media (min-width: 768px) {
      font-size: 1.6rem;
      line-height: 1.3;
    }

    @media (min-width: 1080px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    text-align: left;
  }

  li {
    text-align: left;
    padding: 5px 0px;
    line-height: 1.45;
  }

  .nav-li {
    text-align: center;
  }

  p {
    font-size: 1rem;
    line-height: 1.45;
    margin: 1rem 0;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1080px) {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }

  .newsletter-container img {
    width: 80%;
    max-width: 800px;
  }

  .youtube-thumbnail {
    margin: 0px;
    width: 100%;
    height: 100%;
  }
  .youtube-thumbnail-container {
    position: relative;
    text-align: center;
    color: white;
  }
  .youtube-thumbnail-overlay {
    position: absolute;
    z-index: 2;
    background: rgba(0, 0, 0, 0.4) url(../../icons/playButton.svg) no-repeat
      center / 100px 100px;
    width: 100%;
    height: 99%;
    top: 0px;
  }
  .youtube-thumbnail-text {
    position: absolute;
    z-index: 3;
    top: 93%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000000aa;
    color: #ffffffaa;
    width: 100%;
    font-size: 1.2rem;
    font-style: italic;
  }

  .date-line {
    font-style: italic;
    font-size: 0.8rem;
    padding-top: 5px;
    text-align: left;
  }

  .content-container {
    margin: 0 auto;
    width: 100%;
    max-width: 600px;

    @media (min-width: 1080px) {
      max-width: 650px;
    }

    p {
      text-align: left;
    }
  }

  blockquote {
    font-style: italic;
  }

  .italic {
    font-style: italic;
  }

  .vertical-spacing {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .flex-container {
    display: flex;

    &.trio-block {
      flex-direction: column;
      justify-content: center;

      @media (min-width: 992px) {
        flex-direction: row;
      }
    }
  }

  .section-padding {
    padding: 100px 30px;
  }

  .header-padding {
    margin-top: 30px;
    margin-bottom: 5px;
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  a {
    color: white;
  }

  .iframe-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
    margin-bottom: 50px;
  }

  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`

export default Layout
