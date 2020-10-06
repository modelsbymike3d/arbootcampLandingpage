import React from "react"
import TutorialLink from "./TutorialLink"

const TutorialSection = ({ platform, data }) => {
  return (
    <div className="content-container vertical-spacing">
      <h2 className="header-padding">
        {platform}
        {data.software ? ` - ${data.software}` : null}
      </h2>
      {data.tutorials.map((entry, index) => {
        return <TutorialLink key={index} {...entry} />
      })}
    </div>
  )
}

export default TutorialSection
