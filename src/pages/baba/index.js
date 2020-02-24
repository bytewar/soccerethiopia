import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageTemplate from "../../templates/pages"

const BabaPage = () => (
  <Layout>
    <SEO title="Baba Page" />
    <h1>Hi from the baba page</h1>
    <p>Welcome to page baba</p>
    <PageTemplate />
  </Layout>
)

export default BabaPage
