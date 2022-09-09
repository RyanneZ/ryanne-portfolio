import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import PortfolioInfo from './PortfolioInfo';
import {Box, dividerClasses, Grid, Item} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>

                {info.portfolio.map((project, index) => (
                    <Grid container  key={index} style={{padding: '3rem'}}>
                        <Grid item xs={12} md={6} style={{display: 'flex', padding: '1rem'}}>
                            <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} gradient={info.gradient}/>
                        </Grid>
                        <Grid item xs={12} md={6} style={{display: 'flex', padding: '1rem'}}>
                            <PortfolioInfo image={project.image} live={project.live} source={project.source} title={project.title} description={project.description} technolegies_used={project.technolegies_used} gradient={info.gradient}/>
                        </Grid>
                    
                    </Grid>
                 
                ))}
        </Box>
    );
};


