# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Restaurant.destroy_all
Menu.destroy_all
MenuItem.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('restaurants')
ApplicationRecord.connection.reset_pk_sequence!('menus')
ApplicationRecord.connection.reset_pk_sequence!('menu_items')

demo_user = User.create({email: 'demo_user@email.com', password: 'password', first_name: 'John', last_name: 'Doe', address: '1 Wall Street'})

restaurants = Restaurant.create([
  {
    name: "Sofia's Italian Restaurant",
    address: "272 Morris Ave, Springfield NJ 07081",
    description: "",
    rating: 4.5,
    review_count: 407,
    price_rating: "$$",
    hours: "11:30AM - 9:00PM"
  },
  {
    name: "SIGNATURZ SPORTS BAR",
    address: "2586 Morris Ave, Union NJ 07083",
    description: "",
    rating: 4.4,
    review_count: 258,
    price_rating: "$",
    hours: "11:00AM - 2:00AM"
  },
  {
    name: "Cafe Z",
    address: "2333 Morris Ave, Union, NJ 07083",
    description: "",
    rating: 4.4,
    review_count: 290,
    price_rating: "$$",
    hours: "11:30AM - 10:00PM"
  },
  {
    name: "The Red Cadillac",
    address: "2258 Morris Ave, Union, NJ 07083",
    description: "",
    rating: 4.3,
    review_count: 967,
    price_rating: "$$",
    hours: "2:00PM - 10:00PM"
  },
  {
    name: "Cozy Corner Deli and Caterers",
    address: "558 Rahway Ave, Union, NJ 07083",
    description: "",
    rating: 4.2,
    review_count: 238,
    price_rating: "$",
    hours: "6:00AM - 4:00PM"
  },
  {
    name: "Chick Fil-A",
    address: "2319 US-22 W, Union, NJ 07083",
    description: "",
    rating: 4.4,
    review_count: 4577,
    price_rating: "$",
    hours: "6:30AM - 10:00PM"
  },
  {
    name: "McDonald's",
    address: "2404 US-22, Union, NJ 07083",
    description: "",
    rating: 3.7,
    review_count: 1447,
    price_rating: "$",
    hours: "12:01AM - 12-00AM"
  },
  {
    name: "The Halal Guys",
    address: "2317 US-22 Union, NJ 07083",
    description: "",
    rating: 4.3,
    review_count: 1486,
    price_rating: "%",
    hours: "11:00AM - 11:00PM"
  },
  {
    name: "Subway",
    address: "2497 US-22 W, Union, NJ 07083",
    description: "",
    rating: 4,
    review_count: 200,
    price_rating: "$",
    hours: "8:00AM - 9:00PM" 
  },
  {
    name: "Union Plaza Diner",
    address: "2466 US-22, Union, NJ 07083",
    description: "",
    rating: 4.1,
    review_count: 1650,
    price_rating: "$$",
    hours: "8:00AM - 10:00PM"
  },
  {
    name: "White Castle",
    address: "2458 US-22, Union, NJ 07083",
    description: "",
    rating: 4,
    review_count: 1072,
    price_rating: "$",
    hours: "9:00AM - 3:00AM"
  },
  {
    name: "Red Lobster",
    address: "2520 US-22, Union, NJ 07083",
    description: "",
    rating: 3.8,
    review_count: 2873,
    price_rating: "$$",
    hours: "11:00AM - 10:00PM"
  },
  {
    name: "Popeyes Louisiana Kitchen",
    address: "2568 US-22 East, Union, NJ 07081",
    description: "",
    rating: 3.9,
    review_count: 1074,
    price_rating: "$",
    hours: "10:30AM - 11:00PM"
  },
  {
    name: "IHOP",
    address: "2500 US-22 E, Union, NJ 07083",
    description: "",
    rating: 4.1,
    review_count: 1684,
    price_rating: "$",
    hours: "7:00AM - 10:00PM"
  },
  {
    name: "Starbucks",
    address: "2235 Springfield Ave, Union, NJ 07088",
    description: "",
    rating: 4.2,
    review_count: 825,
    price_rating: "$$",
    hours: "8:00AM - 9:00PM"
  },
  {
    name: "Panda Express",
    address: "2704 US-22, Union, NJ 07083",
    description: "",
    rating: 4,
    review_count: 779,
    price_rating: "$",
    hours: "11:00AM - 7:00PM"
  },
  {
    name: "TGI Fridays",
    address: "40 US-22, Springfield, NJ 07081",
    description: "",
    rating: 3.5,
    review_count: 1657,
    price_rating: "$$",
    hours: "11:00AM - 1:00AM"
  },
  {
    name: "Chipotle Mexican Grill",
    address: "101 US-22, Springfield, NJ 07081",
    description: "",
    rating: 3.7,
    review_count: 1394,
    price_rating: "$",
    hours: "10:45AM - 10:00PM"
  },
  {
    name: "Olive Garden",
    address: "265 US-22, Springfield, NJ 07081",
    description: "",
    rating: 4.1,
    review_count: 2334,
    price_rating: "$$",
    hours: "11:00AM - 10:00PM"
  },
])