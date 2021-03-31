import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function Twitter(props) {

    return (
        <div className="centerContent smallTimeline">
            <div className="selfCenter spaceBetween standardWidth">
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="BadgerDAO"
                noHeader
                 noFooter
                options={{height: 400}}
                />
            </div>
            <div className="mt-4">
                <TwitterFollowButton
                    screenName='BadgerDAO'
                    options={{size: 'large'}} 
                />
            </div>
        </div>

    );
}