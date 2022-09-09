import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
    
         <Card style={{padding: '1rem 0 1rem 0'}}>
            <CardMedia
            component="img"
            image={image}
            />
         </Card>
  
   );
}

export default PortfolioBlock;