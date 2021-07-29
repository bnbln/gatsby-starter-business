import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/HomePageTemplate'

const HomePagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  return (
    <HomePageTemplate
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      hero={entry.hero || {image: getAsset(entry.image)}}
      banner01={entry.banner01 || {image: getAsset(entry.image)}}
      intro={entry.intro}
      banner02={entry.banner02}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
