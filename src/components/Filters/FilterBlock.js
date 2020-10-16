import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LazyLoad from "react-lazyload"
import { GoLinkExternal } from "react-icons/go"

const FilterBlock = props => {
  return (
    <LayoutWrapper>
      <div className="filter-card">
        <h2>{props.name}</h2>

        <div className="filter-image-container">
          <LazyLoad height={200} offset={100}>
            <img
              src={props.preview}
              alt={`Preview of the ${props.name} filter`}
            />
          </LazyLoad>
          <div>
            <LazyLoad height={200} offset={100}>
              <a
                href={props.filter_link}
                title={`Link to the ${props.name} filter`}
              >
                <img
                  src={props.code_image}
                  alt={`Scannable code for the ${props.name} filter`}
                />
              </a>
              <div className="text-center">Scan or click to use!</div>
            </LazyLoad>
          </div>
        </div>

        <div className="tutorial-summary">
          <p>{props.description}</p>
          <p>
            <a href={props.author_link}>
              {`View more filters from ${props.author} `}
              <GoLinkExternal />
            </a>
          </p>
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
    margin-bottom: 5px;
  }

  .filter-image-container {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .text-center {
    text-align: center;
  }

  img {
    height: 200px;
    width: auto;
    margin: auto;

    @media (min-width: 768px) {
      height: 300px;
      width: auto;
    }
  }

  .filter-card {
    margin-bottom: 40px;
  }

  .tutorial-card {
    margin-bottom: 20px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    row-gap: 10px;
    align-items: center;

    @media (min-width: 768px) {
      margin-top: 30px;
      margin-bottom: 20px;
      display: grid;
      grid-template-columns: 45% auto;
      grid-template-rows: auto;
      column-gap: 10px;
      align-items: start;
    }
  }
`

export default FilterBlock
