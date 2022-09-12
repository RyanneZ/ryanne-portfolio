import { dividerClasses } from '@mui/material';
import React from 'react';

function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <div>
            <a target="_blank" aria-label={label}
            rel="noopener noreferrer" href={link}>
                <iconify-icon icon={icon}></iconify-icon>
            </a>
            {/* <p style={{fontSize: '0.7rem'}}>{label}</p> */}
        </div>
       
    );
}

export default SocialIcon;