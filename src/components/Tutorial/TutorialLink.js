import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TutorialLink = props => {
  return (
    <LayoutWrapper>
      <div className="tutorial-card">
        <img src={props.image} />
        <div className="tutorial-summary">
          <Link to={props.path}>
            <h3>{props.title}</h3>
          </Link>
          <p>{props.description}</p>
        </div>
      </div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  h3 {
    font-size: 1rem;
    text-align: left;
    margin: 0px;
  }

  p {
    font-size: 1rem;
  }

  img {
    width: 100%;
  }

  .tutorial-card {
    margin-bottom: 20px;
    display: grid;
    grid-template-rows: 45% auto;
    grid-template-columns: auto;
    row-gap: 10px;
    align-items: center;

    @media (min-width: 768px) {
      margin-bottom: 20px;
      display: grid;
      grid-template-columns: 45% auto;
      grid-template-rows: auto;
      column-gap: 10px;
      align-items: start;
    }
  }
`

export default TutorialLink
