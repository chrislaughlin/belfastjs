import React from 'react';
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AskQuestion from '../components/liveQuestions/askQuestion';
import QuestionsList from '../components/liveQuestions/questionsList';

const Questions = ({ data, location }) => {
    const siteTitle = data?.site?.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Belfast JS" />
            <AskQuestion />
            <QuestionsList />
        </Layout>
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

export default Questions;