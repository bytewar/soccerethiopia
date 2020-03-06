import React from "react"
import { Link } from "gatsby"
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import PersonIcon from '@material-ui/icons/Person'
import Paper from '@material-ui/core/Paper'


const BigNews = () => (
  <Paper>
    <Link to="post-slug"><img src={'/sampleimage.jpg'} /></Link>
    <div style={{ padding: "15px", marginTop: -30 }}>
      {[["English", "english", "darkgreen"], ["News", "news", "darkgreen"], ["Premier League", "premierleague", "darkgreen"]].map(el =>
      <Link style={{ marginRight: 5,background: el[2], borderRadius: 3, color: "white", padding: 5, textDecoration: "none", fontSize: "small" }} to={"/" + el[1]}>
        {el[0]}
      </Link>)}
      <Link to="post-slug" style={{ textDecoration: "none", color: "inherit" }}><h3 style={{ fontSize: 22, fontWeight: "normal", marginTop: 10 }}>Premier League Review | Game Week 14</h3></Link>
      <p style={{ fontSize: ".7rem", marginTop: -20, color: "#888888" }}><CalendarTodayIcon style={{ fontSize: ".8rem" }} /> <Link to="post-slug" style={{ textDecoration: "none", color: "inherit" }}>February 20, 2020</Link>   <PersonIcon style={{ fontSize: ".8rem" }} /> <Link to="author-slug" style={{ textDecoration: "none", color: "inherit" }}>Dawit Tsehaye</Link></p>
      <p style={{ marginTop: -16}}>With the first round set to be concluded by this week, the 14th round of fixtures saw table toppers Kidus</p>
    </div>
  </Paper>
)

export default BigNews