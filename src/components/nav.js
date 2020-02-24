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
        margin: `0 auto`,
        maxWidth: 1140
      }}
    >
      {/* <SearchAppBar /> */}
      {/* <div
        style={{
          backgroundColor: `#096d00`,
          float: `left`,
        }}
      >
        <Link
          style={{
            color: `#ffffff`,
            display: `block`,
            float: `none`,
            fontSize: 14,
            fontWeight: 600,
            textTransform: `uppercase`,
            padding: `7px 10px 6px`,
          }}
        to="/" title="Soccer Ethiopia">
          <i
            style={{
              color: `#ffffff`,
              fontSize: 27
            }}
            className="fa fa-home"></i>
        </Link>
      </div>
      <div class="search-random-icons-container">
        <div class="top-search-wrap">
          <i class="fa fa-search search-top"></i>
          <div class="search-form-top">
            <form action="http://www.soccerethiopia.net/" class="search-form searchform clearfix" method="get">
              <div class="search-wrap">
                <input type="text" placeholder="Search" class="s field" name="s" />
                <button class="search-icon" type="submit"></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="menu-primary-container">
        <ul id="menu-menu-1" class="menunav-menu" aria-expanded="false">
          <li id="menu-item-561" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-561"><Link to="/">መነሻ ገፅ</Link></li>
          <li id="menu-item-695" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-695"><Link to="/football/category/news-2">ዜናዎች</Link></li>
          <li id="menu-item-35320" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-35320"><Link to="/competitions">ውድድሮች</Link>
            <ul class="sub-menu">
              <li id="menu-item-52460" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-52460"><Link to="/ethpl-2012">ፕሪምየር ሊግ</Link></li>
              <li id="menu-item-52963" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-52963"><Link to="/eth-higher-league-2012">ከፍተኛ ሊግ</Link></li>
              <li id="menu-item-52962" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-52962"><Link to="/eff-league-one-2012">አንደኛ ሊግ</Link></li>
              <li id="menu-item-52459" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-52459"><Link to="/wpl-2012">ሴቶች ፕሪምየር ሊግ</Link></li>
            </ul>
            <span class="sub-toggle"> <i class="fa fa-caret-down"></i> </span><span class="sub-toggle"> <i class="fa fa-caret-down"></i> </span></li>
          <li id="menu-item-54430" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-54430"><Link to="/football/category/news-2/live-score">ቀጥታ</Link></li>
          <li id="menu-item-706" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-706"><Link to="/football/category/national-team/the-walias">ዋልያዎቹ</Link></li>
          <li id="menu-item-16683" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-16683"><Link to="/football/category/womens-football">ሴቶች</Link></li>
          <li id="menu-item-4007" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-4007"><Link to="/football/category/youth-football">ወጣቶች</Link></li>
          <li id="menu-item-700" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-700"><Link to="/football/category/news-2/players-abroad">ኢትዮጵያዊያን በውጭ</Link></li>
          <li id="menu-item-16682" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-16682"><Link to="/football/category/africa">አፍሪካ</Link></li>
          <li id="menu-item-27685" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-27685"><Link to="/football/category/english">English</Link></li>
        </ul>
      </div> */}
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/baba/">Go to page baba</Link>
      <Link to="/baba/nano">Go to page nano</Link>
    </div>
  </nav>
)

export default Nav;
