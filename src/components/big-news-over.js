import React from "react"
import { Link } from "gatsby"
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import PersonIcon from '@material-ui/icons/Person'

const BigNewsOver = () => (
    <div style={{ position: "relative" }}>
        <Link to="post-slug"><img src={'/sampleimage.jpg'} /></Link>
        <div style={{ color: "#fff",position: "absolute", bottom: 0, padding: "10px" }}>
            {[["English", "english", "darkgreen"], ["News", "news", "darkgreen"], ["Premier League", "premierleague", "darkgreen"]].map(el =>
            <Link style={{ marginRight: 5,background: el[2], borderRadius: 3, color: "white", padding: 5, textDecoration: "none", fontSize: "small" }} to={"/" + el[1]}>
                {el[0]}
            </Link>)}
            <Link to="post-slug" style={{ textDecoration: "none", color: "inherit" }}><h3 style={{ fontSize: 22, fontWeight: "normal", marginTop: 10 }}>Premier League Review | Game Week 14</h3></Link>
            <p style={{ fontSize: ".7rem", marginTop: -20 }}><CalendarTodayIcon style={{ fontSize: ".8rem" }} /> <Link to="post-slug" style={{ textDecoration: "none", color: "inherit" }}>February 20, 2020</Link><PersonIcon style={{ fontSize: ".8rem" }} /> <Link to="author-slug" style={{ textDecoration: "none", color: "inherit" }}>Dawit Tsehaye</Link></p>
        </div>
    </div>
)
export default BigNewsOver