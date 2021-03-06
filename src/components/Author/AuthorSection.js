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
  Linkedin,
} from "@styled-icons/fa-brands"

const AuthorSection = ({
  author,
  site,
  snapchat,
  instagram,
  twitter,
  youtube,
  facebook,
  linkedin,
}) => {
  return (
    <LayoutWrapper>
      <div>
        {author && site ? (
          <a href={site} title={`Link to ${author}'s website`}>
            {`Contributed by ${author}`} <ExternalLink className="icon" />
          </a>
        ) : (
          <div>{`Contributed by ${author}`}</div>
        )}
      </div>

      {snapchat ? (
        <div>
          <a href={snapchat} title={`Link to ${author}'s Snapchat`}>
            <SnapchatGhost className="icon" />
          </a>
        </div>
      ) : null}

      {instagram ? (
        <div>
          <a href={instagram} title={`Link to ${author}'s Instagram`}>
            <Instagram className="icon" />
          </a>
        </div>
      ) : null}

      {facebook ? (
        <div>
          <a href={facebook} title={`Link to ${author}'s Facebook`}>
            <FacebookF className="icon" />
          </a>
        </div>
      ) : null}

      {twitter ? (
        <div>
          <a href={twitter} title={`Link to ${author}'s Twitter`}>
            <Twitter className="icon" />
          </a>
        </div>
      ) : null}

      {youtube ? (
        <div>
          <a href={youtube} title={`Link to ${author}'s Youtube`}>
            <Youtube className="icon" />
          </a>
        </div>
      ) : null}

      {linkedin ? (
        <div>
          <a href={linkedin} title={`Link to ${author}'s LinkedIn`}>
            <Linkedin className="icon" />
          </a>
        </div>
      ) : null}
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
