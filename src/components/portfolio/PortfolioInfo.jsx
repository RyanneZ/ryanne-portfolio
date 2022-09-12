import React from 'react';
import IconLink from "./IconLink";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';

const logos = {
  'React': "logos:react",
  'Redux': "logos:redux",
  'Rapid API': 'eos-icons:api-outlined',
  'Node.js': 'logos:nodejs-icon',
  'Express.js': 'logos:express',
  'MongoDB': 'logos:mongodb-icon',
  'Python': 'logos:python',
  'Django': 'logos:django-icon',
  'PostgreSQL': 'logos:postgresql',
  'AWS':'logos:aws',
  'JavaScript': 'logos:javascript',
  'Mongoose': 'mdi:alpha-m',
  'Google OAuth': 'akar-icons:google-fill',
  'CSS3': 'vscode-icons:file-type-css',
  'HTML5': 'vscode-icons:file-type-html',
}


function PortfolioInfo(props) {
   const {image, live, source, title, description, technolegies_used, gradient} = props;


  console.log(technolegies_used)
  if (technolegies_used === undefined) return "Loading ..."
  
   return (
      <>
        <Card sx={{ minWidth: 275 }}>
          <CardActionArea>
            <CardContent>
              <Typography  component="div">
                <span  style={{background: gradient, WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', fontSize: '2rem'}}>{title}</span>

                
              </Typography>
              <br />
              <br />
              <br />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {description}
              </Typography>
              <br />
                {technolegies_used.map((tech)=>
                  <Chip  label={tech} variant="outlined" icon={<iconify-icon icon={logos[tech]}></iconify-icon>} style={{ marginRight: '1rem', marginTop: '0.5rem', fontSize: '1rem', textAlign: 'center', paddingLeft: '1rem'}}/>    
                )}
              
              <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'0.5rem'}
                alignItems={'center'} fontSize={'1rem'} py={'2rem'}>
            
                <Button variant="outlined">
                  <iconify-icon icon="akar-icons:link-chain"></iconify-icon>
                  <IconLink link={live} title={'Live Demo'} />
                </Button>
                

                <Button variant="outlined">
                  <iconify-icon icon="akar-icons:github-fill"></iconify-icon>
                  <IconLink link={source} title={'Source Code'} />
                </Button>
              </Box>
        
            </CardContent>
            </CardActionArea>
        </Card>
      </>
   );
}

export default PortfolioInfo;




