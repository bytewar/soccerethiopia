import React from "react"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import BigNewsOver from "../components/big-news-over"
import BigNews from "../components/big-news"
import SmallNewsOver from "../components/small-news-over"
import SmallNews from "../components/small-news"
import RecentNews from "../components/recent-news"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container>
      <Grid container item xs={12}>
        <Grid item md={7}>
          <BigNewsOver />
        </Grid>
        <Grid item container md={5} spacing={2} style={{ margin: "auto 0" }}>
          {[1, 2, 3, 4].map(n => 
          <SmallNewsOver data={n} />
          )}
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h3 style={{
                    borderBottom: "2px solid darkgreen",
                    padding: 6,
                    paddingLeft: 0
                  }}><span style={{
                    background: "darkgreen",
                    color: "#fff",
                    fontWeight: "normal",
                    padding: "6px 12px",
                    fontSize: 18
                  }}>English</span></h3>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <BigNews />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    {[1,2,3,4,5,6].map(n => 
                    <Grid item xs={12}>
                      <Paper>
                        <SmallNews data={n} />
                      </Paper>
                    </Grid>)}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={6}>
              <Grid container xs={12} spacing={2}>
                <Grid item xs={12}>
                  <h3 style={{
                    borderBottom: "2px solid darkgreen",
                    padding: 6,
                    paddingLeft: 0
                  }}><span style={{
                    background: "darkgreen",
                    color: "#fff",
                    fontWeight: "normal",
                    padding: "7px 12px",
                    fontSize: 18
                  }}>English</span></h3>
                </Grid>
                <Grid item xs={12}>
                  <BigNews />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {[1,2,3,4,5,6].map(n => 
                    <Grid item xs={12}>
                      <Paper>
                        <SmallNews data={n} />
                      </Paper>
                    </Grid>)}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={6}>
              <Grid container xs={12} spacing={2}>
                <Grid item xs={12}>
                  <h3 style={{
                    borderBottom: "2px solid darkgreen",
                    padding: 6,
                    paddingLeft: 0
                  }}><span style={{
                    background: "darkgreen",
                    color: "#fff",
                    fontWeight: "normal",
                    padding: "7px 12px",
                    fontSize: 18
                  }}>English</span></h3>
                </Grid>
                <Grid item xs={12}>
                  <BigNews />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {[1,2,3,4,5,6].map(n => 
                    <Grid item xs={12}>
                      <Paper>
                        <SmallNews data={n} />
                      </Paper>
                    </Grid>)}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={4}>
          <RecentNews />
          <div style={{ width: `100%`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
