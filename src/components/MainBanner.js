import React from 'react';
import MarineBiology from '../images/MarineBiology.jpg';

function MainBanner() {

    return(
        <div> 
            <div id="ParentBannerContainer">
                <img 
                src={MarineBiology} 
                alt="Main Fish Banner"
                id="MainFishBanner"
                />
            </div>             
        </div>
        
    );
};

export default MainBanner;