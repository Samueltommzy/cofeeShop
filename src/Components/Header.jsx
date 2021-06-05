import { AppBar, fade, InputBase, Toolbar, Typography,makeStyles, IconButton, Paper, Switch, FormControlLabel} from '@material-ui/core'
import React from 'react'
import {AcUnitRounded, Search,Menu} from "@material-ui/icons";

import { red } from '@material-ui/core/colors';
import classNames from 'classnames';
//use classNames to combine multiple class on an element

const useStyles = makeStyles((theme) => ({
  typographyStyle:{
    flex: 1,
    color: (props)=> props.cool?'white':'red'
  },
  // typographyBackground:{
  //   backgroundColor: (props)=> props.cool?'black':'white',
  //   padding: '3px'
  // },
  iconStyle:{
    cursor: 'pointer',
    marginLeft: '12px',
  },
  root: {
    flexGrow: 1,
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
    padding: theme.spacing(0, 2),
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
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export const Header = (props) => {
  const classes = useStyles(props);
  return (
    <Paper elevation  = "5">
      <AppBar position = "static">
     <Toolbar>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
      >
        <Menu />
      </IconButton>
       <Typography  className = {classNames(classes.typographyStyle,classes.typographyBackground)}>
         Coffee shop
       </Typography>
       <FormControlLabel
        control={
          <Switch
            checked={props.darkMode}
            onChange={()=>props.handleMode(!props.darkMode)}
            name="checkedB"
            color="black"
          />
        }
        label="Light/Dark"
      />
       <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
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
       <AcUnitRounded  className = {classes.iconStyle}/>
     </Toolbar>
   </AppBar>
    </Paper> 
  )
}
