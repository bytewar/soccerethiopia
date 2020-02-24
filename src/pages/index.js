import React from "react"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import PersonIcon from '@material-ui/icons/Person'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container>
      <Grid container item xs={12}>
        <Grid item md={7}>
          <div style={{ position: "relative" }}>
            <img src={'/sampleimage.jpg'} />
            <div style={{ color: "#fff",position: "absolute", bottom: 0, padding: "10px" }}>
            {[["English", "english", "darkgreen"], ["News", "news", "darkgreen"], ["Premier League", "premierleague", "darkgreen"]].map(el =>
                        <Link style={{ marginRight: 5,background: el[2], borderRadius: 3, color: "white", padding: 5, textDecoration: "none", fontSize: "small" }} to={"/" + el[1]}>
                          {el[0]}
                        </Link>)}
                      <h3 style={{ fontSize: 22, fontWeight: "normal", marginTop: 10 }}>Premier League Review | Game Week 14</h3>
                      <p style={{ fontSize: ".8rem", marginTop: -20 }}><CalendarTodayIcon style={{ fontSize: ".8rem" }} /> February 20, 2020   <PersonIcon style={{ fontSize: ".8rem" }} /> Dawit Tsehaye</p>
            </div>
          </div>
        </Grid>
        <Grid item container md={5}>
          {[1, 2, 3, 4].map(n => <Grid item xs={12} sm={6}>
            <div style={{ position: "relative" }}>
              <img src={'/sampleimage.jpg'} />
              <div style={{ color: "#fff",position: "absolute", bottom: 0, padding: "10px" }}>
                <h3 style={{ fontSize: 20, fontWeight: "normal" }}>Welcome to your new Gatsby site. 0{n}</h3>
                <p style={{ fontSize: ".8rem", marginTop: -20 }}><CalendarTodayIcon style={{ fontSize: ".8rem" }} /> February 20, 2020   <PersonIcon style={{ fontSize: ".8rem" }} /> Dawit Tsehaye</p>
              </div>
            </div>
          </Grid>)}
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item md={9}>
          <Grid container style={{ margin: 10 }}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <h3><span>English</span></h3>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper>
                    <img src={'/sampleimage.jpg'} />
                    <div style={{ padding: "15px", marginTop: -30 }}>
                      {[["English", "english", "darkgreen"], ["News", "news", "darkgreen"], ["Premier League", "premierleague", "darkgreen"]].map(el =>
                        <Link style={{ marginRight: 5,background: el[2], borderRadius: 3, color: "white", padding: 5, textDecoration: "none", fontSize: "small" }} to={"/" + el[1]}>
                          {el[0]}
                        </Link>)}
                      <h3 style={{ fontSize: 22, fontWeight: "normal", marginTop: 10 }}>Premier League Review | Game Week 14</h3>
                      <p style={{ fontSize: ".8rem", marginTop: -20, color: "#888888" }}><CalendarTodayIcon style={{ fontSize: ".8rem" }} /> February 20, 2020   <PersonIcon style={{ fontSize: ".8rem" }} /> Dawit Tsehaye</p>
                      <p style={{ marginTop: -16}}>With the first round set to be concluded by this week, the 14th round of fixtures saw table toppers Kidus</p>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container>
                    {[1,2,3,4,5,6].map(n => <Grid item xs={12}>
                      <Paper>
                        <Grid container>
                          <Grid item xs={6}>
                            <img src={'/sampleimage.jpg'} />
                          </Grid>
                          <Grid item xs={6}>
                            <h3 style={{ fontSize: 20, fontWeight: "normal" }}>English. Right. {n}. Title.</h3>
                            <p style={{ fontSize: ".8rem", marginTop: -20, color: "#888888" }}><CalendarTodayIcon style={{ fontSize: ".8rem" }} /> February 20, 2020   <PersonIcon style={{ fontSize: ".8rem" }} /> Dawit Tsehaye</p>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>)}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={6}>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  top and so on and so forth
                </Grid>
                <Grid item xs={12}>
                  second and so on ad so forth
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={6}>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  top and so on and so forth
                </Grid>
                <Grid item xs={12}>
                  second and so on ad so forth
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={3}>
          <div style={{ width: `100%`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
