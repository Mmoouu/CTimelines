import React from 'react';

const BannerYouTube2022 = () => {

    return (
        <div className="banner banner-style-youtube">
            <div className="video-responsive">
                <iframe 
                src={`https://www.youtube.com/embed/BmtR0OKQnyI`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
            </div>
        </div>
    )
}

export default BannerYouTube2022;