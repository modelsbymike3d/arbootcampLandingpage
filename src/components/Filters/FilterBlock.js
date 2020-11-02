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

        <LazyLoad height={300} offset={100}>
          <img
            src={props.preview}
            alt={`Preview of the ${props.name} filter`}
            className="preview-img"
          />
        </LazyLoad>
        <div className="tutorial-summary">
          <p>{props.description}</p>
        </div>
        <div>
          <LazyLoad height={150} offset={100}>
            <a
              href={props.filter_link}
              title={`Link to the ${props.name} filter`}
            >
              <img
                src={props.code_image}
                alt={`Scannable code for the ${props.name} filter`}
                className="snapcode-img"
              />
            </a>
            <div className="text-center">
              Scan or{" "}
              <a
                href={props.filter_link}
                title={`Link to the ${props.name} filter`}
              >
                click
              </a>{" "}
              to use!
            </div>
          </LazyLoad>
        </div>
        <p>
          <a href={props.author_link}>
            {`View more filters from ${props.author} `}
            <GoLinkExternal />
          </a>
        </p>
      </div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  h2 {
    text-align: center;
  }

  h3 {
    font-size: 1rem;
    text-align: left;
    margin: 0px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 5px;
  }

  .lazyload-wrapper {
    text-align: center;
  }

  .text-center {
    text-align: center;
  }

  .snapcode-img {
    height: 100px;
    width: auto;
    margin: auto;

    @media (min-width: 768px) {
      height: 150px;
      width: auto;
    }
  }

  img {
    height: 300px;
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
