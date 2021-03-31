import React from "react";
import VideoCard from "./VideoCard";

export default function Videos(props) {

    const external = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"></path></svg>;

    const officialVideosList = [
        {
            src: "https://i.ytimg.com/vi/CQWGnbPsfTM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCuBc4XyGk30uyXPMexmKYcOuqkA",
            title: "How to Use the Binance Smart Chain Sett Vaults",
            desc: "Learn Badger:https://badger.finance/​ https://badgerdao.medium.com/​ Use Badger: https://app.badger.finance/​ ...",
            url: "https://www.youtube.com/watch?v=CQWGnbPsfTM"
        },

        {
            src: "https://i.ytimg.com/vi/dDLOv_5XWy4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUPk7DIcQM2M3E5PtEAxw7pOr86w",
            title: "Office Hours - Rewards & Emissions - 03.18.21",
            desc: "Learn Badger:https://badger.finance/​ https://badgerdao.medium.com/​ Use Badger: https://app.badger.finance/​ ...",
            url: "https://www.youtube.com/watch?v=dDLOv_5XWy4"
        },

        {
            src: "https://i.ytimg.com/vi/Xldy3BqWonE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARD1bFNVBEpFwnGYHZt_GlCDrzlQ",
            title: "Sett Session: Episode 2",
            desc: "Badger DAO hosted their second Sett Session Friday January 29th, 2021. Learn Badger:https://badger.finance/​ ...",
            url: "https://www.youtube.com/watch?v=Xldy3BqWonE"
        }
    ];

    const officialVideos = officialVideosList.map((v, index)=>{
        return <VideoCard key={index} src={v.src} title={v.title} desc={v.desc} url={v.url} />
    });

    const communityVideosList = [
        {
            src: "https://i.ytimg.com/vi/gh79Knm7zzQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLHdhechkKHpHkUUGUtPa_co8_Xg",
            title: "AMA with Chris Spadafora, Founder of BadgerDAO",
            desc: "Chris Spadafora is the Founder of BadgerDAO, a decentralized protocol that promotes the use of tokenized BTC in DeFi. ...",
            url: "https://www.youtube.com/watch?v=gh79Knm7zzQ"
        },

        {
            src: "https://i.ytimg.com/vi/RaQm49LbP5c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF4edlG5vZglh_r-Qjx-w1NVhkyw",
            title: "The FTX Podcast #52 - Chris Spadafora Founder of Badger DAO",
            desc: "Badger is a decentralized autonomous organization that focuses on building the products and infrastructure necessary​ ...",
            url: "https://www.youtube.com/watch?v=RaQm49LbP5c"
        },

        {
            src: "https://i.ytimg.com/vi/8wXpolSUwRk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkjjJy8_508KENWe5TWLEYBwfC4w",
            title: "Earn On Bitcoin with Badger DAO",
            desc: "In this tutorial, I discuss how to convert your BTC to wBTC and start earning yield using Badger DAO. Process utilizes WBTC ...",
            url: "https://www.youtube.com/watch?v=8wXpolSUwRk"
        }
    ];

    const communityVideos = communityVideosList.map((v, index)=>{
        return <VideoCard key={index} src={v.src} title={v.title} desc={v.desc} url={v.url} />
    });

    return (
        <React.Fragment>
            <div className="row my-4 border-bottom">
                <h5 className="ml-5 col-12">Official Videos</h5>
                <div className="col-12 mt-3">
                    <div className="row px-4">
                        {officialVideos}
                    </div>
                </div>
                <div className="col-12 text-right">
                <a href="https://www.youtube.com/channel/UC5kss_AvIpj1g8H8-SZjQJA" target="_blank" className="btn btn-warning mr-5 mb-5">View More {external}</a>
                </div>
            </div>

            <div className="row my-4 border-bottom">
                <h5 className="ml-5 col-12">Community Videos</h5>
                <div className="col-12 mt-3">
                    <div className="row px-4">
                        {communityVideos}
                    </div>
                </div>
                <div className="col-12 text-right">
                <a href="https://www.youtube.com/results?search_query=badger+dao" target="_blank" className="btn btn-warning mr-5 mb-5">View More {external}</a>
                </div>
            </div>
        </React.Fragment>
    );
}