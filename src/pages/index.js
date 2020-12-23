import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
// import TransitionLink from "gatsby-plugin-transition-link"

import Layout from "../components/layout"
import Bio from "../components/bio"
import HomeCard from "../components/homeCard"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const sizes = data.allStrapiSizes.edges

  console.log("sizes", sizes)
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <div className="row">
        <div className="col-6 no-padding landing-content">
          <nav>
            <ul className="nav-wrapper" role="menu">
              <li role="menuitem">
                <Link to={`/`}>
                  <Img
                    fixed={data.logo.childImageSharp.fixed}
                    alt="RGallery Logo"
                    className=""
                  />
                </Link>
              </li>
              <li className="nav-item" role="menuitem">
                <Link to={`/exhibitions`}>Exhibitions</Link>
              </li>
              <li className="nav-item" role="menuitem">
                <Link to={`/artists`}>Artists</Link>
              </li>
              <li className="nav-item" role="menuitem">
                <Link to={`/visit`}>Visit</Link>
              </li>
            </ul>
          </nav>
          <div className="landing-left-content">
            <div className="landing-left-arrow">&lsaquo;</div>
            <h3 className="landing-h3">Current Exhibition</h3>
            <h1 className="landing-h1">Back to Basic</h1>
            <ul className="exhibition-date-duration">
              <li>12 November 2020</li>
              <li className="date-duration-line" />
              <li>22 November 2020</li>
            </ul>
            <div className="divider-lg" />
            <h4>
              The exhibit features the works of emerging artists with burgeoning
              talent in the Filipino contemporary art scene.
            </h4>
            <p className="description-sm">
              The exhibit features the works of emerging artists with burgeoning
              talent in the Filipino contemporary art scene.
            </p>
            <button className="button primary landing-btn">Read more...</button>
          </div>
          {/* <Img fluid={data.landingPhoto.childImageSharp.fluid} /> */}
        </div>
        {/* <div>
          <Img fixed={data.burgerMenu.childImageSharp.fixed} alt="Menu" />
          <nav>
            <ul
              style={{
                textAlign: "right",
              }}
            >
              <li className="nav-item">
                <Img fixed={data.burgerMenu.childImageSharp.fixed} alt="Menu" />
              </li>
            </ul>
          </nav>
        </div> */}
        <div className="col-6 no-padding landing-content">
          <div className="landing-right-arrow">&rsaquo;</div>

          <div className="text-contemporary">
            <Img fixed={data.floatingContemporary.childImageSharp.fixed} />
          </div>
          <Img fluid={data.landingPhoto.childImageSharp.fluid} />
        </div>
      </div>
      {/* <div className="row">
        <div className="col-6">
          <div
            style={{
              padding: "1rem 0",
              textAlign: "center",
              background: "#eee",
            }}
          >
            6
          </div>
        </div>
        <div className="col-6">
          <div
            style={{
              marginTop: "-8rem",
              height: "100%",
            }}
          >
            <Img fluid={data.landingPhoto.childImageSharp.fluid} />
          </div>
        </div>
      </div> */}
      {/* <div>
        <nav>
          <ul
            style={{
              display: "inline-flex",
            }}
          >
            <li>
              <Img
                fixed={data.logo.childImageSharp.fixed}
                alt="RGallery Logo"
                className=""
              />
            </li>
            <li className="nav-item">Home</li>
            <li className="nav-item">Exhibitions</li>
            <li className="nav-item">Artists</li>
            <li className="nav-item">Visit</li>
          </ul>
        </nav>
      </div>

      <nav>
        <ul
          style={{
            textAlign: "right",
          }}
        >
          <li className="nav-item">
            <Img fixed={data.burgerMenu.childImageSharp.fixed} alt="Menu" />
          </li>
        </ul>
      </nav> */}
      {/* <div className="left" />
      <div className="right">
        <Img fluid={data.landingPhoto.childImageSharp.fluid} />
      </div> */}
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    photo: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    landingPhoto: file(relativePath: { eq: "landing/sesami-cid.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "horizontal-transparent.png" }) {
      childImageSharp {
        fixed(height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    burgerMenu: file(relativePath: { eq: "burger-menu.png" }) {
      childImageSharp {
        fixed(height: 17) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    floatingContemporary: file(
      relativePath: { eq: "landing/contemporary-text.png" }
    ) {
      childImageSharp {
        fixed(height: 280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    currentExhibitions: allFile(
      filter: {
        sourceInstanceName: { eq: "exhibitions" }
        extension: { eq: "md" }
      }
      limit: 5
    ) {
      edges {
        node {
          relativeDirectory
          extension
          name
          childMarkdownRemark {
            id
            excerpt(pruneLength: 160)
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allStrapiSizes {
      edges {
        node {
          id
          title
          description
          isActive
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
