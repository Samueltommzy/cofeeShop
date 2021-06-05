import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import  { Grid, makeStyles,ThemeProvider,createMuiTheme,Paper } from '@material-ui/core';
import { Header } from './Components/Header';
import { Content } from './Components/Content';
import {grey} from '@material-ui/core/colors';

const useStyles = makeStyles({
  containerStyle:{
    // backgroundColor: 'peach'
  }
})
function App() {
  const classes = useStyles();
  const [darkMode,setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette:{
      type:darkMode?'dark':'light'
    }
  })

  return (
    <ThemeProvider theme = {theme}>
      <Paper>
      <Grid container direction = "column">
     <Grid item >
       <Header cool ={true} darkMode = {darkMode} handleMode = {(mode)=>setDarkMode(mode)}/>
     </Grid>
     <Grid item container className = {classes.containerStyle}>
       <Grid item xs={0} sm = {2}/>
       <Grid item xs = {12} sm ={8}>
        <Content/>
       </Grid>
       <Grid item xs={0} sm = {2}/>
     </Grid>
   </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
