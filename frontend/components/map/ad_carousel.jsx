import React from "react";

const CAROUSEL_CONTENTS = [
  {
    title: 'Eat from this restaurant!',
    description: 'Some of the best eats in town!'
  },
  {
    title: 'Visit my GitHub!',
    description: 'Creator: Jonathan Wong',
    link: 'https://github.com/JonJWong',
    imgUrl: 'https://jwong-eats-seeds.s3.amazonaws.com/github.png'
  },
  {
    title: 'Bunny Cafe',
    description: 'Bunny cafe is an example of a user-created restaurant, featuring our bunny, Kuro',
  },
  {
    title: 'Not sure what to do?',
    description: "It's always a good time to order some delicious food!",
  },
  {
    title: 'AppAcademy',
    description: 'This site was created by Jonathan Wong as a Full-Stack final project for AppAcademy.',
  },
  {
    title: 'Restaurants',
    description: 'These are all restaurants local to my current residence, which is Union, New Jersey',
  }
]

const SELECT_COLORS = [
  "#eeeeee",
  "lightgray",
  "lightcyan",
  "lightcoral"
]

function getRange(idx, length) {
  let lower;
  let upper;

  if ((idx - 1) < 0) {
    lower = length - 1
  } else {
    lower = idx - 1
  }

  if ((idx + 1) > (length - 1)) {
    upper = 0
  } else {
    upper = idx + 1
  }

  return [lower, idx, upper]
}

class AdCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 2,
      length: CAROUSEL_CONTENTS.length,
      data: CAROUSEL_CONTENTS
    }

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  prevSlide() {
    const { currentIndex, length } = this.state;
    let range = getRange(currentIndex, length);
    this.setState({ currentIndex: range[0] })
  }

  nextSlide() {
    const { currentIndex, length } = this.state;
    let range = getRange(currentIndex, length);
    this.setState({ currentIndex: range[2] })
  }

  renderSlide(slide, index) {
    const { currentIndex, length } = this.state;

    let indices = getRange(currentIndex, length)

    if (slide.link) {
      return (
        <a href={slide.link} key={index}
        className={indices.includes(index) ? 'active github' : 'slide github'}
        >
          <div>
          <div className="carousel-slide-title">
            {slide.title}
          </div>

          <div className="carousel-slide-desc">
            {slide.description}
          </div>
        </div>
      </a>
      )
    } else {
      return (
        <div
          className={indices.includes(index) ? 'active' : 'slide'}
          key={index}>
        <div className="carousel-slide-title">
          {slide.title}
        </div>

        <div className="carousel-slide-desc">
          {slide.description}
        </div>
      </div>
      )
    }
  }

  getRandomColor() {
    return SELECT_COLORS[(Math.floor(Math.random() * SELECT_COLORS.length))]
  }

  getRandomRestaurant() {
    const { restaurants } = this.props;
    const randomIndex = Math.floor(Math.random * 20);
    return restaurants['randomIndex']
  }

  render() {
    return (
      <div id="carousel-container">
        <div
          id="carousel-left"
          onClick={() => this.prevSlide()}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>

        <div id="carousel-contents">
          {this.state.data.map((slide, index) => {
            return (
              this.renderSlide(slide, index)
            )
          })}  
        </div>

        <div
          id="carousel-left"
          onClick={() => this.nextSlide()}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    )
  }
}

export default AdCarousel;