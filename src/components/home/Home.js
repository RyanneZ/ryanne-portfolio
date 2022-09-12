import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self1.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box, dividerClasses} from "@mui/material";
import {info} from "../../info/Info";
import PDF from '../../documents/resume.pdf'

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box style={{marginLeft: '4rem', marginTop:'4.5rem'}}>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '1.5rem', md: '2rem'}} className='contact-box'>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} style={{display: 'flex'}}/>
               ))}
               {/* <div className='contact'>
                  <a href = 'https://github.com/RyanneZ/' target = "_blank" ><iconify-icon icon="ion:logo-github"></iconify-icon></a>
                  <p  style={{fontSize: '0.7rem'}}>Github</p>
               </div>
               <div>
                  <a href = "https://www.linkedin.com/in/ryannezhuo/" target = "_blank" ><iconify-icon icon="akar-icons:linkedin-box-fill"></iconify-icon></a>
                  <p  style={{fontSize: '0.7rem'}}>Linkedin</p>
               </div>
               <div>
                  <a href = {PDF} target = "_blank" ><iconify-icon icon="ant-design:file-pdf-filled"></iconify-icon></a>
                  <p  style={{fontSize: '0.7rem'}}>Resume</p>
               </div>
               <div>
                  <a href="mailto:ryannezhuo@gmail.com" ><iconify-icon icon="ic:baseline-email"></iconify-icon></a>
                  <p style={{fontSize: '0.7rem'}}>Email Me</p>
               </div> */}
            </Box>
         </Box>
      </Box>
   )
}