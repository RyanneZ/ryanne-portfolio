import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
    
      // <div>
            <a href={live} target="_blank" style={{display: 'flex'}}>
               <Card style={{display: 'flex'}} >
                  <CardActionArea>
                     <img component="img" src={image} style={{}}/>
                  </CardActionArea>
               </Card>
            </a >
      // </div>
  
         
       
  
   );
}

export default PortfolioBlock;