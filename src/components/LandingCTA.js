import React from "react"

const LayoutCTA = ({ platform }) => {
  return (
    <div className="content-container vertical-spacing italic">
      <p>
        {`Do you want to learn how to make awesome ${
          platform === "General" ? "AR" : platform
        } filters? AR Bootcamp
        has you covered! `}
        Head on over to <a href="https://learn.arbootcamp.com">our tutorials</a>{" "}
        to get started today!
      </p>
    </div>
  )
}

export default LayoutCTA
