import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const axios = require("axios").default

const EmailSignup = () => {
  useEffect(() => {
    document.getElementById("honey").style.display = "none"
  })

  const submitForm = event => {
    event.preventDefault()
    const data = new FormData(event.target)
    const payload = Object.fromEntries(data.entries())
    const headers = {
      "Content-Type": "application/json",
    }
    axios
      .post(".netlify/functions/subscribe", payload, headers)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          alert(
            "Success! Keep an eye out for a confirmation email. You might need to check your Promotions section or spam folder."
          )
        } else {
          alert("Uh oh, something went wrong :(")
        }
      })
      .catch(err => {
        console.log(err)
        alert("Unable to subscribe right now :(")
      })
  }

  return (
    <EmailWrapper>
      <div className="email-signup">
        <h2>Stay in the loop</h2>
        <p></p>
        <p className="text-left">
          Do you like building Snapchat lenses and Instagram filters? Sign up
          for my newsletter! What's included?
        </p>
        <ul>
          <li>Filter trends</li>
          <li>Cool filters from the community</li>
          <li>Tips and tricks</li>
          <li>Tutorials</li>
        </ul>
        <p className="text-left">
          I promise not to spam with you with things like "shoutout for
          shoutout" requests. At most I'll send something out weekly, but it'll
          probably be closer to one or two times a month.
        </p>
        <p></p>
      </div>
      <form className="email-signup" onSubmit={submitForm}>
        <input
          type="email"
          className="form-control form-input"
          data-inputmask=""
          name="email"
          placeholder="Email"
          autoComplete="email"
          aria-label="Email address"
        />

        <input autoComplete="off" type="text" id="honey" name="honey" />

        <div className="ml-button-horizontal primary">
          <button type="submit" className="submit-button">
            Subscribe
          </button>
        </div>

        <div className="ml-form-embedPermissions">
          <div className="ml-form-embedPermissionsContent horizontal privacy-policy">
            <p>
              You can unsubscribe anytime. For more details, review our{" "}
              <a href="https://arbootcamp.com/privacy">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </form>
    </EmailWrapper>
  )
}

const EmailWrapper = styled.footer`
  background-color: #000;
  padding: 20px 30px;
  text-align: center;

  .email-signup {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1rem;

    h4 {
      font-size: 1.3rem;
    }

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

    a {
      padding: 0;
      font-size: 1rem;
      text-decoration: none;
      background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .privacy-policy {
    font-size: 1rem;
  }

  .form-input {
    font-size: 1.5rem;
    padding: 6px;
    margin: 12px;
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

export default EmailSignup
