import React from "react"
import { Link } from "gatsby"
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import Grid from '@material-ui/core/Grid'

const SmallNews = ({ data }) => (
    <Grid container>
        <Grid item xs={6}>
            <Link to="post-slug"><img src={'/sampleimage.jpg'} /></Link>
        </Grid>
        <Grid item xs={6}>
            <Link to="post-slug" style={{ textDecoration: "none", color: "inherit" }}><h3 style={{ fontSize: 20, fontWeight: "normal" }}>English. Right. {data}. Title.</h3></Link>
            <Link to="post-slug" style={{ textDecoration: "none" }}><p style={{ fontSize: ".8rem", marginTop: -20, color: "#888888" }}><CalendarTodayIcon style={{ fontSize: ".7rem" }} /> February 20, 2020</p></Link>
        </Grid>
    </Grid>
)
export default SmallNews