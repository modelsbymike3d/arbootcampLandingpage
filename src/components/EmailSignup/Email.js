import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const EmailSignup = () => {
  return (
    <EmailWrapper>
      <div className="email-signup">
        <div
          id="mlb2-3520462"
          className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-3520462"
        >
          <div className="ml-form-align-center">
            <div className="ml-form-embedWrapper embedForm">
              <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
                <div className="ml-form-embedContent">
                  <h4>Stay in the loop</h4>
                  <p></p>
                  <p className="text-left">
                    Do you like building Snapchat lenses and Instagram filters?
                    Sign up for my newsletter! What's included?
                  </p>
                  <ul>
                    <li>Filter trends</li>
                    <li>Cool filters from the community</li>
                    <li>Tips and tricks</li>
                    <li>Tutorials</li>
                  </ul>
                  <p className="text-left">
                    I promise not to spam with you with things like "shoutout
                    for shoutout" requests. At most I'll send something out
                    weekly, but it'll probably be closer to one or two times a
                    month.
                  </p>
                  <p></p>
                </div>
                <form
                  className="ml-block-form"
                  action="https://static.mailerlite.com/webforms/submit/q3a2q6"
                  data-code="q3a2q6"
                  method="post"
                  target="_blank"
                >
                  <div className="ml-form-formContent horozintalForm">
                    <div className="ml-form-horizontalRow">
                      <div className="ml-input-horizontal">
                        <div
                          style={{ width: "100%" }}
                          className="horizontal-fields"
                        >
                          <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                            <input
                              type="email"
                              className="form-control form-input"
                              data-inputmask=""
                              name="fields[email]"
                              placeholder="Email"
                              autoComplete="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ml-button-horizontal primary">
                        <button type="submit" className="submit-button">
                          Subscribe
                        </button>
                        <button
                          disabled="disabled"
                          style={{ display: "none" }}
                          type="button"
                          className="loading"
                        >
                          {" "}
                          <div className="ml-form-embedSubmitLoad"></div>{" "}
                          <span className="sr-only">Loading...</span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="ml-form-embedPermissions">
                    <div className="ml-form-embedPermissionsContent horizontal privacy-policy">
                      <p>
                        You can unsubscribe anytime. For more details, review
                        our{" "}
                        <a href="https://arbootcamp.com/privacy">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  <input type="hidden" name="ml-submit" value="1" />
                  <div
                    className="ml-mobileButton-horizontal"
                    style={{ display: "none" }}
                  >
                    <button type="submit" className="submit-button">
                      Subscribe
                    </button>
                    <button
                      disabled="disabled"
                      style={{ display: "none" }}
                      type="button"
                      className="loading"
                    >
                      {" "}
                      <div className="ml-form-embedSubmitLoad"></div>{" "}
                      <span className="sr-only">Loading...</span>{" "}
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="ml-form-successBody row-success"
                style={{ display: "none" }}
              >
                <div className="ml-form-successContent">
                  <h4>Thank you!</h4>
                  <p>You have successfully joined our subscriber list.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script>
          {`function ml_webform_success_3520462(){var r=ml_jQuery||jQuery;r(".ml-subscribe-form-3520462 .row-success").show(),r(".ml-subscribe-form-3520462 .row-form").hide()}`}
        </script>
        <script
          src="https://static.mailerlite.com/js/w/webforms.min.js?v52c1aad546f96d894e3716ba78e7fa42"
          type="text/javascript"
        ></script>
      </div>
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
