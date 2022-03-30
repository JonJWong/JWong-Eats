import React from "react";

const RESTAURANT_IMAGES = {
  1: 'https://jwong-eats-seeds.s3.amazonaws.com/sofiabanner.jpeg',
  2: 'https://jwong-eats-seeds.s3.amazonaws.com/JWongEatsRestaurant.png',
  3: 'https://jwong-eats-seeds.s3.amazonaws.com/zbanner.webp',
  4: 'https://jwong-eats-seeds.s3.amazonaws.com/JWongEatsRestaurant.png',
  5: 'https://jwong-eats-seeds.s3.amazonaws.com/cozybanner.jpg',
  6: 'https://jwong-eats-seeds.s3.amazonaws.com/cfabanner.jpeg',
  7: 'https://jwong-eats-seeds.s3.amazonaws.com/mcdbanner.jpeg',
  8: 'https://jwong-eats-seeds.s3.amazonaws.com/halalbanner.jpeg',
  9: 'https://jwong-eats-seeds.s3.amazonaws.com/subwaybanner.jpeg',
  10: 'https://jwong-eats-seeds.s3.amazonaws.com/unionbanner.jpeg',
  11: 'https://jwong-eats-seeds.s3.amazonaws.com/wcbanner.jpeg',
  12: 'https://jwong-eats-seeds.s3.amazonaws.com/redbanner.jpg',
  13: 'https://jwong-eats-seeds.s3.amazonaws.com/popbanner.jpeg',
  14: 'https://jwong-eats-seeds.s3.amazonaws.com/ihopbanner.jpeg',
  15: 'https://jwong-eats-seeds.s3.amazonaws.com/sbuxbanner.jpeg',
  16: 'https://jwong-eats-seeds.s3.amazonaws.com/pandabanner.jpeg',
  17: 'https://jwong-eats-seeds.s3.amazonaws.com/tgifbanner.jpeg',
  18: 'https://jwong-eats-seeds.s3.amazonaws.com/chipotlebanner.jpeg',
  19: 'https://jwong-eats-seeds.s3.amazonaws.com/olivebanner.jpeg',
  20: 'https://jwong-eats-seeds.s3.amazonaws.com/bunnyad.jpg'
}

const RANDOM_NUM = Math.floor(Math.random() * 20) + 1;

const CAROUSEL_CONTENTS = [
  {
    title: 'Eat from this restaurant!',
    description: 'Some of the best eats in town!',
    link: `#/restaurants/${RANDOM_NUM}`,
    imgUrl: `${RESTAURANT_IMAGES[RANDOM_NUM]}`
  },
  {
    title: 'Visit my GitHub!',
    description: 'Creator: Jonathan Wong github.com/JonJWong',
    link: 'https://github.com/JonJWong',
    imgUrl: 'https://jwong-eats-seeds.s3.amazonaws.com/github.png'
  },
  {
    title: 'Bunny Cafe',
    description: 'Bunny cafe is an example of a user-created restaurant, featuring our bunny, Kuro',
    link: "#/restaurants/20",
    imgUrl: 'https://jwong-eats-seeds.s3.amazonaws.com/bunnyad.jpg'
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
        that.changeOrder();
    })
  }

  changeOrder() {
    const { length } = this.state;

    if (this.current === length ) {
      this.current = 1;
    } else {
      this.current = (this.current + 3) % length
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
        <a href={slide.link} 
            className="carousel-item"
            data-position={index + 1}
            key={index + 1}>

          <div className="carousel-inner"
            style={{backgroundImage: `url('${slide.imgUrl}')`}}>
            <div className="carousel-inner-contents">
              <div className="carousel-slide-title">
                {slide.title}
              </div>

              <div className="carousel-slide-desc">
                {slide.description}
              </div>
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

        <div className="carousel-inner">
          <div className="carousel-inner-contents">

            <div className="carousel-slide-title">
              {slide.title}
            </div>

            <div className="carousel-slide-desc">
              {slide.description}
            </div>

          </div>
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

        <div id="carousel-left-blocker">

        </div>

        <div id="carousel-container" className="carousel-container-transition">
          {this.state.data.map((slide, index) => {
            return (
              this.renderSlide(slide, index)
            )
          })}  
        </div>

        <div id="carousel-right-blocker">

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