import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} title={siteTitle}>
  //       <Seo title="All posts" />
  //       <Bio />
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )
  // }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      {/* <Bio /> */}
      <p>
      We are a group of passionate developers, designers, students, hobbyists and other curious people based in Belfast, Northern Ireland. We usually have a meetup every other month, where we have talks, presentations and discussions on JavaScript and Web development in general.
      </p>
      <p>
      We meet at several regular venues around the City centre area. We cover JS and web dev fundamentals, frameworks, architecture, culture, tooling, browser internals, performance, UX, creative coding, game dev, and more.
      </p>
      <p>
      Our talk formats are a mixture of 'full length' talks (20-30 mins in length) and 'lightning talks' (5-10 mins), and we try to provide a mix of the two at every event. Occasionally we run an entire 'lightning round' session comprised solely of lightning talks. We are flexible in our approach - whatever works! Q&A is normally held after each talk, though this is at the discretion of the speaker.
      </p>
      <p>
      Whether you're a grizzled veteran, developing your skills, new to the industry, a hobbyist, student, looking for a career change, or just interested in general, you'll find something worth attending for - all within a friendly, relaxed and diverse group of people.
      </p>
      <p>
      Join us - all experience levels welcome! We are also always looking for new speakers, so if you fancy giving it a go, tell us!
      </p>
      <p>
      Follow us on <a href="https://twitter.com/BelfastJS">Twitter</a> and hit us up with questions or requests to talk / topics you'd like to see covered!
      </p>
      {/* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
