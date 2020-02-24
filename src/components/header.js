import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Nav from "./nav"

const Header = ({ siteTitle }) => {
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
  return (
    <header
      style={{
        backgroundColor: `#ffffff`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <div
          style={{
            padding: `8px 0 4px`,
            boxShadow: `0 0 2px 0 rgba(0, 0, 0, 0.1)`,
            fontSize: 14
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 1140
            }}
          >{`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}   `}<strong>Latest:</strong>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1140,
            padding: `20px 0 25px`
          }}
        >
          <div style={{ margin: 0, maxWidth: 470 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <Logo />
              {/* {siteTitle} */}
            </Link>
          </div>
        </div>
        <Nav />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
