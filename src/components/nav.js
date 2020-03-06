import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import SearchAppBar from "./search-appbar"

import "./nav.css"

const Nav = () => (
  <nav
    style={{
      boxShadow: `0 0 2px rgba(0, 0, 0, 0.1) inset`,
      position: `relative`,
      backgroundColor: `#232323`,
      borderTop: `4px solid #096d00`,
      width: `100%`,
      textAlign: `center`,
    }}
  >
    <div
      style={{
        position: `relative`,
      }}
    >
      <SearchAppBar />
      {/* <Link to="/page-2/">Go to page 2</Link>
      <Link to="/baba/">Go to page baba</Link>
      <Link to="/baba/nano">Go to page nano</Link> */}
    </div>
  </nav>
)

export default Nav;
