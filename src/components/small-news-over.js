import React from "react"
import { Link } from "gatsby"
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import Grid from '@material-ui/core/Grid'

const SmallNewsOver = ({ data }) => (
    <Grid item xs={12} sm={6}>
        <div style={{ position: "relative" }}>
            <Link to="post-slug"><img src={'/sampleimage.jpg'} /></Link>
            <div style={{ color: "#fff",position: "absolute", bottom: 0, padding: "10px" }}>
                <Link to="post-slug" style={{ textDecoration: "none", color: "inherit" }}><h3 style={{ fontSize: 16, fontWeight: "normal" }}>Welcome to your new Gatsby site. 0{data}</h3></Link>
                <Link to="post-slug" style={{ textDecoration: "none", color: "inherit" }}><p style={{ fontSize: ".7rem", marginTop: -20 }}><CalendarTodayIcon style={{ fontSize: ".8rem" }} /> February 20, 2020</p></Link>
            </div>
        </div>
    </Grid>
)
export default SmallNewsOver