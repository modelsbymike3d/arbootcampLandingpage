import React from "react"
import styled from "styled-components"
import socialIcons from "../../constants/social-icons"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="credit">
        <Link
          to="/privacy"
        >
          Privacy Policy
        </Link>
      </div>
      <div className="credit">
        Site created by{" "}
        <a
          href="https://modelsbymike3d.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mike
        </a>
      </div>
      <div className="credit">
        Theme by{" "}
        <a
          href="http://www.morganbaker.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Morgan
        </a>
      </div>
      {/* {socialIcons.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        )
      })} */}
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #000;
  padding: 20px 30px;
  text-align: center;

  .credit {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;

    a {
      padding: 0;
      font-size: 0.85rem;
      text-decoration: none;
      background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  a {
    color: #fff;
    font-size: 1.75rem;
    padding: 0 0.5rem;

    svg {
      vertical-align: middle;
    }
  }
`

export default Footer
