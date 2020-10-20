import React from "react"
import { Link } from "gatsby"

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
              <Link to={entry.path}>{entry.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Related
