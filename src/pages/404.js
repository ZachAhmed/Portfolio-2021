import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BigDiv from "../components/bigDiv"

const NotFoundPage = () => (
  <BigDiv>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </BigDiv>
)

export default NotFoundPage
