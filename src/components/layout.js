import React from "react"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0`, padding: `0`}}>
      {children}
    </div>
  )
}

