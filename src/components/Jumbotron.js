import React, { useState, useEffect } from 'react';
import Twitter from "./Twitter"

export default function Jumbotron(props) {

    const [badgerData, setBadgerData] = useState({});
    const [diggData, setDiggData] = useState({});

    const external = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"></path></svg>;

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/badger-dao?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setBadgerData(data);
            console.log(data);
        });

        fetch("https://api.coingecko.com/api/v3/coins/digg?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setDiggData(data);
            console.log(data);
        });

    },[]);

    return (
        <div className="jumbotron text-white bg-dark row p-5 mb-0">
                    <div className="col-md-4 p-4">
                        <h3 className="mb-5">
                            <img src="/badger-logo.png" alt="badger logo" width="50" className="mr-3"/>
                            Badger
                        </h3>
                        {(badgerData.market_data !== undefined) ?
                        <React.Fragment>
                            <h6 className="mt-4">Badger Price</h6>
                            <p>{badgerData.market_data.current_price.usd} ({badgerData.market_data.price_change_24h_in_currency.usd}%) | {badgerData.market_data.current_price.btc} BTC | {badgerData.market_data.current_price.eth} ETH</p>
                            <h6 className="mt-4">Market Cap</h6>
                            <p>${badgerData.market_data.market_cap.usd} | {badgerData.market_data.market_cap.btc} BTC | {badgerData.market_data.market_cap.eth} ETH</p>
                            <h6 className="mt-4">24 hr Trading Volume</h6>
                            <p className="">${badgerData.market_data.total_volume.usd} | {badgerData.market_data.total_volume.btc} BTC | {badgerData.market_data.total_volume.eth} ETH</p>
                        </React.Fragment>
                        :
                        <p>Loading...</p>
                        }

                        <div className="text-center py-5">
                            <a href="https://www.coingecko.com/en/coins/badger-dao" className="btn btn-warning">
                                Badger on Coingecko
                                {external}
                            </a>
                        </div>
                    </div>
               
                    <div className="col-md-4 p-4">
                    <h3 className="mb-5">
                        <img src="/digg.png" alt="badger logo" width="45" className="mr-3"/>
                        Digg
                    </h3>
                    {(diggData.market_data !== undefined) ?
                    <React.Fragment>
                        <h6 className="mt-4">Badger Price</h6>
                        <p className="">{diggData.market_data.current_price.usd} ({diggData.market_data.price_change_24h_in_currency.usd}%) | {diggData.market_data.current_price.btc} BTC | {diggData.market_data.current_price.eth} ETH</p>
                        <h6 className="mt-4">Market Cap</h6>
                        <p className="">${diggData.market_data.market_cap.usd} | {diggData.market_data.market_cap.btc} BTC | {diggData.market_data.market_cap.eth} ETH</p>
                        <h6 className="mt-4">24 hr Trading Volume</h6>
                        <p className="">${diggData.market_data.total_volume.usd} | {diggData.market_data.total_volume.btc} BTC | {diggData.market_data.total_volume.eth} ETH</p>
                    </React.Fragment>
                    :
                    <p>Loading...</p>
                    }

                    <div className="text-center py-5">
                        <a href="https://www.coingecko.com/en/coins/digg" className="btn btn-warning">
                            Digg on Coingecko
                            {external}
                        </a>
                    </div>
                </div> 
                    <div className="col-md-4 p-4 text-center">
                        <Twitter />
                    </div>
        </div>
    );
}