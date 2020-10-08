import React from "react"

const Related = ({ related }) => {
  if (!related || related.length === 0) {
    return null
  }
  return (
    <div className="content-container vertical-spacing">
      <h2 className="header-padding">You might also like</h2>
      <ul>
        {related.map((entry, index) => {
          return (
            <li key={index}>
              <a href={entry.path}>{entry.title}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Related
