import { Grid } from '@material-ui/core'
import React from 'react'
import { CoffeeCard } from './CoffeeCard'
import contents from '../data';

export const Content = () => {
  return (
    <div>
      <Grid container spacing = {2}>
        <Grid item xs = {12} sm = {4} >
          <CoffeeCard 
            title ="Doing a sample project" 
            subTitle = "£50.00"
            imgSrc = "https://m.media-amazon.com/images/I/91CRALQo7aL._AC_UL320_.jpg"
            description = "Just doing some testing"
          />

        </Grid>  
        <Grid item xs = {12} sm = {4} >
          <CoffeeCard 
            title ="Doing a sample project" 
            subTitle = "£50.00"
            imgSrc = "https://images-na.ssl-images-amazon.com/images/I/71xv2DqRD%2BL._AC_SL1500_.jpg"
            description = "Just doing some testing"
          />

        </Grid>  
        <Grid item xs = {12} sm = {4} >
          <CoffeeCard 
            title ="Doing a sample project" 
            subTitle = "£50.00"
            imgSrc = "https://m.media-amazon.com/images/I/91CRALQo7aL._AC_UL320_.jpg"
            description = "Just doing some testing"
          />

        </Grid>  
        <Grid item xs = {12} sm = {4} >
          <CoffeeCard 
            title ="Doing a sample project" 
            subTitle = "£50.00"
            imgSrc = "https://m.media-amazon.com/images/I/81WaCld7ASL._AC_SX679_.jpg"
            description = "Just doing some testing"
          />

        </Grid>  
        <Grid item xs = {12} sm = {4} >
          <CoffeeCard 
            title ="Doing a sample project" 
            subTitle = "£50.00"
            imgSrc = "https://m.media-amazon.com/images/I/91CRALQo7aL._AC_UL320_.jpg"
            description = "Just doing some testing"
          />
        </Grid> 
        {
            contents && contents.map(content=>
              <Grid item xs = {12} sm = {4}>
                <CoffeeCard
                  title = {content.title}
                  subTitle = {content.price}
                  imgSrc = {content.imageUrl}
                  description = {content.description}
                  avatarSrc = {content.avatarUrl}
                />
              </Grid>
            )
          } 
      </Grid>
      
    </div>
    
  )
}
