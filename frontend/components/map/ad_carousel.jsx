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

function getRange(idx) {
  switch (idx) {
    case 0:
      return [5, 0, 1]
    case 1:
      return [0, 1, 2]
    case 2:
      return [1, 2, 3]
    case 3:
      return [2, 3, 4]
    case 4:
      return [3, 4, 5]
    case 5:
      return [4, 5, 0]
  }
}

class AdCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: CAROUSEL_CONTENTS.length,
      data: CAROUSEL_CONTENTS
    }

    this.current = 1;
    this.addEvents = this.addEvents.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.addEvents();
    }, 100)
  }

  nextSlide() {
    document.querySelector("#carousel-container").classList.add('carousel-container-transition');
    document.querySelector("#carousel-container").style.transform = 'translateX(-100%)';
  }

  addEvents() {
    const that = this;

    document.querySelector("#carousel-container")
      .addEventListener('transitionend', () => {
        this.changeOrder();
    })
  }

  changeOrder() {
    const { length } = this.state;

    if (this.current === length ) {
      this.current = 1;
    } else {
      this.current++
    }

    let order = 1;

    for (let i = this.current; i <= length; i++) {
      const slide = document.querySelector(`.carousel-item[data-position="${i}"]`)
      slide.style.order = order
      order = (order + 3) % length;
    }


    for (let i = 1; i < this.current; i++) {
      const slide = document.querySelector(`.carousel-item[data-position="${i}"]`)
      slide.style.order = order
      order = (order + 3) % length;
    }

    document.querySelector("#carousel-container").classList.remove('carousel-container-transition');
    document.querySelector("#carousel-container").style.transform = 'translateX(0)';

  }

  renderSlide(slide, index) {
    if (slide.link) {
      return (
        <a href={slide.link} key={index + 1}
        className="carousel-item"
        data-position={index + 1}
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
          className="carousel-item"
          data-position={index + 1}
          key={index + 1}>
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
      <div id="carousel-container-outer">
        <div
          id="carousel-left"
          onClick={() => console.log('hello')}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>

        <div id="carousel-container" className="carousel-container-transition">
          {this.state.data.map((slide, index) => {
            return (
              this.renderSlide(slide, index)
            )
          })}  
        </div>

        <div
          id="carousel-right"
          onClick={() => this.nextSlide()}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    )
  }
}

export default AdCarousel;