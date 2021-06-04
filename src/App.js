import logo from './logo.svg';
import './App.css';
import  { Grid, makeStyles } from '@material-ui/core';
import { Header } from './Components/Header';
import { Content } from './Components/Content';
import {grey} from '@material-ui/core/colors';

const useStyles = makeStyles({
  containerStyle:{
    backgroundColor: 'peach'
  }
})
function App() {
  const classes = useStyles();
  console.log('classes',classes)
  return (
   <Grid container direction = "column">
     <Grid item >
       <Header cool ={true}/>
     </Grid>
     <Grid item container className = {classes.containerStyle}>
       <Grid item xs={0} sm = {2}/>
       <Grid item xs = {12} sm ={8}>
        <Content/>
       </Grid>
       <Grid item xs={0} sm = {2}/>
     </Grid>
   </Grid>
  );
}

export default App;
