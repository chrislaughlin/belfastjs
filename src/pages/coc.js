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
                <h1 id="belfastjs-code-of-conduct">BelfastJS Code of Conduct</h1>
                <p><em>Last updated: May 2018</em></p>
                <p><a href="https://meetup.com/Belfast-JS">BelfastJS</a> is a JavaScript and web development meetup based in Belfast, which attracts a large contingent of attendees and speakers from across demographics and disciplines.</p>
                <p>All organisers, speakers, sponsors, volunteers and attendees at any BelfastJS event are required to agree with the following code of conduct. Organizers will enforce this code throughout the events.</p>
                <h2 id="the-quick-version">The Quick Version</h2>
                <p><strong>BelfastJS</strong> is dedicated to providing a harassment-free event experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), job role, or technology choices. We do not tolerate harassment of event participants in any form. Sexual language and imagery is not appropriate for any event venue, including talks, workshops, parties, Twitter and other online media. Event participants violating these rules may be sanctioned or expelled from any event at the discretion of the group organisers or venue hosts.</p>
                <h2 id="the-less-quick-version">The Less-Quick Version</h2>
                <p>Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, job role, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.</p>
                <p>Participants asked to stop any harassing behavior are expected to comply immediately.</p>
                <p>Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualized images, activities, or other material. Stall staff and/or venue host staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.</p>
                <p>If a participant engages in harassing behavior, the event organizers may take any action they deem appropriate, including warning the offender and/or expulsion from the event. Repeated or severe occurrences of harassing behaviour may lead the participant to be banned from future events.</p>
                <p>If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a group organiser or venue host immediately. </p>
                <p>Group organisers will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of an event. We value your attendance.</p>
                <p>We expect participants to follow these rules at all event venues and group-related social events.</p>
                <hr />
                <p>If you have questions or concerns about this Code of Conduct, or about BelfastJS in general, please contact the organisers via Twitter at <a href="https://twitter.com/BelfastJS">@belfastjs</a> or on the <a href="https://meetup.com/Belfast-JS">Meetup page</a>.</p>
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
