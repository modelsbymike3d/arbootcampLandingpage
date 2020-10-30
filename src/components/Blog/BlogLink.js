import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LazyLoad from "react-lazyload"

const BlogLink = props => {
  return (
    <LayoutWrapper>
      <div className="blog-card">
        <LazyLoad height={150} offset={100}>
          <img src={props.image} alt={props.title} />
        </LazyLoad>
        <div className="blog-summary">
          <Link to={props.path}>
            <h3>{props.title}</h3>
          </Link>
          <div className="date-line">{`Published ${props.date}`}</div>
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
    margin: auto;

    @media (min-width: 768px) {
      width: 100%;
    }
  }

  .blog-card {
    margin-bottom: 20px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    row-gap: 10px;
    align-items: center;
  }
`

export default BlogLink
