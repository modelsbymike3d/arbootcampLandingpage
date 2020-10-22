import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LazyLoad from "react-lazyload"
import { ExternalLink } from "@styled-icons/heroicons-outline"
import {
  SnapchatGhost,
  Instagram,
  Twitter,
  Youtube,
  FacebookF,
} from "@styled-icons/fa-brands"

const AuthorSection = ({
  author,
  site,
  snapchat,
  instagram,
  twitter,
  youtube,
  facebook,
}) => {
  return (
    <LayoutWrapper>
      <div>
        {author && site ? (
          <a href={site} title={`Link to author's website`}>
            {`Contributed by ${author}`} <ExternalLink className="icon" />
          </a>
        ) : (
          <div>{`Contributed by ${author}`}</div>
        )}
      </div>
      <div>
        {snapchat ? (
          <a href={snapchat} title={`Link to author's Snapchat`}>
            <SnapchatGhost className="icon" />
          </a>
        ) : null}
      </div>
      <div>
        {instagram ? (
          <a href={instagram} title={`Link to author's Instagram`}>
            <Instagram className="icon" />
          </a>
        ) : null}
      </div>
      <div>
        {facebook ? (
          <a href={facebook} title={`Link to author's Facebook`}>
            <FacebookF className="icon" />
          </a>
        ) : null}
      </div>
      <div>
        {twitter ? (
          <a href={twitter} title={`Link to author's Twitter`}>
            <Twitter className="icon" />
          </a>
        ) : null}
      </div>
      <div>
        {youtube ? (
          <a href={youtube} title={`Link to author's Youtube`}>
            <Youtube className="icon" />
          </a>
        ) : null}
      </div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 15px;

  div {
    margin-right: 22px;
  }

  div a {
    color: #ffffff99;
  }

  div div {
    color: #ffffff99;
  }

  .icon {
    height: 16px;
  }
`

export default AuthorSection
