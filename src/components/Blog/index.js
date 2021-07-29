import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

function ArticleSmall(props) {
  var image = props.image
  return (
      <article className="small">
        {!!image ?
      <Link to={props.href}>
        <img alt="" src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} />
      </Link>
      : null}
          <main>
            <p className="dach">{props.dach}</p>
            <p className="headline">{props.headline}</p>
            <Link className="more" to={props.href}>Beitrag lesen</Link>
          </main>
      </article>
  )
}

function ArticleLarge(props) {
  var image = props.image
  return (
    <article className="large">
      {!!image ?
      <Link to={props.href}>
        <img alt="" src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} />
      </Link>
      : null}
    <main>
      <p className="dach">{props.dach}</p>
      <p className="headline">{props.headline}</p>
      <p className="lead">{props.excerpt}</p>
      <Link className="more" to={props.href}>Beitrag lesen</Link>
    </main>
  </article>
  )
}

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts)
    return (
      <div className="news top">
            <div className="left">
              {posts && posts.slice(0,1).map(({ node: post}, i ) => (
                  <ArticleLarge
                    key={"post-l-"+i}
                    image={post.frontmatter.cover}
                    dach={post.frontmatter.date}
                    excerpt={post.excerpt}
                    headline={post.frontmatter.title}
                    href={"blog/" + post.frontmatter.slug}
                    />
                ))}
            </div>
            <div className="right">
              {posts && posts.slice(1,6).map(({node: post }, i ) => (
                <ArticleSmall
                  key={"post-s-"+i}
                  image={post.frontmatter.cover}
                  dach={post.frontmatter.date}
                  headline={post.frontmatter.title}
                  href={"blog/" + post.frontmatter.slug}
                />
              ))}
            </div>
        </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "article-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                title
                slug
                templateKey
                date(formatString: "MMMM DD, YYYY")
                cover {
                  childImageSharp {
                    fluid(maxWidth: 900, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
