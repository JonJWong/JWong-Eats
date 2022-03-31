import React from "react";

// restaurant banners to be used in carousel
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

// random number per-refresh to generate a random restaurant.
const RANDOM_NUM = Math.floor(Math.random() * 20) + 1;

// array of carousel slides (objects)
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
    description: 'This site was created by Jonathan Wong as a Full-Stack clone during his time at AppAcademy.',
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

  // When the component mounts, add the event-listener to the carousel container
  // that way transitions work properly
  componentDidMount() {
    setTimeout(() => {
      this.addEvents();
    }, 10)
  }

  // This method decides which direction the carousel will turn
  nextSlide(direction) {
    // Select carousel for reference within the method
    const carousel = document.querySelector("#carousel-container");
    const children = carousel.childNodes;

    if (direction === "Right") {
      // Change direction attribute, different operations per direction
      this.direction = "Right"

      // Pre-emptively shift the carousel over to the left, so the transition
      // looks like it's moving to the right when we move it again.
      // There is no transition applied at this stage
      carousel.style.transform = 'translateX(-100%)';
      
      let newOrder;
      
      // Check the flex-order of the first child, to determine which slides to
      // show. there are only two possible orders, since there are 6 slides
      // and the carousel moves by 3 per click.
      children[0].style.order === '4'
        ? newOrder = [1, 2, 3, 4, 5, 6]
        : newOrder = [4, 5, 6, 1, 2, 3];
      
      // Apply the new order to the children of the carousel
      // this actually changes what is displayed on the screen
      newOrder.forEach((number, i) => {
        children[i].style.order = number
      })

      // Add the transition class so that the carousel turns smoothly,
      // and then move it over to the right.
      // I don't know why this needs a setTimeout to work, but it's working.
      setTimeout(() => {
        carousel.classList.add('carousel-container-transition');
        carousel.style.transform = 'translateX(0%)';
      }, 1)
    }

    // The order of operations is opposite for left, since the list has elements
    // that exist to the right already, so there is no need for pre-emptive
    // translation.
    if (direction === "Left") {
      this.direction = "Left"
      
      // Setting this to 0 just in case, but it should be 0 coming to this stage
      carousel.style.transform = 'translateX(0%)';
      
      // Applying the transition, and then moving the carousel over.
      // since the event listener fires off when the transition ends,
      // the order will be changed when it settles.
      carousel.classList.add('carousel-container-transition');
      carousel.style.transform = 'translateX(-100%)';
    }
  }

  // when the css transition ends, it fires off the function to
  // change the flex-order of the carousel elements
  addEvents() {
    const that = this;

    document.querySelector("#carousel-container")
      .addEventListener('transitionend', () => {
        that.changeOrder();
    })
  }

  // based on the transition direction, this rearranges the items
  changeOrder() {
    const carousel = document.querySelector("#carousel-container");
    const children = carousel.childNodes;

    // re-order the elements after the transition ends when moving left
    if (this.direction === "Left") {
      let newOrder;

      // Check the flex-order of the first child, to determine which slides to
      // show. there are only two possible orders, since there are 6 slides
      // and the carousel moves by 3 per click.
      children[0].style.order === '4'
        ? newOrder = [1, 2, 3, 4, 5, 6]
        : newOrder = [4, 5, 6, 1, 2, 3];

      // Apply the new order to the children of the carousel
      // this actually changes what is displayed on the screen
      newOrder.forEach((order, i) => {
        children[i].style.order = order
      })

      // Remove the transition property from the carousel, and then resetting
      // the translation. This ensures that the re-arranging is not seen by
      // the user.
      carousel.classList.remove('carousel-container-transition');
      carousel.style.transform = '';
    }

    // Since right-facing movement needs to be re-ordered before translating
    // the eventlistener will just remove the transition class, since the
    // carousel will be ready for another movement at this point.
    if (this.direction === "Right") {
      // Remove the transition property from the carousel, and then resetting
      // the translation. This ensures that the re-arranging is not seen by
      // the user.
      carousel.classList.remove('carousel-container-transition');
      carousel.style.transform = '';
    }
  }

  // Based on the content of the slides, it will render a different container.
  // Some slides have links, some do not.
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

        <div id="carousel-container">
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