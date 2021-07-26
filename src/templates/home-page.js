import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = (props) => {
  const { data: { markdownRemark: { frontmatter: { hero, banner01, intro, banner02, meta_title, meta_description } } } } = props

  return (
    <Layout>
      <HomePageTemplate
        hero={hero}
        banner01={banner01}
        intro={intro}
        banner02={banner02}
        meta_title={meta_title}
        meta_description={meta_description}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        hero {
          dachzeile
          title
          lead
          cta
        }
        banner01 {
          heading
          subheading
          bannercta
        }
        banner02 {
          heading
          cta
        }
        intro {
          blurbs {

            text
          }
          heading
          description
        }
        meta_title
        meta_description
      }
    }
  }
`
