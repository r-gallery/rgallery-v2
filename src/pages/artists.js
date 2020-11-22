import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ArtistsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Artists"
        keywords={[`artist`, `rgallery`, `artwork`, `contemporary`]}
      />

      <article className="post-content-md page-template no-image">
        <div className="post-content-body">
          <h2 id="grid-system">Represented Artists Bio</h2>
          <hr />
          <div className="row">
            <div className="col-4 text-center">
              <a href="#mori">Mori</a>
            </div>
            <div className="col-4 text-center">
              <a href="#joel-chavez">Joel Chavez</a>
            </div>
            <div className="col-4 text-center">
              <a href="#luke-alarcon">Luke Alarcon</a>
            </div>
            <div className="col-4 text-center">
              <a href="#aldrine-alarcon">Aldrine Alarcon</a>
            </div>
            <div className="col-4 text-center">
              <a href="#didier-alarcon">Didier Alarcon</a>
            </div>
            <div className="col-4 text-center">
              <a href="#renz-guilas">Renz Guilas</a>
            </div>
            <div className="col-4 text-center">
              <a href="#laine-alba">Laine Alba</a>
            </div>
            <div className="col-4 text-center">
              <a href="#macky-tadique">Macky Tadique</a>
            </div>
            <div className="col-4 text-center">
              <a href="#aka-chan">Aka Chan</a>
            </div>
            <div className="col-4 text-center">
              <a href="#rejih-quinia">Rejih Quinia</a>
            </div>
            <div className="col-4 text-center">
              <a href="#thirdy-bustamante">Thirdy Bustamante</a>
            </div>
            <div className="col-4 text-center">
              <a href="#win-castle">Win Castle</a>
            </div>
          </div>

          <hr />
          <div className="row" id="mori">
            <div className="col-5">
              <figure className="kg-card kg-image-card pad-2">
                <Img
                  fluid={data.photo.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>caption here</figcaption>
              </figure>
            </div>
            <div className="col-7">
              <div className="pad-2">
                <h4>Mori</h4>
                <p>
                  Mori Mori is a graphic designer and mixed media artist. She
                  developed her passion for the arts during her formative years
                  where instead of playing outside, crafting art became her
                  niche. Apart from this, she grew up hearing the loud machines
                  rumbling as her mother was a dressmaker while habitually
                  observing her father who was a painter by profession. One of
                  the renowned art geniuses, Basquiat, became her early
                  influences in developing her distinct style. During her
                  undergraduate years, she went on a vocational course
                  specializing in visual arts, and by 2011. She remarkably found
                  a spot at the Petron Arts Competition.
                </p>
                <p>
                  Fueled by her childhood aspirations and encouragement from her
                  colleagues, she got inspiration from her first group
                  exhibition in 2019 to take a step in the contemporary art
                  scene. Most of her paintings were a combination of fabric,
                  threads, photos, painted portraits, prints, and paint with the
                  common subject of voodoo dolls. Her inspiration behind this
                  reflects her childhood introspection in dealing with memories
                  and traumas. The half-masks by iconic personas as can be seen
                  in most of her works open a discussion about the idea of
                  self-image in present society.
                </p>
              </div>
            </div>
          </div>

          <div className="row" id="joel-chavez">
            <div className="col-5">
              <figure className="kg-card kg-image-card pad-2">
                <Img
                  fluid={data.photo.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>caption here</figcaption>
              </figure>
            </div>
            <div className="col-7">
              <div className="pad-2">
                <h4>Joel Chavez</h4>
                <p>
                  Joel Chavez is a contemporary in the field of Realism. His
                  interest in visual arts started when sketching anime figures
                  became his early habit. During his middle school years, he was
                  given a scholarship grant specializing in visual arts. The
                  one-on-one formal training resulted in acquiring more
                  knowledge and passion for arts. Later on, he actively joined
                  art competitions among these is the annual art contest of the
                  Art Association in the Philippines (AAP). Driven by
                  determination and passion to pursue the artistic endeavor, he
                  continually studied under the mentorship of Dr. Mendez while
                  taking Bachelor in Advertising and Public Relations at
                  Polytechnic University of the Philippines (PUP).
                </p>
                <p>
                  It was 2011 when he started making a spot in the contemporary
                  art scene through group exhibitions. His recent solo
                  exhibition in the R Gallery entitled My Novelty tackles life
                  as an interpersonal journey and further strengthens his
                  artistic journey in contemporary art. Most of his works are
                  oil in canvas which resemble a style similar to the
                  Renaissance artists like Michael Angelo and Da Vinci while
                  incorporating an ‘abstract’ element. Aside from the classical
                  artists, some of his biggest influences are the following: CJ
                  Tanedo, Ronald Ventura, Ivan Roxas, Andress Barrioquinto,
                  Anton Mallari, Randalf Dilla, Casey Baugh, and Cesar Santos.
                  His works aim to contemplate humanity in the modern age as
                  represented in machines.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="luke-alarcon">
            <div className="col-5">
              <figure className="kg-card kg-image-card pad-2">
                <Img
                  fluid={data.photo.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>caption here</figcaption>
              </figure>
            </div>
            <div className="col-7">
              <div className="pad-2">
                <h4>Luke Alarcon</h4>
                <p>
                  Luke Alarcon was a child prodigy in the visual arts. Being
                  creative runs into his blood as most of their family members
                  were also inclined with creative production. His fascination
                  with the arts started when he was habitually observing and
                  mimicking his older brothers through sketching and joining art
                  competitions. He is one of the Finalists for the Da Vinci
                  Initiative organized by the Art Renewal Center, Grand Prize
                  Winner of the 2014 University of the East Annual Painting
                  Competition, and Finalist of the 2012 Cocolife Painting
                  Competition. He pursued a professional career in the arts at
                  the early age of thirteen under the mentorship of his brothers
                  who are also prominent artists, and colleagues in the
                  contemporary art scene. Apart from his familial ties, one of
                  his biggest influences growing up are some notable Realists
                  particularly Ronald Ventura, CJ Tanedo, and Ivan Roxas to name
                  a few.
                </p>
                <p>
                  Dealing with his style, he was mesmerized with the works of
                  western Baroque artists particularly Caravaggio and Rembrandt
                  as he was fond of portraits given the sublime emotions behind
                  every facial expression. Most of his works are oil in canvas
                  which can be characterized by their painterly technique,
                  dramatic and almost theatrical lighting while giving a fresh
                  and elevated perspective on looking at the ‘classical’ works.
                  He was known for his unique artistic process wherein he shoots
                  his paintings with neon paints. Behind this was an act of
                  defiance to the academic style of painting. As he continues to
                  unravel himself through visual arts, he is hoping to expand
                  and translate his curiosities through different media.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="aldrine-alarcon">
            <div className="col-5">
              <figure className="kg-card kg-image-card pad-2">
                <Img
                  fluid={data.photo.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>caption here</figcaption>
              </figure>
            </div>
            <div className="col-7">
              <div className="pad-2">
                <h4>Aldrine Alarcon</h4>
                <p>
                  Aldrine Alarcon is an abstract-expressionist and second eldest
                  among the Alarcon brothers. His interest in visual arts was
                  aided by family support and inclination to creative
                  production. During his formative years, art competitions
                  served as one of his motivations in developing his artistry
                  and his style. Among the awards that he received are the
                  following: Third Prize Winner in the University of Santo Tomas
                  Annual Painting Competition (2014) and Grand Prize Winner of
                  the National Shell Art Competition, Calendar Category (in both
                  2011 and 2012). Later on, he had the opportunity to apprentice
                  under Dr. Mendez while juggling an Advertising course.
                </p>
                <p>
                  He started to pursue his artistic career at the age of
                  twenty-three and up until now, he is making limelight in the
                  contemporary art scene. As an environmental advocate, most of
                  his works deal with man’s relationship to nature as well as
                  ecological transition to the modern age. To Aldrine, the
                  environment is an integral measure of one’s wholeness. He
                  fills his canvases with white then lays out an unfinished
                  image of a woman which represents that a person cannot be
                  whole without an environment to shape them. On one hand, the
                  disembodied eyes subtly placed within the canvas reckons
                  allegorical meaning. His contemporary yet established
                  technique was inspired by modernists such as Adam Miller to
                  name a few.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="didier-alarcon">
            <div className="col-5">
              <figure className="kg-card kg-image-card pad-2">
                <Img
                  fluid={data.photo.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>caption here</figcaption>
              </figure>
            </div>
            <div className="col-7">
              <div className="pad-2">
                <h4>Didier Alarcon</h4>
                <p>
                  Didier Alarcon is a realist and third eldest among the Alarcon
                  brothers. Art is truly part of their family tradition and with
                  this, he was naturally reckoned with in the art industry.
                  During his early phase as an artist, he was an amateur to all
                  art competitions. Among the awards that he received from his
                  list of accolades are the following: Grand Prize Winner 44th
                  of the National Shell Art Competition and Semi-Finalist of the
                  45th National Shell Art Competition. By 2010-2011, he was one
                  of the talented artists who were allowed to have formal
                  training in visual arts under Dr. Mendez. Through Big and
                  Small Gallery, his artistry was further developed by studying
                  different artistic styles varying from classical, realism,
                  social realism up until abstract.
                </p>
                <p>
                  As a prolific visual storyteller, his reverence to CJ Tanedo,
                  Welbart Slowhand, Ivan Roxas, Ronald Ventura, and Andress
                  Barioquinto was translated into his works. Most of his works
                  are made up of oil in canvas which deals with the dualities of
                  meaning as executed through semantics and illumination. His
                  eccentric and aloft take on lights highlight how human in many
                  intricacies, cope with challenges and how it can exude hope.
                  Nevertheless, the artist himself has created a safe space in
                  interpreting the said concept to either positive or negative.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="renz-guilas">
            <div className="col-5">
              <figure className="kg-card kg-image-card pad-2">
                <Img
                  fluid={data.photo.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>caption here</figcaption>
              </figure>
            </div>
            <div className="col-7">
              <div className="pad-2">
                <h4>Renz Guilas</h4>
                <p>
                  Renz Guilas is a self-taught portraitist. His enthusiasm for
                  visual arts started through the influence of his dad. In his
                  spare time, he enjoyed sketching anime and cartoons up until
                  he attempted to venture into portraits. Later on, his
                  acquaintance with professional artists (particularly Alarcon
                  brothers, Joel Chavez, and Pong Bayog) during his
                  undergraduate years opened new doors to the contemporary art
                  scene. Ever since, he has continually participated in group
                  exhibits. His recent solo exhibit in 2019 at R Gallery
                  entitled, <i>If Only</i> had earned his new way for more
                  successful shows. Most of his works convey the creative
                  process behind as translated in seemingly ‘unfinished’ yet
                  intentional amalgamation of sketch and painting. Looking at
                  his works enables the viewers to maneuver the negative spaces
                  and configuration of narratives for deeper art appreciation.
                  Coming from a portraitist perspective, his fascination with
                  the human anatomy and sublime facial expression became his
                  subject for visual studies.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="laine-alba">
            <div className="col-5">
              <figure className="kg-card kg-image-card pad-2">
                <Img
                  fluid={data.photo.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>caption here</figcaption>
              </figure>
            </div>
            <div className="col-7">
              <div className="pad-2">
                <h4>Laine Alba</h4>
                <p>
                  Laine Alba is a post-impressionist and one of the rising women
                  artists in the Filipino contemporary scene. Ever since as a
                  child, her visual storytelling skills became her fuel in
                  winning on- the- spot poster making contests with the support
                  of her mother. Among the notable awards that she received are
                  the following: Second Runner-up in Bureau of Fire Protection
                  Art Photography competition (2015) and Boardwalk T-Shirt
                  design (2018). Dealing with her style, the works of Pablo
                  Picasso, Ang Kyokok, and Seiichi Terazono became her biggest
                  influences. As a self-taught artist, juggling her passion for
                  visual arts while taking up Bachelor of Arts in Advertising
                  and Public Relations at Polytechnic University in the
                  Philippines became her common ground in developing her visual
                  branding.{" "}
                </p>
                <p>
                  As she continues to thrive in the contemporary art scene, her
                  recent three-(wo)man show together with Aka Chan and Mori is a
                  manifestation of women empowerment and recognition in the
                  field of the male-dominated art scene. Most of her works are
                  oil on canvas which aims to portray the truth, be it beauty
                  and sadness. Her subjects vary from iconic personas to common
                  people and were characterized by their misconfigured, and
                  vibrant portraits. The intentional flatness in most of her
                  background alludes intention to the central subject of the
                  painting. Successful combination of raw and painterly
                  technique as the basis for post-impressionism as well as the
                  bold and edgy brushstrokes of cubism have lately attracted
                  considerable attention in both local and international art
                  scenes.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="macky-tadique">
            <div className="col-5">
              <figure className="kg-card kg-image-card pad-2">
                <Img
                  fluid={data.photo.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>caption here</figcaption>
              </figure>
            </div>
            <div className="col-7">
              <div className="pad-2">
                <h4>Macky Tadique</h4>
                <p>
                  Macky Tadique is a self-taught artist and portraitist. Slowly
                  but surely, his passion for visual arts started in middle
                  school years where he devoted most of his time to studying
                  portraiture and sculpture. Being able to capture the original
                  resemblance of his models became one of his stepping stones in
                  mastering his craft. Back then, his main medium was primarily
                  charcoal yet later on he learned to use acrylic for his
                  portraits. Taking a leap of faith and determination in making
                  it into the contemporary art scene, his professional career as
                  an artist flourished within a short period.
                </p>
                <p>
                  In 2019, he was allowed to exhibit his works among the rising
                  contemporary art galleries in the metro such as R Gallery to
                  name a few. His recent exhibition was entitled Alter Ego in
                  which he showcased modern re-interpretation of iconic
                  classical paintings. Comparing his past hyperrealist to his
                  present abstracted depiction of the human image, it conveys
                  deviation from the academic style of painting. Most of his
                  works are characterized as flat, vibrant, and emphasize the
                  curve of contour similarly to the style of Henri Matisse. The
                  absence of facial features in most of his works open for
                  further interpretation and enables the viewer to focus on the
                  formal qualities of the painting. The repetition among his
                  subjects shares a resemblance with Andy Warhol. Appropriating
                  the pop art style in his portraits enables him to navigate the
                  different contours in modern portraiture.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="aka-chan">
            <div className="col-5">
              <figure className="kg-card kg-image-card pad-2">
                <Img
                  fluid={data.photo.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>caption here</figcaption>
              </figure>
            </div>
            <div className="col-7">
              <div className="pad-2">
                <h4>Aka Chan</h4>
                <p>
                  Aka Chan is a rising Filipino woman artist in the field of
                  appropriation art. Her present creative branding as aka chan
                  (coming from a Japanese term which means ‘baby’) traverses her
                  nostalgia of the past. Growing up, she enjoyed participating
                  in art competitions mainly to channel her musings in art. She
                  took a short detour by studying Bachelor of Science in
                  Information Technology at AMA. Later on, by continuous
                  encouragement from her artist friends, she took the courage to
                  return to her first love --- painting. Since then, she
                  actively participated in group exhibitions and recently made a
                  spot in the contemporary art scene with her solo show
                  entitled, Confection at the R Gallery.{" "}
                </p>
                <p>
                  Most of her works are acrylic on canvas and by appropriation,
                  she aims to recontextualize the image’s original meaning. To
                  ‘appropriate’ is to take possession of something.
                  Appropriation artists just like her deliberately copy images
                  to take possession of them in their art. This contemporary
                  artistic approach (which was developed in the era of Campbell
                  can soup of Andy Warhol) does stir up controversy because some
                  people view appropriation as unoriginal of theft. Most of her
                  subjects vary from iconic cartoon characters and famous
                  paintings with a hint of baby pink as her background. This
                  seem-like overrated yet profound concept was based on her
                  experience living in Japan.{" "}
                </p>
                <p>
                  Her fascination with the delicate shade of pink flowers
                  produced by cherry blossom trees and exposure to Japanese pop
                  art was her early influence in dealing with her distinct
                  style. Aside from that, using ‘homophones’ as part of her
                  visual representation enables her to explore the semantics of
                  visual arts.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="rejih-quinia">
            <div className="col-5">
              <figure className="kg-card kg-image-card pad-2">
                <Img
                  fluid={data.photo.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>caption here</figcaption>
              </figure>
            </div>
            <div className="col-7">
              <div className="pad-2">
                <h4>Rejih Quinia</h4>
                <p>
                  Rejih Quinia is a self-taught abstract artist. His interest in
                  visual arts started upon observing his cousin, Joel Chavez who
                  is also a professional painter. During his formative years,
                  portraiture using a medium of charcoal served as his common
                  ground in mastering his craft. Later on, he studied different
                  mediums and actively participated in group exhibitions with
                  the help of his colleagues.{" "}
                </p>
                <p>
                  His recent exhibitions around the metro particularly at Arte
                  Batena and R Gallery hone him to make a statement in the
                  contemporary art scene. At the time when he is still starting
                  his professional career in the arts, he revered Western
                  geniuses such as Rembrandt, Vermeer, Caravaggio, and Da Vinci
                  to name a few. Most of his works used ‘impasto’, a technique
                  in which paint is laid on an area of the surface in very thick
                  layers. When dry, impasto provides depth and texture wherein
                  the paint appears to be coming out of the canvas. One of the
                  challenges in dealing with his style is about
                  recontextualizing the classical portraits into misconfigured
                  visual imagery. For him, it's his way to navigate the
                  different possibilities not restricted only to a particular
                  style.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="thirdy-bustamante">
            <div className="col-5">
              <figure className="kg-card kg-image-card pad-2">
                <Img
                  fluid={data.photo.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>caption here</figcaption>
              </figure>
            </div>
            <div className="col-7">
              <div className="pad-2">
                <h4>Thirdy Bustamante</h4>
                <p>
                  Thirdy Bustamante was a self-taught surrealist. His early
                  experience with visual arts started during his formative
                  period wherein drawing anime figures became his habit. With
                  the influence and heart-warming support from his family, it
                  was here that he realized that he wanted to pursue this
                  artistic field of career. In his middle school years, he went
                  on to study through practical experience and learning through
                  trial and error. He obtained a degree in Bachelor of Arts in
                  Advertising and Public Relations at the Polytechnic University
                  of the Philippines while being an artist scholar at PUP Guhit
                  Sudlungan. It was here that he further expanded his knowledge
                  by making backdrops and props for university theatre plays.
                  Apart from this, he was able to have formal training under Dr.
                  Mendez and by 2011 new doors were opened for him. Among his
                  early influences as a professional artist are the following:
                  Ronald Ventura, Rembrandt, Dante Rossetti Guevarra, Fabiano
                  Millari, CJ Tanedo, and Ivan Roxas. Since then he actively
                  participated in group exhibitions and it was recently when he
                  had his solo show entitled, “Rabbit Hole”.{" "}
                </p>
                <p>
                  Most of his works are made up of oil on canvas which resembles
                  a surrealist style at one glance. His portraits can be
                  described as morbid, bold, and unconventional which composes
                  of the human skeletal structure. The death art images which
                  are represented in most of his works are born out of these
                  uncertainties and the deep desire to understand the full
                  circle of life. These are created concurrently as reminders
                  and celebrators of life, which carry spells to a better
                  passing and understanding of the other side. Much more than
                  just paintings full of skulls, decaying flowers, and dark
                  creators, death art images are decisive forms that explain how
                  each period of human history and each culture perceived
                  death—this inevitable presence and the end which awaits us
                  all. Thirdy Bustamante is one of the emerging artist geniuses
                  in the contemporary scene which outrageously comment on
                  present social issues on alarming suicide rates among
                  teenagers.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="win-castle">
            <div className="col-5">
              <figure className="kg-card kg-image-card pad-2">
                <Img
                  fluid={data.photo.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>caption here</figcaption>
              </figure>
            </div>
            <div className="col-7">
              <div className="pad-2">
                <h4>Win Castle</h4>
                <p>
                  A self-taught portraitist, Win Castle’s. Win Castle’s interest
                  in portraiture started during his formative years when
                  mimicking cartoon characters was one of his habits. Later on,
                  he was introduced to human anatomy through anime characters
                  and then gradually shifted to hyper-realistic portraits.
                  Charcoal painting became his common ground in developing and
                  mastering his craft. During his undergraduate years, he
                  decided to take a Bachelor of Fine Arts at the University of
                  the East. Eventually, he shifted to practical experience by
                  working as a professional portraitist at the Horizon Plaza
                  back then. He believes that being an artist is something that
                  one is born to do and not necessarily learned at school. By
                  2019 when he was allowed to have a 2 man show with Renz Aguila
                  at the R Gallery. Coming from a realist background, his
                  deviation to the academic style of portraiture became his
                  established style. Most of his works are made up of flat
                  inanimate elements which give a surrealist impression the
                  first glance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    photo: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ArtistsPage location={props.location} data={data} {...props} />
    )}
  />
)
