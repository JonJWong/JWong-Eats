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
    imgUrl: `${RESTAURANT_IMAGES[RANDOM_NUM]}`,
    className: 'carousel-eat-ad'
  },
  {
    title: 'Visit my GitHub!',
    description: 'Creator: Jonathan Wong github.com/JonJWong',
    link: 'https://github.com/JonJWong',
    imgUrl: 'https://jwong-eats-seeds.s3.amazonaws.com/github.png',
    className: 'carousel-github-ad'
  },
  {
    title: 'Bunny Cafe',
    description: 'Bunny Cafe is an example of a user-created restaurant, featuring our bunny, Kuro',
    link: "#/restaurants/20",
    imgUrl: 'https://jwong-eats-seeds.s3.amazonaws.com/bunnyad.jpg',
    className: 'carousel-bunny-cafe'
  },
  {
    title: 'Not sure what to do?',
    description: "It's always a good time to order some delicious food!",
    imgUrl: 'https://jwong-eats-seeds.s3.amazonaws.com/rilakkumaeat.png',
    className: 'carousel-rilakkuma'
  },
  {
    title: 'AppAcademy',
    description: 'This site was created by Jonathan Wong as a Full-Stack final project for AppAcademy.',
    imgUrl: 'https://jwong-eats-seeds.s3.amazonaws.com/appacademylogo.png',
    className: 'carousel-aa-logo'
  },
  {
    title: 'Restaurants',
    description: 'These are all restaurants local to my current residence, which is Union, New Jersey',
    imgUrl: 'https://jwong-eats-seeds.s3.amazonaws.com/restaurantad.jpeg',
    className: 'carousel-restaurants-ad'
  }
]

const INVERTED = {
  1: 4,
  2: 5,
  3: 6,
  4: 1,
  5: 2,
  6: 3
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
    }, 10)
  }

  // this method decides which direction the carousel will turn
  nextSlide(direction) {
    const carousel = document.querySelector("#carousel-container");
    console.log("next slide")
    if (direction === "Right") {
      this.direction = "Right"
      carousel.classList.add('carousel-container-transition');
      carousel.style.transform = carousel.style.tranform === 'translateX(-100%)'
        ? 'translateX(0%)'
        : 'translateX(-100%)';
    }
    if (direction === "Left") {
      this.direction = "Left"
      carousel.classList.add('carousel-container-transition');
      carousel.style.transform = carousel.style.tranform === 'translateX(-100%)'
        ? 'translateX(0%)'
        : 'translateX(-100%)'
    }
  }

  // when the css transition ends, it fires off the function to
  // change the flex-order of the carousel elements
  addEvents() {
    const that = this;

    document.querySelector("#carousel-container")
      .addEventListener('transitionend', () => {
        console.log("transition end")
        that.changeOrder();
    })
  }

  // based on the transition direction, this rearranges the items
  changeOrder() {
    const { length } = this.state;
    const carousel = document.querySelector("#carousel-container");
    const children = carousel.childNodes;

    console.log(this.direction)

    if (this.direction === "Left") {
      console.log("Left trigger")
      this.current = this.current === 4 ? 1 : 4
      let newOrder;

      children[0].style.order === '4'
        ? newOrder = [1, 2, 3, 4, 5, 6]
        : newOrder = [4, 5, 6, 1, 2, 3];

      newOrder.forEach((order, i) => {
        children[i].style.order = order
      })

      carousel.classList.remove('carousel-container-transition');
      carousel.style.transform = carousel.style.tranform === 'translateX(-100%)'
        ? 'translateX(-100%)'
        : 'translateX(0%)'
    }

    if (this.direction === "Right") {
      console.log("Right trigger")
      this.current = this.current === 4 ? 1 : 4
      let newOrder;

      children[0].style.order === '4'
        ? newOrder = [1, 2, 3, 4, 5, 6]
        : newOrder = [4, 5, 6, 1, 2, 3];

      newOrder.forEach((order, i) => {
        children[i].style.order = order
      })

      carousel.classList.remove('carousel-container-transition');
      carousel.style.transform = carousel.style.tranform === 'translateX(-100%)'
        ? 'translateX(-100%)'
        : 'translateX(0%)'
    }
  }

  renderSlide(slide, index) {
    if (slide.link) {
      return (
        <a href={slide.link} 
            className="carousel-item"
            data-position={index + 1}
            key={index + 1}>

          <div className={`carousel-inner ${slide.className}`}
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
    } else if (!slide.link && slide.imgUrl) {
      return (
        <div
          className="carousel-item"
          data-position={index + 1}
          key={index + 1}>
            
          <div className={`carousel-inner ${slide.className}`}
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
        </div>
      )
    }
  }

  render() {
    return (
      <div id="carousel-container-outer">
        <div
          id="carousel-left"
          onClick={() => this.nextSlide("Left")}>
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
          onClick={() => this.nextSlide("Right")}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    )
  }
}

export default AdCarousel;