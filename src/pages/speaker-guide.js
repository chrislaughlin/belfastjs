import React from 'react';

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Coc = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    
    return (
        <>
            <Layout location={location} title={siteTitle}>
                <Seo title="Belfast JS" />
                <h1 id="belfastjs-speaker-guidelines">BelfastJS Speaker Guidelines</h1>
                <p><em>Last revised November 2018</em></p>
                <h2 id="general">General</h2>
                <ul>
                    <li>The BelfastJS organisers/moderators are here to assist you and provide a comfortable, safe environment for speaking. If there is anything at all you need - before, during or after you give your talk - please reach out to us.</li>
                    <li>If you&#39;d like some practice giving your talk, or want to get feedback on content, presentations etc ahead of time, we would be happy to help, or can put you in touch with various groups and individuals who specialise in talk prep and mentorship.</li>
                    <li>By attending and/or participating in a BelfastJS event, you agree to obey our <a href="/coc">Code of Conduct</a>.</li>
                </ul>
                <h2 id="presentation-setup">Presentation setup</h2>
                <ul>
                    <li>While the host venue will try to accommodate your A/V needs wherever possible, please ensure you have the relevant display cables and adapters for your presentation machine with you.</li>
                    <li>Avoid relying on ChromeCast, Hangouts etc for presentations with advanced graphics and/or interactive elements, as the frame rate will likely suffer.</li>
                    <li>We recommend you record a video of any live demos ahead of time, and have it ready to play back in case your live demo doesn&#39;t go as planned on the night.</li>
                    <li>Wherever possible, we recommend you host and serve your presentations directly from your own machine, and avoid being dependent on the host venue&#39;s network - connectivity issues can (and do) occur.</li>
                    <li>We recommend closing down all other applications and browser tabs when you are presenting.</li>
                    <li>If you normally receive notifications or alerts on your presentation machine, ensure they are muted or disabled, particularly if they are of a private or secure nature.</li>
                </ul>
                <h2 id="accessibility-and-legibility">Accessibility and legibility</h2>
                <ul>
                    <li>Text on slides should be readable from 15-20 feet away. </li>
                    <li>We recommend a font size where no more than 10-12 lines can reasonably fit on screen at once, particularly code examples.</li>
                    <li>If you are live-coding with IDEs or terminals, ensure your font size is zoomed-in accordingly.</li>
                    <li>For longer code examples, we recommend making the snippet scrollable, or broken onto multiple slides.</li>
                    <li>Ensure all critical text in your slides (including syntax highlighting) uses strongly contrasting colours. Not all venues have high-contrast displays or projectors. Some audience members may also have sight issues.</li>
                    <li>When presenting, <strong>please use any microphones provided</strong> and make sure you are speaking clearly into them, so that everyone in the venue can hear you.</li>
                </ul>
                <h2 id="talk-format-and-timing">Talk format and timing</h2>
                <ul>
                    <li>Please ensure you have read the <a href="/coc">BelfastJS Code of Conduct</a> and that your presentation content (visual, textual or otherwise) adheres to it.</li>
                    <li>Help us keep things moving along by having your presentation machine and all other materials ready to go when needed.</li>
                    <li>If you do <em>not</em> wish to do Q&amp;A after your talk, please let us know in advance and we will ensure this is the case on the night.</li>
                </ul>
                <h3 id="for-lightning-talks">For lightning talks</h3>
                <ul>
                    <li>Please respect your fellow speakers by limiting your lightning talk to a maximum of 10 minutes in length, start to finish.</li>
                    <li>We recommend no more than 10-12 slides in a lightning talk presentation.</li>
                    <li>We will signal to you when 5 minutes have expired, and again when you have 1 minute left. We want to hear your talk in full, but moderators will have to cut it short if it goes longer.</li>
                    <li>Feel free to use your own timer, audience-visible or otherwise, to keep you on track.</li>
                    <li>Please time your talk out in advance and make adjustments to ensure you meet the time limit.</li>
                    <li>We will take a maximum of 3 questions at the end of your talk, time permitting.</li>
                </ul>
                <hr />
                <p>If you have questions or concerns about these speaker guidelines, or about BelfastJS in general, please contact the organisers via Twitter at <a href="https://twitter.com/BelfastJS">@belfastjs</a> or on the <a href="https://meetup.com/Belfast-JS">Meetup page</a>.</p>
            </Layout>
        </>
    )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`


export default Coc;
