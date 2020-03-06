import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import Grid from '@material-ui/core/Grid'

import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: `#232323`,
    color: `white`,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar style={{ margin: "auto 0px" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <HomeIcon />
          </IconButton>
          <Grid container>
            <Grid item xs={12} md><Link className={classes.link} to="/">መነሻ ገፅ</Link></Grid>
            <Grid item xs={12} md><Link className={classes.link} to="/football/category/news-2">ዜናዎች</Link></Grid>
            <Grid item xs={12} md><Link className={classes.link} to="/competitions">ውድድሮች</Link></Grid>
              {/* <ul class="sub-menu">
                <Link to className={classes.link}="/ethpl-2012">ፕሪምየር ሊግ</Link>
                <Link to className={classes.link}="/eth-higher-league-2012">ከፍተኛ ሊግ</Link>
                <Link to className={classes.link}="/eff-league-one-2012">አንደኛ ሊግ</Link>
                <Link to className={classes.link}="/wpl-2012">ሴቶች ፕሪምየር ሊግ</Link>
              </ul> */}
            <Grid item xs={12} md><Link className={classes.link} to="/football/category/news-2/live-score">ቀጥታ</Link></Grid>
            <Grid item xs={12} md><Link className={classes.link} to="/football/category/national-team/the-walias">ዋልያዎቹ</Link></Grid>
            <Grid item xs={12} md><Link className={classes.link} to="/football/category/womens-football">ሴቶች</Link></Grid>
            <Grid item xs={12} md><Link className={classes.link} to="/football/category/youth-football">ወጣቶች</Link></Grid>
            <Grid item xs={12} md><Link className={classes.link} to="/football/category/news-2/players-abroad">ኢትዮጵያዊያን በውጭ</Link></Grid>
            <Grid item xs={12} md><Link className={classes.link} to="/football/category/africa">አፍሪካ</Link></Grid>
            <Grid item xs={12} md><Link className={classes.link} to="/football/category/english">English</Link></Grid>
          </Grid>
          {/* {[{name: "Setoch League", slug: "football/setochleague"}].map(el => <Link to={el.slug}>{el.name}</Link>)} */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
