import React from "react"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const PageTemplate = () => (
  <Grid container>
    <Grid container item xs={12} md={9}>
      <Grid container item xs={12}>
        <Paper>
          Top
        </Paper>
      </Grid>
      <Grid container item xs={6}>
        <Grid item xs={12}>
          <Paper>
            one
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            three
          </Paper>
        </Grid>
      </Grid>
      <Grid container item xs={6}>
        <Grid item xs={12}>
          <Paper>
            two
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            four
          </Paper>
        </Grid>
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
