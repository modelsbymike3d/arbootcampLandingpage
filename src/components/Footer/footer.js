import React from "react"
import styled from "styled-components"
import socialIcons from "../../constants/social-icons"
import { Link } from "gatsby"
import Email from "../EmailSignup/Email"

const Footer = () => {
  return (
    <FooterWrapper>
      {/* <Email /> */}
      <div className="credit">
        <Link to="/privacy">Privacy Policy</Link>
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

  .email-signup {
    margin: auto;

    .submit-button {
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
    }

    .emailoctopus-rewards {
      font-size: 0.85rem;
    }

    a {
      padding: 0;
      font-size: 0.85rem;
      text-decoration: none;
      background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

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
