import {discord, twitter, youtube, telegram, medium, discourse, github} from "./Icons"

export default function Social(props) {

    return (
        <div className="row social mb-5">
            <span className="">
                <a href="https://discord.com/invite/xSPFHHS" className="btn" target="_blank">{discord}Discord</a>
            </span>
            
            <span className="">
                <a href="https://twitter.com/BadgerDAO" className="btn" target="_blank">{twitter}Twitter</a>
            </span>
            
            <span className="">
                <a href="https://www.youtube.com/channel/UC5kss_AvIpj1g8H8-SZjQJA" className="btn" target="_blank">{youtube}Youtube</a>
            </span>
            
            <span className="">
                <a href="https://t.me/badgerdao" className="btn" target="_blank">{telegram}Telegram</a>
            </span>

            <span className="">
                <a href="https://badgerdao.medium.com/" className="btn" target="_blank">{medium}Medium</a>
            </span>

            <span className="">
                <a href="https://forum.badger.finance/" className="btn" target="_blank">{discourse}Forum</a>
            </span>
            
            <span className="">
                <a href="https://github.com/Badger-Finance" className="btn" target="_blank">{github}Github</a>
            </span>
        </div>

    );
}