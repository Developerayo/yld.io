import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Padding } from 'styled-components-spacing'
import { Grid } from 'react-styled-flexboxgrid'

import Layout from '../components/layout'
import SEOText from '../components/Homepage/seoText'
import Companies from '../components/Homepage/companies'
import Blog from '../components/Homepage/blog'
import Events from '../components/Homepage/events'
import Jobs from '../components/Homepage/jobs'
import CaseStudy from '../components/Homepage/caseStudy'
import Specialty from '../components/Homepage/specialty'
import GrayBackground from '../components/GrayBG'

const IndexPage = ({
  data: { contentfulHomepage: content, allContentfulMeetupEvent: events, site }
}) => (
  <Layout>
    <Helmet
      title={`${site.siteMetadata.title}  ${
        content.title ? '- ' + content.title : ''
      } ${content.seoTitle ? '- ' + content.seoTitle : ''} `}
      meta={[{ name: 'description', content: content.seoMetaDescription }]}
    >
      <html lang="en" />
    </Helmet>
    <Grid>
      <Padding bottom={5}>
        <CaseStudy caseStudy={content.featuredCaseStudy} />
      </Padding>
    </Grid>
    <GrayBackground>
      <Grid>
        <Padding top={6} bottom={4}>
          <SEOText text={content.seoText.content[0].content} />
          <Padding bottom={4} />
          <Companies companies={content.companies} />
        </Padding>
      </Grid>
    </GrayBackground>
    <Grid>
      <Padding top={4} bottom={5}>
        <Specialty services={content.services} />
      </Padding>
    </Grid>
    <GrayBackground>
      <Grid>
        <Padding bottom={5}>
          <Events events={events.edges} />
        </Padding>
      </Grid>
    </GrayBackground>
    <Grid>
      <Padding vertical={4}>
        <Blog />
      </Padding>
    </Grid>
    <GrayBackground>
      <Grid>
        <Jobs />
        <Padding bottom={5} />
      </Grid>
    </GrayBackground>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    contentfulHomepage {
      title
      seoTitle
      seoMetaDescription
      featuredCaseStudy {
        title
        slug
        posterImage {
          file {
            url
          }
        }
        posterColor
        body {
          content {
            content {
              value
              nodeType
            }
          }
        }
      }
      seoText {
        content {
          content {
            data {
              uri
            }
            value
            content {
              value
              nodeType
            }
            nodeType
          }
        }
      }
      services {
        id
        title
        slug
        caseStudies {
          title
          slug
          posterColor
          posterImage {
            file {
              url
            }
          }
        }
        introSentence {
          introSentence
        }
        homePageSpecialities {
          id
          slug
          title
          body {
            nodeType
          }
        }
      }
      companies {
        id
        file {
          url
          fileName
        }
      }
    }
    allContentfulMeetupEvent {
      edges {
        node {
          color
          posterImage {
            file {
              url
            }
          }
          homepageFeatured
          id
          eventTitle
          date
          linkToEvent
          blurb {
            blurb
          }
        }
      }
    }
  }
`

export default IndexPage
