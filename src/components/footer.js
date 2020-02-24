import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import FooterLogo from "./footerlogo"

const Footer = () => (
  <footer
    style={{
      backgroundColor: `#303440`,
      fontSize: 14,
      lineHeight: 1.4,
    }}
  >
    <div
      style={{
        borderTop: `1px solid #f2f2f2`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1140,
        }}
      >
        <div
          style={{
            paddingTop: 45,
            paddingBottom: 10,
            color: `#cccccc`,
          }}
        >
          <div
            style={{
              width: `39.473684%`,
              float: `left`,
              marginRight: `2.631579%`,
            }}
          >
            <aside
              style={{
                marginBottom: 40,
              }}
            >
              <h3
                style={{
                  borderBottom: `2px solid #096d00`,
                }}
              ><span
                  style={{
                    backgroundColor: `#096d00`,
                    color: `#ffffff`,
                    padding: `6px 12px`,
                    display: `inline-block`,
                  }}
              >ሶከር ኢትዮጵያ</span></h3>
              <div class="widget-content">
                <FooterLogo />
                <div class="image-text-widget-text">ሶከር ኢትዮጵያ በ ‘አብርሀም ገ/ማርያም የማስታወቂያ ድርጅት’ ስር የሚሰራ ድረገፅ ሲሆን በኢትዮጵያ እግርኳስ ላይ በሚያተኩሩ ዜናዎች፣ ቁጥራዊ መረጃዎች፣ ታሪኮች፣ ጥልቅ ዘገባዎች፣ አስተያየቶች እና ትንታኔዎች ላይ ትኩረቱን ያደርጋል።</div>
              </div>
            </aside>
          </div>
          <div
            style={{
              width: `57.894737%`,
              float: `right`,
            }}
          >
            <div
              style={{
                maxWidth: `30.303030%`,
                margin: `0 auto`
              }}
            >
              <aside
                style={{
                  marginBottom: 40
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    marginBottom: 15,
                    paddingBottom: 0,
                    borderBottom: `2px solid #096d00`,
                  }}
                >
                  <span
                    style={{
                      color: `#ffffff`,
                      padding: `6px 12px`,
                      display: `inline-block`,
                      backgroundColor: `#096d00`,
                    }}
                  >ዘርፎች</span></h3>
                <form action="http://www.soccerethiopia.net" method="get">
                  <label for="cat"
                    style={{
                      border: 0,
                      clip: `rect(1px, 1px, 1px, 1px)`,
                      clipPath: `inset(50%)`,
                      height: 1,
                      margin: -1,
                      overflow: `hidden`,
                      padding: 0,
                      position: `absolute!important`,
                      width: 1,
                      wordWrap: `normal !important`,
                    }}
                  >ዘርፎች</label>
                  <select id="cat" name="cat"
                    style={{
                      border: `1px solid #dddddd`,
                      color: `#777777`,
                      padding: 2,
                      width: `60%`,
                    }}
                  >
                    <option value="-1" selected="selected">Select Category</option>
                    <option className="level-0" value="158">English&nbsp;&nbsp;(580)</option>
                    <option className="level-1" value="429">&nbsp;&nbsp;&nbsp;Africa&nbsp;&nbsp;(21)</option>
                    <option className="level-1" value="428">&nbsp;&nbsp;&nbsp;National Team&nbsp;&nbsp;(14)</option>
                    <option className="level-0" value="351">Francais&nbsp;&nbsp;(46)</option>
                    <option className="level-0" value="366">ልዩ ልዩ&nbsp;&nbsp;(485)</option>
                    <option className="level-1" value="1">&nbsp;&nbsp;&nbsp;Uncategorized&nbsp;&nbsp;(149)</option>
                    <option className="level-1" value="404">&nbsp;&nbsp;&nbsp;መልዕክት&nbsp;&nbsp;(1)</option>
                  </select>
                </form>
              </aside>
              <aside
                style={{
                  marginBottom: 40
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    marginBottom: 15,
                    paddingBottom: 0,
                    borderBottom: `2px solid #096d00`,
                  }}
                >
                  <span
                    style={{
                      color: `#ffffff`,
                      padding: `6px 12px`,
                      display: `inline-block`,
                      backgroundColor: `#096d00`,
                    }}
                  >ማህደር</span>
                </h3>
                <label for="archives-dropdown-5"
                  style={{
                    border: 0,
                    clip: `rect(1px, 1px, 1px, 1px)`,
                    clipPath: `inset(50%)`,
                    height: 1,
                    margin: -1,
                    overflow: `hidden`,
                    padding: 0,
                    position: `absolute!important`,
                    width: 1,
                    wordWrap: `normal !important`,
                  }}
                >ማህደር</label>
                <select id="archives-dropdown-5" name="archive-dropdown"
                    style={{
                      border: `1px solid #dddddd`,
                      color: `#777777`,
                      padding: 2,
                      width: `60%`,
                    }}
                  >
                  <option value="" selected="selected">Select Month</option>
                  <option value="http://www.soccerethiopia.net/football/date/2020/01"> January 2020 &nbsp;(233)</option>
                  <option value="http://www.soccerethiopia.net/football/date/2019/12"> December 2019 &nbsp;(331)</option>
                  <option value="http://www.soccerethiopia.net/football/date/2019/11"> November 2019 &nbsp;(225)</option>
                  <option value="http://www.soccerethiopia.net/football/date/2019/10"> October 2019 &nbsp;(224)</option>
                  <option value="http://www.soccerethiopia.net/football/date/2019/09"> September 2019 &nbsp;(213)</option>
                </select>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        padding: `20px 0px 50px`,
        clear: `both`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1140,
        }}
      >
        <div
          style={{
            width: `100%`,
          }}
        >
          <div
            style={{
              float: `right`,
            }}
          >RIGHT</div>
          <div
            style={{
              float: `left`,
            }}
          >
            <div
              style={{
                color: `#b1b6b6`,
                float: `left`,
                fontSize: 14,
          }}
        >
              Copyright © {new Date().getFullYear()}
              <a style={{ color: `#b1b6b6`, borderBottom: `1px solid #5a5d62`, }} href="http://www.soccerethiopia.net/" title="Soccer Ethiopia">
                <span> Soccer Ethiopia</span>
              </a>. All rights reserved.<br />
              Theme: ColorMag by <a style={{ color: `#b1b6b6`, borderBottom: `1px solid #5a5d62`, }} href="https://themegrill.com/themes/colormag" target="_blank" title="ThemeGrill" rel="author"><span>ThemeGrill</span></a>.
              Powered by <a style={{ color: `#b1b6b6`, borderBottom: `1px solid #5a5d62`, }} href="https://wordpress.org/" target="_blank" title="WordPress"><span>WordPress</span></a>.
              , Built with
              {` `}
              <a style={{ color: `#b1b6b6`, borderBottom: `1px solid #5a5d62`, }} href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr
      style={{
        clear: `both`, visibility: `hidden`, marginBottom: 0,
      }}
    ></hr>
  </footer>
)

export default Footer;
