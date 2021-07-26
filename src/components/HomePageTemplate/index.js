import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Button from "../Button"

import Hero from "../Hero"
import Banner from "../Banner"
import Carousel from "../Carousel"

const HomePageTemplate = (props) => {
  const { hero, banner01, intro, banner02, meta_title, meta_description } = props

  console.log(hero, banner01, intro, banner02)
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <Hero hero={hero} variant="light" />
      <Banner>
      <div className="left">
        {/* {banner01.bannerimage ?
          <img 
            src={!!banner01.bannerimage.childImageSharp ? banner01.bannerimage.childImageSharp.fluid.src : banner01.bannerimage}
            alt=""
          />
        : null} */}
      </div>
      <div className="right white">
        <h2>{banner01.heading}</h2>
        <p className="lead">{banner01.subheading}</p>
        <Button variant="white" to="/contact">{banner01.bannercta}</Button>
      </div>
      </Banner>
      <Carousel data={intro} />
      <Banner>
      <div className="left" style={{paddingTop:40, paddingBottom: 40}}>
        <h1 className="white" style={{textAlign: "right"}}>{banner02.heading}</h1>
      </div>
      <div className="right white" style={{paddingTop:40, paddingBottom: 40}}>
        <Button variant="white" to="/about">{banner02.cta}</Button>
      </div>   
    </Banner>
    </div>
  )
}
HomePageTemplate.propTypes = {
  hero: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    dachzeile: PropTypes.string,
    title: PropTypes.string,
    lead: PropTypes.string,
    cta: PropTypes.string,
  }),
  banner01: PropTypes.shape({
    bannerimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    heading: PropTypes.string,
    subheading: PropTypes.string,
    bannercta: PropTypes.string,
  }),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  banner02: PropTypes.shape({
    heading: PropTypes.string,
    cta: PropTypes.string,
  }),
}

export default HomePageTemplate
