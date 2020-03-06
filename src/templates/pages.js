import React from "react"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import BigNews from '../components/big-news'

const PageTemplate = () => (
  <Grid container>
    <Grid container item xs={12} md={9}>
      <Grid container item xs={12} spacing={2}>
        {/* <Paper> */}
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
          <Grid item xs={12}>
            <BigNews />
          </Grid>
        {/* </Paper>
      </Grid>
      <Grid container item xs={6}>
        <Grid item xs={12}>
          <Paper> */}
            <Grid item xs={12} sm={6}>
              <BigNews />
            </Grid>
          {/* </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper> */}
            <Grid item xs={12} sm={6}>
              <BigNews />
            </Grid>
          {/* </Paper>
        </Grid>
      </Grid>
      <Grid container item xs={6}>
        <Grid item xs={12}>
          <Paper> */}
            <Grid item xs={12} sm={6}>
              <BigNews />
            </Grid>
          {/* </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper> */}
            <Grid item xs={12} sm={6}>
              <BigNews />
            </Grid>
          {/* </Paper> */}
        {/* </Grid> */}
      </Grid>
    </Grid>
    <Grid container item xs={12} md={3}>
      <div style={{ width: `100%`, marginBottom: `1.45rem` }}>
        Right
      </div>
    </Grid>
  </Grid>
)

export default PageTemplate
