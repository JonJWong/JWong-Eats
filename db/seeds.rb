# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

# puts("Destroying all existing records...")

# puts ("Destroying Users...")
# User.destroy_all
# puts("Users destroyed")

# puts("Destroying Restaurants...")
# Restaurant.destroy_all
# puts("Restaurants destroyed")

# puts("Destroying Menus...")
# Menu.destroy_all
# puts("Menus Destroyed")

# puts("Destroying MenuItems...")
# MenuItem.destroy_all
# puts("MenuItems Destroyed")

# puts("Destroying Transactions...")
# Transaction.destroy_all
# puts("Transactions Destroyed")

# puts("Destroying Transaction Items...")
# TransactionItem.destroy_all
# puts("Transaction Items Destroyed")

# puts("Resetting primary key sequence for: Users...")
# ApplicationRecord.connection.reset_pk_sequence!('users')
# puts("Reset!")

# puts("Resetting primary key sequence for: Restaurants...")
# ApplicationRecord.connection.reset_pk_sequence!('restaurants')
# puts("Reset!")

# puts("Resetting primary key sequence for: Menus...")
# ApplicationRecord.connection.reset_pk_sequence!('menus')
# puts("Reset!")

# puts("Resetting primary key sequence for: MenuItems...")
# ApplicationRecord.connection.reset_pk_sequence!('menu_items')
# puts("Reset!")

# puts("Resetting primary key sequence for: Transactions...")
# ApplicationRecord.connection.reset_pk_sequence!('transactions')
# puts("Reset!")

# puts("Resetting primary key sequence for: Transaction Items...")
# ApplicationRecord.connection.reset_pk_sequence!('transaction_items')
# puts("Reset!")

# puts ("All existing records destroyed!")

# puts("Seeding demo user...")

# demo_user = User.create({email: 'demo_user@email.com', password: 'password', first_name: 'John', last_name: 'Doe', address: '1 Wall Street'})

# puts("Seeding restaurants...")

# restaurant1 = Restaurant.create({
#     name: "Sofia's Italian Restaurant",
#     address: "272 Morris Ave, Springfield NJ 07081",
#     description: "",
#     rating: 4.5,
#     review_count: 407,
#     price_rating: "$$",
#     hours: "11:30AM - 9:00PM"
#   })
# restaurant1img = open("https://jwong-eats-seeds.s3.amazonaws.com/sofiabanner.jpeg")
# restaurant1.photo.attach(io: restaurant1img, filename: 'sofiabanner.jpeg')

# restaurant2 = Restaurant.create({
#     name: "SIGNATURZ SPORTS BAR",
#     address: "2586 Morris Ave, Union NJ 07083",
#     description: "",
#     rating: 4.4,
#     review_count: 258,
#     price_rating: "$",
#     hours: "11:00AM - 2:00AM"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# restaurant2.photo.attach(io: genericImg, filename: 'JWongEats.png')

# restaurant3 = Restaurant.create({
#     name: "Cafe Z",
#     address: "2333 Morris Ave, Union, NJ 07083",
#     description: "",
#     rating: 4.4,
#     review_count: 290,
#     price_rating: "$$",
#     hours: "11:30AM - 10:00PM"
#   })
# restaurant3img = open("https://jwong-eats-seeds.s3.amazonaws.com/zbanner.webp")
# restaurant3.photo.attach(io: restaurant3img, filename: 'zbanner.webp')

# restaurant4 = Restaurant.create({
#     name: "The Red Cadillac",
#     address: "2258 Morris Ave, Union, NJ 07083",
#     description: "",
#     rating: 4.3,
#     review_count: 967,
#     price_rating: "$$",
#     hours: "2:00PM - 10:00PM"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# restaurant4.photo.attach(io: genericImg, filename: 'JWongEats.png')

# restaurant5 = Restaurant.create({
#     name: "Cozy Corner Deli and Caterers",
#     address: "558 Rahway Ave, Union, NJ 07083",
#     description: "",
#     rating: 4.2,
#     review_count: 238,
#     price_rating: "$",
#     hours: "6:00AM - 4:00PM"
#   })
# restaurant5img = open("https://jwong-eats-seeds.s3.amazonaws.com/cozybanner.jpg")
# restaurant5.photo.attach(io: restaurant5img, filename: 'cozybanner.jpg')

# restaurant6 = Restaurant.create({
#     name: "Chick Fil-A",
#     address: "2319 US-22 W, Union, NJ 07083",
#     description: "",
#     rating: 4.4,
#     review_count: 4577,
#     price_rating: "$",
#     hours: "6:30AM - 10:00PM"
#   })
# restaurant6img = open("https://jwong-eats-seeds.s3.amazonaws.com/cfabanner.jpeg")
# restaurant6.photo.attach(io: restaurant6img, filename: 'cfabanner.jpeg')

# restaurant7 = Restaurant.create({
#     name: "McDonald's",
#     address: "2404 US-22, Union, NJ 07083",
#     description: "",
#     rating: 3.7,
#     review_count: 1447,
#     price_rating: "$",
#     hours: "12:00AM - 11:59PM"
#   })
# restaurant7img = open("https://jwong-eats-seeds.s3.amazonaws.com/mcdbanner.jpeg")
# restaurant7.photo.attach(io: restaurant7img, filename: 'mcdbanner.jpeg')

# restaurant8 = Restaurant.create({
#     name: "The Halal Guys",
#     address: "2317 US-22 Union, NJ 07083",
#     description: "",
#     rating: 4.3,
#     review_count: 1486,
#     price_rating: "$",
#     hours: "11:00AM - 11:00PM"
#   })
# restaurant8img = open("https://jwong-eats-seeds.s3.amazonaws.com/halalbanner.jpeg")
# restaurant8.photo.attach(io: restaurant8img, filename: 'halalbanner.jpeg')

# restaurant9 = Restaurant.create({
#     name: "Subway",
#     address: "2497 US-22 W, Union, NJ 07083",
#     description: "",
#     rating: 4,
#     review_count: 200,
#     price_rating: "$",
#     hours: "8:00AM - 9:00PM" 
#   })
# restaurant9img = open("https://jwong-eats-seeds.s3.amazonaws.com/subwaybanner.jpeg")
# restaurant9.photo.attach(io: restaurant9img, filename: 'subwaybanner.jpeg')

# restaurant10 = Restaurant.create({
#     name: "Union Plaza Diner",
#     address: "2466 US-22, Union, NJ 07083",
#     description: "",
#     rating: 4.1,
#     review_count: 1650,
#     price_rating: "$$",
#     hours: "8:00AM - 10:00PM"
#   })
# restaurant10img = open("https://jwong-eats-seeds.s3.amazonaws.com/unionbanner.jpeg")
# restaurant10.photo.attach(io: restaurant10img, filename: 'unionbanner.jpeg')

# restaurant11 = Restaurant.create({
#     name: "White Castle",
#     address: "2458 US-22, Union, NJ 07083",
#     description: "",
#     rating: 4,
#     review_count: 1072,
#     price_rating: "$",
#     hours: "9:00AM - 3:00AM"
#   })
# restaurant11img = open("https://jwong-eats-seeds.s3.amazonaws.com/wcbanner.jpeg")
# restaurant11.photo.attach(io: restaurant11img, filename: 'wcbanner.jpeg')

# restaurant12 = Restaurant.create({
#     name: "Red Lobster",
#     address: "2520 US-22, Union, NJ 07083",
#     description: "",
#     rating: 3.8,
#     review_count: 2873,
#     price_rating: "$$",
#     hours: "11:00AM - 10:00PM"
#   })
# restaurant12img = open("https://jwong-eats-seeds.s3.amazonaws.com/redbanner.jpg")
# restaurant12.photo.attach(io: restaurant12img, filename: 'redbanner.jpg')

# restaurant13 = Restaurant.create({
#     name: "Popeyes Louisiana Kitchen",
#     address: "2568 US-22 East, Union, NJ 07081",
#     description: "",
#     rating: 3.9,
#     review_count: 1074,
#     price_rating: "$",
#     hours: "10:30AM - 11:00PM"
#   })
# restaurant13img = open("https://jwong-eats-seeds.s3.amazonaws.com/popbanner.jpeg")
# restaurant13.photo.attach(io: restaurant13img, filename: 'popbanner.jpeg')

# restaurant14 = Restaurant.create({
#     name: "IHOP",
#     address: "2500 US-22 E, Union, NJ 07083",
#     description: "",
#     rating: 4.1,
#     review_count: 1684,
#     price_rating: "$",
#     hours: "7:00AM - 10:00PM"
#   })
# restaurant14img = open("https://jwong-eats-seeds.s3.amazonaws.com/ihopbanner.jpeg")
# restaurant14.photo.attach(io: restaurant14img, filename: 'ihopbanner.jpeg')

# restaurant15 = Restaurant.create({
#     name: "Starbucks",
#     address: "2235 Springfield Ave, Union, NJ 07088",
#     description: "",
#     rating: 4.2,
#     review_count: 825,
#     price_rating: "$$",
#     hours: "8:00AM - 9:00PM"
#   })
# restaurant15img = open("https://jwong-eats-seeds.s3.amazonaws.com/sbuxbanner.jpeg")
# restaurant15.photo.attach(io: restaurant15img, filename: 'sbuxbanner.jpeg')

# restaurant16 = Restaurant.create({
#     name: "Panda Express",
#     address: "2704 US-22, Union, NJ 07083",
#     description: "",
#     rating: 4,
#     review_count: 779,
#     price_rating: "$",
#     hours: "11:00AM - 7:00PM"
#   })
# restaurant16img = open("https://jwong-eats-seeds.s3.amazonaws.com/pandabanner.jpeg")
# restaurant16.photo.attach(io: restaurant16img, filename: 'pandabanner.jpeg')

# restaurant17 = Restaurant.create({
#     name: "TGI Fridays",
#     address: "40 US-22, Springfield, NJ 07081",
#     description: "",
#     rating: 3.5,
#     review_count: 1657,
#     price_rating: "$$",
#     hours: "11:00AM - 1:00AM"
#   })
# restaurant17img = open("https://jwong-eats-seeds.s3.amazonaws.com/tgifbanner.jpeg")
# restaurant17.photo.attach(io: restaurant17img, filename: 'tgifbanner.jpeg')

# restaurant18 = Restaurant.create({
#     name: "Chipotle Mexican Grill",
#     address: "101 US-22, Springfield, NJ 07081",
#     description: "",
#     rating: 3.7,
#     review_count: 1394,
#     price_rating: "$",
#     hours: "10:45AM - 10:00PM"
#   })
# restaurant18img = open("https://jwong-eats-seeds.s3.amazonaws.com/chipotlebanner.jpeg")
# restaurant18.photo.attach(io: restaurant18img, filename: 'chipotlebanner.jpeg')

# restaurant19 = Restaurant.create({
#     name: "Olive Garden",
#     address: "265 US-22, Springfield, NJ 07081",
#     description: "",
#     rating: 4.1,
#     review_count: 2334,
#     price_rating: "$$",
#     hours: "11:00AM - 10:00PM"
#   })
# restaurant19img = open("https://jwong-eats-seeds.s3.amazonaws.com/olivebanner.jpeg")
# restaurant19.photo.attach(io: restaurant19img, filename: 'olivebanner.jpeg')

# restaurant20 = Restaurant.create({
#   name: "Bunny Cafe",
#   address: "Somewhere in Union, NJ",
#   description: "",
#   rating: 5.0,
#   review_count: 9999,
#   price_rating: "$$$$$",
#   hours: "6:00AM - 10:00PM"
# })
# restaurant20img = open("https://jwong-eats-seeds.s3.amazonaws.com/bunnybanner.jpg")
# restaurant20.photo.attach(io: restaurant20img, filename: 'bunnybanner.jpg')
  
# puts("Seeding Menus...")

# menu1 = Menu.create({
#     restaurant_name: "Sofia's Italian Restaurant",
#     restaurant_id: 1
#   })

# menu2 = Menu.create({
#     restaurant_name: "SIGNATURZ SPORTS BAR",
#     restaurant_id: 2
#   })

# menu3 = Menu.create({
#     restaurant_name: "Cafe Z",
#     restaurant_id: 3
#   })

# menu4 = Menu.create({
#     restaurant_name: "The Red Cadillac",
#     restaurant_id: 4
#   })

# menu5 = Menu.create({
#     restaurant_name: "Cozy Corner Deli and Caterers",
#     restaurant_id: 5
#   })

# menu6 = Menu.create({
#     restaurant_name: "Chick Fil-A",
#     restaurant_id: 6
#   })

# menu7 = Menu.create({
#     restaurant_name: "McDonald's",
#     restaurant_id: 7
#   })

# menu8 = Menu.create({
#     restaurant_name: "The Halal Guys",
#     restaurant_id: 8
#   })

# menu9 = Menu.create({
#     restaurant_name: "Subway",
#     restaurant_id: 9
#   })

# menu10 = Menu.create({
#     restaurant_name: "Union Plaza Diner",
#     restaurant_id: 10
#   })

# menu11 = Menu.create({
#     restaurant_name: "White Castle",
#     restaurant_id: 11
#   })

# menu12 = Menu.create({
#     restaurant_name: "Red Lobster",
#     restaurant_id: 12
#   })

# menu13 = Menu.create({
#     restaurant_name: "Popeyes Louisiana Kitchen",
#     restaurant_id: 13
#   })

# menu14 = Menu.create({
#     restaurant_name: "IHOP",
#     restaurant_id: 14
#   })

# menu15 = Menu.create({
#     restaurant_name: "Starbucks",
#     restaurant_id: 15
#   })

# menu16 = Menu.create({
#     restaurant_name: "Panda Express",
#     restaurant_id: 16
#   })

# menu17 = Menu.create({
#     restaurant_name: "TGI Fridays",
#     restaurant_id: 17
#   })

# menu18 = Menu.create({
#     restaurant_name: "Chipotle Mexican Grill",
#     restaurant_id: 18
#   })

# menu19 = Menu.create({
#     restaurant_name: "Olive Garden",
#     restaurant_id: 19
#   })

# menu20 = Menu.create({
#   restaurant_name: "Bunny Cafe",
#   restaurant_id: 20
# })
  
# puts("Seeding MenuItems...")
# # Sofia's
# # https://sofiasitalianrestaurant.com/dinner-menu
# puts("Seeding Sofia's")
# menu1_item1 = MenuItem.create({
#     menu_id: 1,
#     item_name: "Penne ala Vodka Sauce",
#     item_price: 17.95,
#     description: "Fresh tomatoes and a touch of cream"
#   })
# menu1_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/sofiavodka.jpeg")
# menu1_item1.photo.attach(io: menu1_item1img, filename: 'sofiavodka.jpeg')

# menu1_item2 = MenuItem.create({
#     menu_id: 1,
#     item_name: "Penne ala Vodka Sauce with Salmon",
#     item_price: 20.95,
#     description: "Sauteed salmon, fresh tomatoes and a touch of cream"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu1_item2.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu1_item3 = MenuItem.create({
#     menu_id: 1,
#     item_name: "Cheese Ravioli",
#     item_price: 16.95,
#     description: "Tomato basil sauce"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu1_item3.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu1_item4 = MenuItem.create({
#     menu_id: 1,
#     item_name: "Spinach Ravioli",
#     item_price: 18.95,
#     description: "In a light pink sauce"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu1_item4.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu1_item5 = MenuItem.create({
#     menu_id: 1,
#     item_name: "Chicken Parmigiana",
#     item_price: 19.95,
#     description: "Breaded chicken brease, marinara sauce toppped with mozzarella cheese"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu1_item5.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu1_item6 = MenuItem.create({
#     menu_id: 1,
#     item_name: "Shrimp Scampi",
#     item_price: 21.95,
#     description: "Sauteed with garlic, olive oil & white wine"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu1_item6.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu1_item7 = MenuItem.create({
#     menu_id: 1,
#     item_name: "Salmon Putanesca Sauce",
#     item_price: 24.95,
#     description: "Sauteed with tomatoes, capers, gaeta olives, and anchovies & garlic"
#   })
# menu1_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/sofiasalmon.jpeg")
# menu1_item7.photo.attach(io: menu1_item7img, filename: 'sofiasalmon.jpeg')

# menu1_item8 = MenuItem.create({
#     menu_id: 1,
#     item_name: "Shrimp Fra Diavolo",
#     item_price: 21.95,
#     description: "Spicy marinara sauce"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu1_item8.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu1_item9 = MenuItem.create({
#     menu_id: 1,
#     item_name: "Sofia's Cold Seafood Salad",
#     item_price: 14.95,
#     description: ""
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu1_item9.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu1_item10 = MenuItem.create({
#     menu_id: 1,
#     item_name: "Soda",
#     item_price: 3.00,
#     description: "Coke, Diet Coke, Sprite, Seltzer"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu1_item10.photo.attach(io: genericImg, filename: 'JWongEats.png')

# puts("Seeding SIGNATURZ...")
# # SIGNATURZ
# # https://www.restaurantji.com/nj/union/team-dez-sports-bar-and-grill-/menu/#
# menu2_item1 = MenuItem.create({
#     menu_id: 2,
#     item_name: "Chicken & Waffles",
#     item_price: 9.00,
#     description: "Belgian waffle w/ crispy fried chicken strips"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu2_item1.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu2_item2 = MenuItem.create({
#     menu_id: 2,
#     item_name: "Angus Beef Burger",
#     item_price: 8.00,
#     description: "Eight ounces of Angus beef, lettuce, tomato & onion on a toasted garlic bun"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu2_item2.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu2_item3 = MenuItem.create({
#     menu_id: 2,
#     item_name: "Cheese Steak Sandwich",
#     item_price: 9.00,
#     description: "Steak w/ cooked onions, peppers and American cheese"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu2_item3.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu2_item4 = MenuItem.create({
#     menu_id: 2,
#     item_name: "Supreme Nachos",
#     item_price: 9.00,
#     description: "Freshly fried tortillas covered in cheese sauce, beef, pico de gallo and jalapenos with a side of sour cream"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu2_item4.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu2_item5 = MenuItem.create({
#     menu_id: 2,
#     item_name: "Bar Pie",
#     item_price: 8.00,
#     description: "Thin crust cheese pizza"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu2_item5.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu2_item6 = MenuItem.create({
#     menu_id: 2,
#     item_name: "Crispy Fish Sliders",
#     item_price: 7.00,
#     description: "3 Mini crispy fried pieces of flounder served w/ a spicy aioli sauce"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu2_item6.photo.attach(io: genericImg, filename: 'JWongEats.png')


# menu2_item7 = MenuItem.create({
#     menu_id: 2,
#     item_name: "Garlic Parmesan Fries",
#     item_price: 6.00,
#     description: "Crispy coated fries tossed in a fresh garlic & butter sauce"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu2_item7.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu2_item8 = MenuItem.create({
#     menu_id: 2,
#     item_name: "Shrimp Basket",
#     item_price: 13.00,
#     description: "6 Fried or grilled jumbo shrimp w/ fries"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu2_item8.photo.attach(io: genericImg, filename: 'JWongEats.png')


# menu2_item9 = MenuItem.create({
#     menu_id: 2,
#     item_name: "Spiced Iced Tea",
#     item_price: 13.00,
#     description: "SoCo, Captain Morgan, Peach Schnapps, Triple Sec, Vodka, and Cola"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu2_item9.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu2_item10 = MenuItem.create({
#     menu_id: 2,
#     item_name: "Mind Eraser",
#     item_price: 9.00,
#     description: "Vokda, Kahlua, Club soda"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu2_item10.photo.attach(io: genericImg, filename: 'JWongEats.png')

# puts("Seeding Cafe Z...")
# # Cafe Z
# # https://cafeznj.com/menu/
# menu3_item1 = MenuItem.create({
#     menu_id: 3,
#     item_name: "Chicken Wings",
#     item_price: 9.95,
#     description: "BBQ, Hot, Mild or Garlic"
#   })
# menu3_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/zwings.jpeg")
# menu3_item1.photo.attach(io: menu3_item1img, filename: 'zwings.jpeg')

# menu3_item2 = MenuItem.create({
#     menu_id: 3,
#     item_name: "'Z' Calamari",
#     item_price: 10.95,
#     description: "Calamari rings sauteed with olive oil, garlic, sherry wine, basil, and tomato marinara"
#   })
# menu3_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/zcalamari.jpeg")
# menu3_item2.photo.attach(io: menu3_item2img, filename: 'zcalamari.jpeg')

# menu3_item3 = MenuItem.create({
#     menu_id: 3,
#     item_name: "Our Famous Stuffed Meatball",
#     item_price: 10.95,
#     description: "Large meatball filled with seasoned ricotta cheese and topped with a spicy marinara sauce"
#   })
# menu3_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/zmeatball.jpeg")
# menu3_item3.photo.attach(io: menu3_item3img, filename: 'zmeatball.jpeg')

# menu3_item4 = MenuItem.create({
#     menu_id: 3,
#     item_name: "Garlic Shrimp",
#     item_price: 9.95,
#     description: "Rock shrimp in olive oil and butter"
#   })
# menu3_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/zshrimp.jpeg")
# menu3_item4.photo.attach(io: menu3_item4img, filename: 'zshrimp.jpeg')

# menu3_item5 = MenuItem.create({
#     menu_id: 3,
#     item_name: "Eggplant Parmigiana",
#     item_price: 7.95,
#     description: "Thinly sliced eggplant, egg-battered, sauteed and topped with mozzarerlla and marinara"
#   })
# menu3_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/zeggparm.jpeg")
# menu3_item5.photo.attach(io: menu3_item5img, filename: 'zeggparm.jpeg')

# menu3_item6 = MenuItem.create({
#     menu_id: 3,
#     item_name: "Casa di Napoli",
#     item_price: 9.95,
#     description: "Prosciutto, fresh mozzarella, sun-dried tomatoes, garlic, and olive oil"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu3_item6.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu3_item7 = MenuItem.create({
#     menu_id: 3,
#     item_name: "San Remo",
#     item_price: 8.95,
#     description: "Fresh mozzarella, roasted peppers, prosciutto, and extra virgin olive oil"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu3_item7.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu3_item8 = MenuItem.create({
#     menu_id: 3,
#     item_name: "Bianco Pizza",
#     item_price: 8.50,
#     description: "8 inch pizza with ricotta, mozzarella, garlic, and spinach"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu3_item8.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu3_item9 = MenuItem.create({
#     menu_id: 3,
#     item_name: "Fettucine di Mare",
#     item_price: 16.95,
#     description: "Homemade fettucine in a pink cream sauce with garlic and real crab meat"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu3_item9.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu3_item10 = MenuItem.create({
#     menu_id: 3,
#     item_name: "Rigatoni alla Vodka",
#     item_price: 14.95,
#     description: "Rigatoni, peas and diced prosciutto in a tomato basil sauce with vodka and a touch of cream"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu3_item10.photo.attach(io: genericImg, filename: 'JWongEats.png')

# puts("Seeding The Red Cadillac...")
# # The Red Cadillac
# # https://www.theredcadillacnj.com/wp-content/uploads/2022/03/Dine-In-Menu.pdf
# menu4_item1 = MenuItem.create({
#     menu_id: 4,
#     item_name: "Abuelas Empanadas",
#     item_price: 12.00,
#     description: "Homemade pork empanadas"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu4_item1.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu4_item2 = MenuItem.create({
#     menu_id: 4,
#     item_name: "Chef Paris' Guacamole",
#     item_price: 13.00,
#     description: "Fresh hass avocado, lime, cilantro & chiles"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu4_item2.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu4_item3 = MenuItem.create({
#     menu_id: 4,
#     item_name: "Shrimp & Garlic",
#     item_price: 15.00,
#     description: "Mexican shrimp sauteed in garlic, paprika & a little heat"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu4_item3.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu4_item4 = MenuItem.create({
#     menu_id: 4,
#     item_name: "Fish Tacos",
#     item_price: 21.00,
#     description: "Beer battered Atlantic Cod topped with slaw, cheese, pico & chipotle tartar"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu4_item4.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu4_item5 = MenuItem.create({
#     menu_id: 4,
#     item_name: "Starberry Glazed Jalapeno Chicken Tacos",
#     item_price: 19.00,
#     description: "Jerk chicken tossed in our homemade strawberry glaze with picked white onions & Queso Fresco"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu4_item5.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu4_item6 = MenuItem.create({
#     menu_id: 4,
#     item_name: "Shrimp Tempura Tacos",
#     item_price: 21.00,
#     description: "Battered Cadillac shrimp topped with avocado crema, cheese & pico"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu4_item6.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu4_item7 = MenuItem.create({
#     menu_id: 4,
#     item_name: "Sangria",
#     item_price: 12.00,
#     description: "Red, White, or Rose"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu4_item7.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu4_item8 = MenuItem.create({
#     menu_id: 4,
#     item_name: "Fresh Fruit Frozen Ritas",
#     item_price: 14.00,
#     description: "Strawberry, Mango, or Sangrita"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu4_item8.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu4_item9 = MenuItem.create({
#     menu_id: 4,
#     item_name: "Ice Cold Beer",
#     item_price: 12.00,
#     description: "Budweiser, Corona, Heineken, Guinness"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu4_item9.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu4_item10 = MenuItem.create({
#     menu_id: 4,
#     item_name: "Cadillac Wine",
#     item_price: 12.00,
#     description: "Merlot, Chardonnay, Cabernet, Sauvignon Blanc"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu4_item10.photo.attach(io: genericImg, filename: 'JWongEats.png')

# puts("Seeding Cozy Corner...")
# # Cozy Corner
# # https://cozycornerdeli.net/lunch/
# menu5_item1 = MenuItem.create({
#     menu_id: 5,
#     item_name: "Buffalo Chicken Wrap",
#     item_price: 7.20,
#     description: "With lettuce, tomatoes & blue cheese dressing"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu5_item1.photo.attach(io: genericImg, filename: 'JWongEats.png')


# menu5_item2 = MenuItem.create({
#     menu_id: 5,
#     item_name: "Chicken Cutlet",
#     item_price: 7.20,
#     description: "With lettuce, tomato & mayo"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu5_item2.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu5_item3= MenuItem.create({
#     menu_id: 5,
#     item_name: "Homemade Philly Cheesesteak",
#     item_price: 7.20,
#     description: "With sweet peppers, mushrooms & onions on Italian bread"
#   })
# menu5_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/cozycheesesteak.jpeg")
# menu5_item3.photo.attach(io: menu5_item3img, filename: 'cozycheesesteak.jpeg')

# menu5_item4 = MenuItem.create({
#     menu_id: 5,
#     item_name: "BLT",
#     item_price: 5.70,
#     description: "Bacon lettuce & tomato"
#   })
# menu5_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/cozyblt.jpeg")
# menu5_item4.photo.attach(io: menu5_item4img, filename: 'cozyblt.jpeg')

# menu5_item5 = MenuItem.create({
#     menu_id: 5,
#     item_name: "Cheeseburger",
#     item_price: 5.20,
#     description: "6 oz. jumbo burger with cheese"
#   })
# menu5_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/cozyburger.jpeg")
# menu5_item5.photo.attach(io: menu5_item5img, filename: 'cozyburger.jpeg')

# menu5_item6 = MenuItem.create({
#     menu_id: 5,
#     item_name: "Spicy Veggie Burger",
#     item_price: 6.20,
#     description: "With avocado, grilled onions, tomato & sriracha"
#   })
# menu5_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/cozyvegburger.jpeg")
# menu5_item6.photo.attach(io: menu5_item6img, filename: 'cozyvegburger.jpeg')

# menu5_item7 = MenuItem.create({
#     menu_id: 5,
#     item_name: "Fish & Chips",
#     item_price: 8.05,
#     description: "With tartar sauce"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu5_item7.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu5_item8 = MenuItem.create({
#     menu_id: 5,
#     item_name: "8 pc. Chicken Wings",
#     item_price: 8.50,
#     description: "W. french fries & your choice of mild, hot, honey BBQ, teriyaki or suicidal"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu5_item8.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu5_item9 = MenuItem.create({
#     menu_id: 5,
#     item_name: "Turkey & Roast Beef",
#     item_price: 8.20,
#     description: "A tasty triple layered sandwich on thinly sliced rye with coleslaw & Russian dressing"
#   })
# menu5_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/cozysandwich.jpeg")
# menu5_item9.photo.attach(io: menu5_item9img, filename: 'cozysandwich.jpeg')

# menu5_item10 = MenuItem.create({
#     menu_id: 5,
#     item_name: "Veggie Sandwich",
#     item_price: 5.35,
#     description: "Lettuce, tomatoes, roasted peppers, onions & cucumbers"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu5_item10.photo.attach(io: genericImg, filename: 'JWongEats.png')

# puts("Seeding Chick Fil-A...")
# # Chick Fil-A
# # https://www.ubereats.com/store/chick-fil-a-2319-us-highway-22-w/rNUwvOArRouIS9Q0xJfHEQ?diningMode=DELIVERY
# menu6_item1 = MenuItem.create({
#     menu_id: 6,
#     item_name: "Chick-fil-A® Chicken Sandwich",
#     item_price: 5.56,
#     description: "A boneless breast of chicken seasoned to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips. Also available on a multigrain bun"
#   })
# menu6_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/cfasand.jpeg")
# menu6_item1.photo.attach(io: menu6_item1img, filename: 'cfasand.jpeg')

# menu6_item2 = MenuItem.create({
#     menu_id: 6,
#     item_name: "Chick-fil-A® Deluxe Sandwich",
#     item_price: 6.75,
#     description: "A boneless breast of chicken seasoned to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips, Green Leaf lettuce, tomato and American cheese. Also available on a multigrain bun."
#   })
# menu6_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/cfadeluxe.jpeg")
# menu6_item2.photo.attach(io: menu6_item2img, filename: 'cfadeluxe.jpeg')

# menu6_item3 = MenuItem.create({
#     menu_id: 6,
#     item_name: "Chick-fil-A Waffle Potato Fries®",
#     item_price: 2.99,
#     description: "Waffle-cut potatoes cooked in canola oil until crispy outside and tender inside. Sprinkled with Sea Salt."
#   })
# menu6_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/cfafries.jpeg")
# menu6_item3.photo.attach(io: menu6_item3img, filename: 'cfafries.jpeg')

# menu6_item4 = MenuItem.create({
#     menu_id: 6,
#     item_name: "Chick-fil-A® Nuggets",
#     item_price: 5.95,
#     description: "Bite-sized pieces of boneless chicken breast, seasoned to perfection, freshly breaded and pressure cooked in 100% refined peanut oil. Available with choice of dipping sauce."
#   })
# menu6_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/cfanuggs.jpeg")
# menu6_item4.photo.attach(io: menu6_item4img, filename: 'cfanuggs.jpeg')

# menu6_item5 = MenuItem.create({
#     menu_id: 6,
#     item_name: "Cobb Salad",
#     item_price: 11.99,
#     description: "Chick-fil-A® Nuggets, freshly breaded and pressure-cooked, sliced and served on a fresh bed of mixed greens, topped with roasted corn kernels, a blend of shredded Monterey Jack and Cheddar cheeses, crumbled bacon, sliced hard-boiled egg and grape tomatoes. Prepared fresh daily. Served with Charred Tomato and Crispy Red Bell Peppers. Pairs well with Avocado Lime Ranch dressing."
#   })
# menu6_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/cfacobb.jpeg")
# menu6_item5.photo.attach(io: menu6_item5img, filename: 'cfacobb.jpeg')

# menu6_item6 = MenuItem.create({
#     menu_id: 6,
#     item_name: "Market Salad",
#     item_price: 12.29,
#     description: "Sliced grilled chicken breast served on a fresh bed of mixed greens, topped with crumbled blue cheese and a mix of red and green apples, strawberries and blueberries. Prepared fresh daily. Served with Harvest Nut Granola and Roasted Almonds. Pairs well with Zesty Apple Cider Vinaigrette."
#   })
# menu6_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/cfamarket.jpeg")
# menu6_item6.photo.attach(io: menu6_item6img, filename: 'cfamarket.jpeg')

# menu6_item7 = MenuItem.create({
#     menu_id: 6,
#     item_name: "Smokehouse BBQ Bacon Sandwich",
#     item_price: 10.09,
#     description: "A boneless breast of chicken, marinated with a special blend of seasonings and grilled for a tender and juicy backyard-grilled taste, served on a toasted, buttered sweet yeast bun with Colby-Jack cheese, bacon hand-tossed in a brown sugar and pepper blend, and Green Leaf lettuce. Topped with zesty Smokehouse BBQ sauce."
#   })
# menu6_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/cfabacon.jpeg")
# menu6_item7.photo.attach(io: menu6_item7img, filename: 'cfabacon.jpeg')

# menu6_item8 = MenuItem.create({
#     menu_id: 6,
#     item_name: "Chick-fil-A® Grilled Chicken Club Sandwich",
#     item_price: 10.09,
#     description: "A lemon-herb marinated boneless breast of chicken, grilled for a tender and juicy backyard-smokey taste, served on a toasted Multigrain Brioche bun with Colby Jack cheese, applewood smoked bacon, Green Leaf lettuce and tomato. Pairs well with Honey Roasted BBQ Sauce."
#   })
# menu6_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/cfaclub.jpeg")
# menu6_item8.photo.attach(io: menu6_item8img, filename: 'cfaclub.jpeg')

# menu6_item9 = MenuItem.create({
#     menu_id: 6,
#     item_name: "Coca-Cola®",
#     item_price: 2.69,
#     description: "Fountain beverage. A product of The Coca-Cola Company."
#   })
# menu6_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/cfacoke.jpeg")
# menu6_item9.photo.attach(io: menu6_item9img, filename: 'cfacoke.jpeg')

# menu6_item10 = MenuItem.create({
#     menu_id: 6,
#     item_name: "Chocolate Chunk Cookie",
#     item_price: 1.95,
#     description: "Cookies have both semi-sweet dark and milk chocolate chunks, along with wholesome oats."
#   })
# menu6_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/cfacookie.jpeg")
# menu6_item10.photo.attach(io: menu6_item10img, filename: 'cfacookie.jpeg')

# puts("Seeding McDonald's...")
# # McDonald's
# # https://www.ubereats.com/store/mcdonalds-2404-us-22/SgmYBvXGTyOpO_WH9YFOFQ?diningMode=DELIVERY
# menu7_item1 = MenuItem.create({
#     menu_id: 7,
#     item_name: "Big Mac Meal",
#     item_price: 10.99,
#     description: "A Big Mac with a side of fries and a drink"
#   })
# menu7_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/mcdmacmeal.jpeg")
# menu7_item1.photo.attach(io: menu7_item1img, filename: 'mcdmacmeal.jpeg')

# menu7_item2 = MenuItem.create({
#     menu_id: 7,
#     item_name: "Crispy Chicken Sandwich",
#     item_price: 4.69,
#     description: "Chicken sandwich with pickles"
#   })
# menu7_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/mcdchick.jpeg")
# menu7_item2.photo.attach(io: menu7_item2img, filename: 'mcdchick.jpeg')

# menu7_item3 = MenuItem.create({
#     menu_id: 7,
#     item_name: "20 Piece McNuggets",
#     item_price: 7.09,
#     description: "20 Pieces of chicken McNuggets with sauce"
#   })
# menu7_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/mcdnugg.jpeg")
# menu7_item3.photo.attach(io: menu7_item3img, filename: 'mcdnugg.jpeg')

# menu7_item4 = MenuItem.create({
#     menu_id: 7,
#     item_name: "Medium French Fries",
#     item_price: 3.89,
#     description: "Golden-fried french fries"
#   })
# menu7_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/mcdfry.jpeg")
# menu7_item4.photo.attach(io: menu7_item4img, filename: 'mcdfry.jpeg')

# menu7_item5 = MenuItem.create({
#     menu_id: 7,
#     item_name: "Triple Cheeseburger",
#     item_price: 4.49,
#     description: "Triple cheeseburger with pickles, ketchup"
#   })
# menu7_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/mcdtriple.jpeg")
# menu7_item5.photo.attach(io: menu7_item5img, filename: 'mcdtriple.jpeg')

# menu7_item6 = MenuItem.create({
#     menu_id: 7,
#     item_name: "Filet O Fish Meal",
#     item_price: 10.19,
#     description: "Filet O Fish with a side of fries and a drink"
#   })
# menu7_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/mcdfiletmeal.jpeg")
# menu7_item6.photo.attach(io: menu7_item6img, filename: 'mcdfiletmeal.jpeg')

# menu7_item7 = MenuItem.create({
#     menu_id: 7,
#     item_name: "Hamburger - Happy meal",
#     item_price: 4.49,
#     description: "Our famous Happy Meal with a hamburger, apple slices, fries, and milk"
#   })
# menu7_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/mcdhappy.jpeg")
# menu7_item7.photo.attach(io: menu7_item7img, filename: 'mcdhappy.jpeg')

# menu7_item8 = MenuItem.create({
#     menu_id: 7,
#     item_name: "Apple Pie",
#     item_price: 1.69,
#     description: "Baked small apple pie"
#   })
# menu7_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/mcdpie.jpeg")
# menu7_item8.photo.attach(io: menu7_item8img, filename: 'mcdpie.jpeg')

# menu7_item9 = MenuItem.create({
#     menu_id: 7,
#     item_name: "Oreo McFlurry",
#     item_price: 4.89,
#     description: "Oreos and Vanilla Ice Cream blended together"
#   })
# menu7_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/mcdflurry.jpeg")
# menu7_item9.photo.attach(io: menu7_item9img, filename: 'mcdflurry.jpeg')


# menu7_item10 = MenuItem.create({
#     menu_id: 7,
#     item_name: "Coke",
#     item_price: 2.09,
#     description: "Medium sized Coke"
#   })
# menu7_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/mcdcoke.jpeg")
# menu7_item10.photo.attach(io: menu7_item10img, filename: 'mcdcoke.jpeg')


# puts("Seeding The Halal Guys...")
# # The Halal Guys
# # https://www.ubereats.com/store/the-halal-guys-union-nj/O1k53TVDR32V5FnWDxuGyw?diningMode=DELIVERY
# menu8_item1 = MenuItem.create({
#     menu_id: 8,
#     item_name: "Chicken & Beef Gyro Platter",
#     item_price: 11.09,
#     description: "Platters served with combo of chicken and beef gyro. Small platters are served with one white sauce and one red sauce. Regular platters are served with two white sauces and one red sauce."
#   })
# menu8_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/halalcombo.jpeg")
# menu8_item1.photo.attach(io: menu8_item1img, filename: 'halalcombo.jpeg')
  

# menu8_item2 = MenuItem.create({
#     menu_id: 8,
#     item_name: "Chicken Platter",
#     item_price: 11.09,
#     description: "Platters are served with one white sauce and one red sauce. Regular platters are served with two white sauces and one red sauce."
#   })
# menu8_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/halalchick.jpeg")
# menu8_item2.photo.attach(io: menu8_item2img, filename: 'halalchick.jpeg')

# menu8_item3 = MenuItem.create({
#     menu_id: 8,
#     item_name: "Beef Gyro Platter",
#     item_price: 11.09,
#     description: "Platters are served with one white sauce and one red sauce. Regular platters are served with two white sauces and one red sauce."
#   })
# menu8_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/halalbeef.jpeg")
# menu8_item3.photo.attach(io: menu8_item3img, filename: 'halalbeef.jpeg')

# menu8_item4 = MenuItem.create({
#     menu_id: 8,
#     item_name: "Falafel Platter",
#     item_price: 11.09,
#     description: "Platters are served with one white sauce and one red sauce. Regular platters are served with two white sauces and one red sauce."
#   })
# menu8_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/halalfalafel.jpeg")
# menu8_item4.photo.attach(io: menu8_item4img, filename: 'halalfalafel.jpeg')

# menu8_item5 = MenuItem.create({
#     menu_id: 8,
#     item_name: "Falafel Sandwich",
#     item_price: 9.99,
#     description: "Served with pita, lettuce, tomatoes and choice of toppings. Served with one white sauce and one red sauce."
#   })
# menu8_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/halalfalafelsand.jpeg")
# menu8_item5.photo.attach(io: menu8_item5img, filename: 'halalfalafelsand.jpeg')

# menu8_item6 = MenuItem.create({
#     menu_id: 8,
#     item_name: "French Fries",
#     item_price: 3.49,
#     description: "Classic crinkle-cut fried potatoes."
#   })
# menu8_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/halalfries.jpeg")
# menu8_item6.photo.attach(io: menu8_item6img, filename: 'halalfries.jpeg')

# menu8_item7 = MenuItem.create({
#     menu_id: 8,
#     item_name: "Baklava",
#     item_price: 3.59,
#     description: "Rich, sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened and held together with syrup or honey. Allergen: Contains Gluten, Casein, Walnut, Cashew, and Pistachios"
#   })
# menu8_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/halalbaklava.jpeg")
# menu8_item7.photo.attach(io: menu8_item7img, filename: 'halalbaklava.jpeg')

# menu8_item8 = MenuItem.create({
#     menu_id: 8,
#     item_name: "Hummus",
#     item_price: 3.59,
#     description: "The Mediterranean spread made from cooked, mashed chickpeas or other beans, blended with tahini, olive oil, lemon juice, salt, and garlic. Allergen: Contains Sesame"
#   })
# menu8_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/halalhummus.jpeg")
# menu8_item8.photo.attach(io: menu8_item8img, filename: 'halalhummus.jpeg')

# menu8_item9 = MenuItem.create({
#     menu_id: 8,
#     item_name: "Bottled Coke",
#     item_price: 2.79,
#     description: "16oz bottle of Coca-Cola"
#   })
# menu8_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/halalcoke.jpeg")
# menu8_item9.photo.attach(io: menu8_item9img, filename: 'halalcoke.jpeg')

# menu8_item10 = MenuItem.create({
#     menu_id: 8,
#     item_name: "Snapple Lemon Tea",
#     item_price: 2.79,
#     description: "16oz bottle of Snapple Lemon Tea"
#   })
# menu8_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/halaltea.jpeg")
# menu8_item10.photo.attach(io: menu8_item10img, filename: 'halaltea.jpeg')

# puts("Seeding Subway...")
# # Subway
# # https://www.ubereats.com/store/subway-2497-route-22-west/vOV_1zLzQ8CKV9KDmwEKCw?diningMode=DELIVERY
# menu9_item1 = MenuItem.create({
#     menu_id: 9,
#     item_name: "Spicy Italian Footlong Regular Sub",
#     item_price: 8.99,
#     description: "Our Spicy Italian sandwich is a combo of pepperoni and Genoa salami. Pile on cheese, crunchy veggies, and finish it with your favorite sauce. Or don't. Your call."
#   })
# menu9_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/subitalian.jpeg")
# menu9_item1.photo.attach(io: menu9_item1img, filename: 'subitalian.jpeg')

# menu9_item2 = MenuItem.create({
#     menu_id: 9,
#     item_name: "Meatball Marinara Footlong Regular Sub",
#     item_price: 8.99,
#     description: "The Meatball Marinara sandwich is drenched in irresistible marinara sauce, sprinkled with Parmesan cheese, topped with whatever you want (no judgement) and perfectly toasted just for you."
#   })
# menu9_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/submeatball.jpeg")
# menu9_item2.photo.attach(io: menu9_item2img, filename: 'submeatball.jpeg')

# menu9_item3 = MenuItem.create({
#     menu_id: 9,
#     item_name: "Black Forest Ham Footlong Regular Sub",
#     item_price: 8.99,
#     description: "Our Black Forest Ham sandwich is a true classic. We add lettuce, baby spinach, cucumbers, green peppers and red onions to our delicious, thin-sliced ham and serve it on our Hearty Multigrain bread. Want cheese? Just ask."
#   })
# menu9_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/subblackham.jpeg")
# menu9_item3.photo.attach(io: menu9_item3img, filename: 'subblackham.jpeg')

# menu9_item4 = MenuItem.create({
#     menu_id: 9,
#     item_name: "B.L.T. 6 Inch Regular Sub",
#     item_price: 6.71,
#     description: "The sub that proves great things come in threes. In this case, those three things happen to be hickory smoked bacon, lettuce and juicy tomatoes. While there’s no scientific way of proving it, this B.L.T might be the most perfect sub in existence."
#   })
# menu9_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/subblt.jpeg")
# menu9_item4.photo.attach(io: menu9_item4img, filename: 'subblt.jpeg')

# menu9_item5 = MenuItem.create({
#     menu_id: 9,
#     item_name: "Italian B.M.T.® Footlong Pro (Double Protein)",
#     item_price: 14.02,
#     description: "The Italian B.M.T.® sandwich is filled with Genoa salami, spicy pepperoni, and Black Forest Ham. Big. Meaty. Tasty. Get it."
#   })
# menu9_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/subbmt.jpeg")
# menu9_item5.photo.attach(io: menu9_item5img, filename: 'subbmt.jpeg')

# menu9_item6 = MenuItem.create({
#     menu_id: 9,
#     item_name: "Veggie Patty 6 Inch Regular Sub",
#     item_price: 7.67,
#     description: "Delicious vegan patties with lettuce, tomatoes, cucumbers, green peppers and red onions, all served on our freshly baked Hearty Multigrain bread."
#   })
# menu9_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/subveg.jpeg")
# menu9_item6.photo.attach(io: menu9_item6img, filename: 'subveg.jpeg')

# menu9_item7 = MenuItem.create({
#     menu_id: 9,
#     item_name: "White Chip Macadamia nut",
#     item_price: 0.69,
#     description: "Chunks of Macadamia nuts and white chips in a ridiculously delicious cookie."
#   })
# menu9_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/subwhitechoc.jpeg")
# menu9_item7.photo.attach(io: menu9_item7img, filename: 'subwhitechoc.jpeg')

# menu9_item8 = MenuItem.create({
#     menu_id: 9,
#     item_name: "Raspberry Cheesecake",
#     item_price: 0.60,
#     description: "The flavor of sweet raspberry. The richness of cheesecake. Together in one awesome cookie creation."
#   })
# menu9_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/subrasp.jpeg")
# menu9_item8.photo.attach(io: menu9_item8img, filename: 'subrasp.jpeg')

# menu9_item9 = MenuItem.create({
#     menu_id: 9,
#     item_name: "Miss Vickie’s® Jalapeño",
#     item_price: 1.42,
#     description: "Made with jalapeño seasoning for enough heat to make things deliciously interesting. And every spicy bite is made with no artificial flavors or preservatives."
#   })
# menu9_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/subchips.jpeg")
# menu9_item9.photo.attach(io: menu9_item9img, filename: 'subchips.jpeg')

# menu9_item10 = MenuItem.create({
#     menu_id: 9,
#     item_name: "Dasani® Water",
#     item_price: 2.19,
#     description: "As delicious as our sandwiches are, they are even better when paired with the perfect side and drink or even adding a little something extra. With such a variety to choose from, there's truly something for every taste."
#   })
# menu9_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/subwater.jpeg")
# menu9_item10.photo.attach(io: menu9_item10img, filename: 'subwater.jpeg')

# puts("Seeding Union Plaza Diner...")
# # Union Plaza Diner
# # http://places.singleplatform.com/union-plaza-diner/menu?ref=google
# menu10_item1 = MenuItem.create({
#     menu_id: 10,
#     item_name: "10 Buffalo Chicken Wings",
#     item_price: 11.95,
#     description: "Cooked wing of a chicken coated in sauce or seasoning"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu10_item1.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu10_item2 = MenuItem.create({
#     menu_id: 10,
#     item_name: "Chicken Fingers with Honey Mustard",
#     item_price: 11.95,
#     description: "Breaded or battered crispy chicken"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu10_item2.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu10_item3 = MenuItem.create({
#     menu_id: 10,
#     item_name: "Vegetable Quesadilla",
#     item_price: 10.95,
#     description: "Served with Salsa, Sour Crea, and Guacaomole"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu10_item3.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu10_item4 = MenuItem.create({
#     menu_id: 10,
#     item_name: "Chicken Quesadilla",
#     item_price: 11.95,
#     description: "Served with Salsa, Sour Cream, and Guacamole"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu10_item4.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu10_item5 = MenuItem.create({
#     menu_id: 10,
#     item_name: "Potato Salad",
#     item_price: 3.75,
#     description: "Cold dish made from seasoned potatoes"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu10_item5.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu10_item6 = MenuItem.create({
#     menu_id: 10,
#     item_name: "Coleslaw",
#     item_price: 3.49,
#     description: "Cabbage salad"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu10_item6.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu10_item7 = MenuItem.create({
#     menu_id: 10,
#     item_name: "Turkey Club Sandwich",
#     item_price: 12.95,
#     description: "Bacon, lettuce, & tomato"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu10_item7.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu10_item8 = MenuItem.create({
#     menu_id: 10,
#     item_name: "Chicken Salad Club Sandwich",
#     item_price: 12.95,
#     description: "Bacon, lettuce & tomato"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu10_item8.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu10_item9 = MenuItem.create({
#     menu_id: 10,
#     item_name: "Grilled Chicken Sandwich",
#     item_price: 12.45,
#     description: "American cheese, lettuce, & tomato"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu10_item9.photo.attach(io: genericImg, filename: 'JWongEats.png')

# menu10_item10 = MenuItem.create({
#     menu_id: 10,
#     item_name: "Chicken, Eggplant, & Melted Swiss Cheese Sandwich",
#     item_price: 12.95,
#     description: "Served on a hard roll with french fries"
#   })
# genericImg = open("https://jwong-eats-seeds.s3.amazonaws.com/JWongEats.png")
# menu10_item10.photo.attach(io: genericImg, filename: 'JWongEats.png')


# puts("Seeding White Castle...")
# # White Castle
# # https://www.ubereats.com/store/white-castle-2458-rt-22/ps_ruJhmRIilTnRVNM1dcA?diningMode=DELIVERY
# menu11_item1 = MenuItem.create({
#     menu_id: 11,
#     item_name: "THE ORIGINAL SLIDER",
#     item_price: 1.00,
#     description: "Our Original Slider, made with 100% beef, steam grilled on a bed of onions and served on a signature bun. NJ/NY topped with Ketchup."
#   })
# menu11_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/wcslider.jpeg")
# menu11_item1.photo.attach(io: menu11_item1img, filename: 'wcslider.jpeg')

# menu11_item2 = MenuItem.create({
#     menu_id: 11,
#     item_name: "CHEESE SLIDER CAL 170-180",
#     item_price: 1.15,
#     description: "Our Original Sliders, made with 100% beef, steamed grilled on a bed of onions and topped with a slice of American, Jalapeno, or Cheddar cheese."
#   })
# menu11_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/wccheeseslider.jpeg")
# menu11_item2.photo.attach(io: menu11_item2img, filename: 'wccheeseslider.jpeg')

# menu11_item3 = MenuItem.create({
#     menu_id: 11,
#     item_name: "DOUBLE CHEESE SLIDER CAL 300-330",
#     item_price: 2.29,
#     description: "Our Double Cheese Slider includes two 100% beef patties steam-grilled on a bed of onions plus two slices of melted cheese: American, Jalapeno, or Cheddar."
#   })
# menu11_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/wcdoublecheese.jpeg")
# menu11_item3.photo.attach(io: menu11_item3img, filename: 'wcdoublecheese.jpeg')

# menu11_item4 = MenuItem.create({
#     menu_id: 11,
#     item_name: "PANKO FISH SLIDER CAL 340-350",
#     item_price: 2.29,
#     description: "Tender, flaky Alaska Pollock with seasoned and crispy panko breading topped with American cheese."
#   })
# menu11_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/wcfishslider.jpeg")
# menu11_item4.photo.attach(io: menu11_item4img, filename: 'wcfishslider.jpeg')

# menu11_item5 = MenuItem.create({
#     menu_id: 11,
#     item_name: "CRAVE CASE WITH CHEESE CAL 5100-5400",
#     item_price: 34.50,
#     description: "30 Original Sliders, made with 100% beef, topped with cheese."
#   })
# menu11_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/wccrave.jpeg")
# menu11_item5.photo.attach(io: menu11_item5img, filename: 'wccrave.jpeg')

# menu11_item6 = MenuItem.create({
#     menu_id: 11,
#     item_name: "FRENCH FRIES CAL 330-350",
#     item_price: 2.29,
#     description: "Classic crinkle cut fries, crispy on the outside and tender on the inside."
#   })
# menu11_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/wcfries.jpeg")
# menu11_item6.photo.attach(io: menu11_item6img, filename: 'wcfries.jpeg')

# menu11_item7 = MenuItem.create({
#     menu_id: 11,
#     item_name: "MOZZARELLA CHEESE STICKS CAL 440",
#     item_price: 2.99,
#     description: "A classic – made with real mozzarella cheese and served with zesty marinara dipping sauce."
#   })
# menu11_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/wcmozzstick.jpeg")
# menu11_item7.photo.attach(io: menu11_item7img, filename: 'wcmozzstick.jpeg')

# menu11_item8 = MenuItem.create({
#     menu_id: 11,
#     item_name: "SHAKES CAL 460",
#     item_price: 2.99,
#     description: "SMALL VANILLA OR CHOCOLATE"
#   })
# menu11_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/wcshakes.jpeg")
# menu11_item8.photo.attach(io: menu11_item8img, filename: 'wcshakes.jpeg')

# menu11_item9 = MenuItem.create({
#     menu_id: 11,
#     item_name: "COCA-COLA Freestyle® Drinks",
#     item_price: 2.39,
#     description: "SMALL COCA-COLA DRINK"
#   })
# menu11_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/wcdrinks.jpeg")
# menu11_item9.photo.attach(io: menu11_item9img, filename: 'wcdrinks.jpeg')

# menu11_item10 = MenuItem.create({
#     menu_id: 11,
#     item_name: "MONSTER ENERGY CAL 210",
#     item_price: 2.99,
#     description: "Tear into a 16 ounce can of the meanest energy drink on the planet. Monster packs a powerful punch but has a smooth easy drinking flavor."
#   })
# menu11_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/wcmonster.jpeg")
# menu11_item10.photo.attach(io: menu11_item10img, filename: 'wcmonster.jpeg')


# puts("Seeding Red Lobster...")
# # Red Lobster
# # https://www.redlobster.com/menu
# menu12_item1 = MenuItem.create({
#     menu_id: 12,
#     item_name: "Lobster Lover's Dream®",
#     item_price: 43.99,
#     description: "A roasted rock lobster tail, butter-poached Maine lobster tail and lobster-and-shrimp linguini in a creamy lobster sauce. Served with melted butter, lemon and choice of two sides."
#   })
# menu12_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/redlover.jpeg")
# menu12_item1.photo.attach(io: menu12_item1img, filename: 'redlover.jpeg')

# menu12_item2 = MenuItem.create({
#     menu_id: 12,
#     item_name: "New! Date Night Feast For Two",
#     item_price: 71.99,
#     description: "Two butter-poached Maine lobster tails, two 7 oz. sirloins**, two jumbo grilled shrimp skewers, a shareable bacon mac & cheese in a creamy lobster cheese sauce and choice of sides."
#   })
# menu12_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/reddate.jpeg")
# menu12_item2.photo.attach(io: menu12_item2img, filename: 'reddate.jpeg')

# menu12_item3 = MenuItem.create({
#     menu_id: 12,
#     item_name: "Ultimate Surf & Turf**",
#     item_price: 43.49,
#     description: "A 6 oz. filet mignon**, butter-poached Maine lobster tail and bacon-wrapped sea scallops. Served with lemon and choice of two sides."
#   })
# menu12_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/redsurf.jpeg")
# menu12_item3.photo.attach(io: menu12_item3img, filename: 'redsurf.jpeg')

# menu12_item4 = MenuItem.create({
#     menu_id: 12,
#     item_name: "Shrimp Linguini Alfredo",
#     item_price: 16.99,
#     description: "Tender shrimp in a creamy garlic Alfredo sauce on a bed of linguini."
#   })
# menu12_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/redshrimp.jpeg")
# menu12_item4.photo.attach(io: menu12_item4img, filename: 'redshrimp.jpeg')

# menu12_item5 = MenuItem.create({
#     menu_id: 12,
#     item_name: "New England Clam Chowder",
#     item_price: 5.49,
#     description: ""
#   })
# menu12_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/redchow.jpeg")
# menu12_item5.photo.attach(io: menu12_item5img, filename: 'redchow.jpeg')

# menu12_item6 = MenuItem.create({
#     menu_id: 12,
#     item_name: "One Dozen Cheddar Bay Biscuits®",
#     item_price: 5.29,
#     description: "All entrées come with two warm, house-made Cheddar Bay Biscuits. Not enough? Order extra here."
#   })
# menu12_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/redbiscuit.jpg")
# menu12_item6.photo.attach(io: menu12_item6img, filename: 'redbiscuit.jpg')

# menu12_item7 = MenuItem.create({
#     menu_id: 12,
#     item_name: "Maine Lobster Tail - Classic",
#     item_price: 13.99,
#     description: "Served with lemon and melted butter."
#   })
# menu12_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/redtail.jpeg")
# menu12_item7.photo.attach(io: menu12_item7img, filename: 'redtail.jpeg')

# menu12_item8 = MenuItem.create({
#     menu_id: 12,
#     item_name: "Whole Desserts",
#     item_price: 24.99,
#     description: "Choose from Chocolate Wave, Vanilla Bean Cheesecake, Key Lime Pie or Triple-Chocolate Brownie."
#   })
# menu12_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/reddessert.jpg")
# menu12_item8.photo.attach(io: menu12_item8img, filename: 'reddessert.jpg')

# menu12_item9 = MenuItem.create({
#     menu_id: 12,
#     item_name: "Mtn Dew® 12 oz. Can",
#     item_price: 1.85,
#     description: ""
#   })
# menu12_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/reddew.jpeg")
# menu12_item9.photo.attach(io: menu12_item9img, filename: 'reddew.jpeg')

# menu12_item10 = MenuItem.create({
#     menu_id: 12,
#     item_name: "Pepsi® Family Pack (four 12 oz. cans)",
#     item_price: 5.00,
#     description: ""
#   })
# menu12_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/redpepsi.jpeg")
# menu12_item10.photo.attach(io: menu12_item10img, filename: 'redpepsi.jpeg')


# puts("Seeding Popeyes...")
# # Popeyes
# # https://www.ubereats.com/store/popeyes-union/Qj0PV4PbTduvftuVobYAng?diningMode=DELIVERY
# menu13_item1 = MenuItem.create({
#     menu_id: 13,
#     item_name: "Spicy Chicken Sandwich",
#     item_price: 6.09,
#     description: "Sandwich only"
#   })
# menu13_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/popspicychick.jpeg")
# menu13_item1.photo.attach(io: menu13_item1img, filename: 'popspicychick.jpeg')

# menu13_item2 = MenuItem.create({
#     menu_id: 13,
#     item_name: "Mixed Chicken (8 Pcs)",
#     item_price: 31.70,
#     description: "Includes one large signature side and four hot buttermilk biscuits."
#   })
# menu13_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/pop8pc.jpeg")
# menu13_item2.photo.attach(io: menu13_item2img, filename: 'pop8pc.jpeg')

# menu13_item3 = MenuItem.create({
#     menu_id: 13,
#     item_name: "8PC Nuggets A La Carte",
#     item_price: 4.86,
#     description: ""
#   })
# menu13_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/pop8nugg.jpeg")
# menu13_item3.photo.attach(io: menu13_item3img, filename: 'pop8nugg.jpeg')

# menu13_item4 = MenuItem.create({
#     menu_id: 13,
#     item_name: "Mixed Chicken (16 Pcs)",
#     item_price: 54.88,
#     description: "Includes three large signature sides and eight hot buttermilk biscuits."
#   })
# menu13_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/pop16pc.jpeg")
# menu13_item4.photo.attach(io: menu13_item4img, filename: 'pop16pc.jpeg')

# menu13_item5 = MenuItem.create({
#     menu_id: 13,
#     item_name: "Classic Flounder Fish Sandwich",
#     item_price: 5.39,
#     description: "Sandwich only"
#   })
# menu13_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/popfish.jpeg")
# menu13_item5.photo.attach(io: menu13_item5img, filename: 'popfish.jpeg')

# menu13_item6 = MenuItem.create({
#     menu_id: 13,
#     item_name: "Handcrafted Tenders (8 Pcs)",
#     item_price: 20.72,
#     description: "Include three sauces"
#   })
# menu13_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/pop8tender.jpeg")
# menu13_item6.photo.attach(io: menu13_item6img, filename: 'pop8tender.jpeg')

# menu13_item7 = MenuItem.create({
#     menu_id: 13,
#     item_name: "Spicy Flounder Fish Sandwich",
#     item_price: 5.39,
#     description: "Sandwich only"
#   })
# menu13_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/popspicyfish.jpeg")
# menu13_item7.photo.attach(io: menu13_item7img, filename: 'popspicyfish.jpeg')

# menu13_item8 = MenuItem.create({
#     menu_id: 13,
#     item_name: "Handcrafted Tenders (16 Pcs)",
#     item_price: 36.58,
#     description: "Include five sauces"
#   })
# menu13_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/pop16tender.jpeg")
# menu13_item8.photo.attach(io: menu13_item8img, filename: 'pop16tender.jpeg')

# menu13_item9 = MenuItem.create({
#     menu_id: 13,
#     item_name: "Mashed Potatoes with Cajun Gravy",
#     item_price: 4.62,
#     description: ""
#   })
# menu13_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/popmash.jpeg")
# menu13_item9.photo.attach(io: menu13_item9img, filename: 'popmash.jpeg')

# menu13_item10 = MenuItem.create({
#     menu_id: 13,
#     item_name: "Cajun Fries",
#     item_price: 4.62,
#     description: ""
#   })
# menu13_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/popfries.jpeg")
# menu13_item10.photo.attach(io: menu13_item10img, filename: 'popfries.jpeg')


# puts("Seeding IHOP...")
# # IHOP
# # https://www.ubereats.com/store/ihop-2500-route-22-e/uFrP7aYmRuGfcnFYlcNy-g?diningMode=DELIVERY
# menu14_item1 = MenuItem.create({
#     menu_id: 14,
#     item_name: "Belgian Waffle",
#     item_price: 9.27,
#     description: "Our house-made golden-brown Belgian waffle topped with whipped real butter."
#   })
# menu14_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/ihopwaffle.jpeg")
# menu14_item1.photo.attach(io: menu14_item1img, filename: 'ihopwaffle.jpeg')

# menu14_item2 = MenuItem.create({
#     menu_id: 14,
#     item_name: "Hash Browns",
#     item_price: 4.51,
#     description: ""
#   })
# menu14_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/ihophash.jpeg")
# menu14_item2.photo.attach(io: menu14_item2img, filename: 'ihophash.jpeg')

# menu14_item3 = MenuItem.create({
#     menu_id: 14,
#     item_name: "Pork Sausage Links",
#     item_price: 4.51,
#     description: ""
#   })
# menu14_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/ihoplinks.jpeg")
# menu14_item3.photo.attach(io: menu14_item3img, filename: 'ihoplinks.jpeg')

# menu14_item4 = MenuItem.create({
#     menu_id: 14,
#     item_name: "Hickory-Smoked Bacon Strips",
#     item_price: 4.51,
#     description: ""
#   })
# menu14_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/ihopbacon.jpeg")
# menu14_item4.photo.attach(io: menu14_item4img, filename: 'ihopbacon.jpeg')

# menu14_item5 = MenuItem.create({
#     menu_id: 14,
#     item_name: "Original Gluten-Friendly Pancakes - (Full Stack)",
#     item_price: 10.89,
#     description: "As tasty as the original, just gluten-friendlier. Four fluffy gluten-friendly pancakes topped with whipped real butter."
#   })
# menu14_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/ihopplainstack.jpeg")
# menu14_item5.photo.attach(io: menu14_item5img, filename: 'ihopplainstack.jpeg')

# menu14_item6 = MenuItem.create({
#     menu_id: 14,
#     item_name: "Strawberry Banana Pancakes",
#     item_price: 11.24,
#     description: "Little known fact: Strawberries and Bananas are best friends. Four fluffy buttermilk pancakes filled with fresh banana slices. Topped with glazed strawberries & more banana slices."
#   })
# menu14_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/ihopstrawbstack.jpeg")
# menu14_item6.photo.attach(io: menu14_item6img, filename: 'ihopstrawbstack.jpeg')

# menu14_item7 = MenuItem.create({
#     menu_id: 14,
#     item_name: "New York Cheesecake Pancakes",
#     item_price: 11.47,
#     description: "We’ve combined a New York classic with our classic pancakes. Four fluffy buttermilk pancakes filled with cheesecake bites & topped with glazed strawberries."
#   })
# menu14_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/ihopnycstack.jpeg")
# menu14_item7.photo.attach(io: menu14_item7img, filename: 'ihopnycstack.jpeg')

# menu14_item8 = MenuItem.create({
#     menu_id: 14,
#     item_name: "Swedish Crepes",
#     item_price: 10.20,
#     description: "Four delicate crepes topped with sweet-tart lingonberries & lingonberry butter."
#   })
# menu14_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/ihopcrepe.jpeg")
# menu14_item8.photo.attach(io: menu14_item8img, filename: 'ihopcrepe.jpeg')

# menu14_item9 = MenuItem.create({
#     menu_id: 14,
#     item_name: "Big Steak Omelette",
#     item_price: 14.95,
#     description: "Your hunger won’t be at steak with this one. Our omelette stuffed with steak, hash browns, green peppers, onions, mushrooms, tomatoes & Cheddar cheese. Served with our salsa."
#   })
# menu14_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/ihopsteakom.jpeg")
# menu14_item9.photo.attach(io: menu14_item9img, filename: 'ihopsteakom.jpeg')

# menu14_item10 = MenuItem.create({
#     menu_id: 14,
#     item_name: "Chicken Fajita Omelette",
#     item_price: 13.91,
#     description: "The perfect fiesta in one package. Our omelette stuffed with grilled chicken breast with Poblano & red bell peppers, roasted onions & Jack & Cheddar cheese blend. Served with salsa, sour cream & grilled Serrano pepper."
#   })
# menu14_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/ihopchickom.jpeg")
# menu14_item10.photo.attach(io: menu14_item10img, filename: 'ihopchickom.jpeg')


# puts("Seeding Starbucks...")
# # Starbucks
# # https://www.ubereats.com/store/starbucks-rt-22-center-island/gGp7vDqSTDSqMeO2zk7plg?diningMode=DELIVERY&ps=1
# menu15_item1 = MenuItem.create({
#     menu_id: 15,
#     item_name: "Chocolate Croissant",
#     item_price: 3.75,
#     description: "Two generous pieces of chocolate wrapped in a butter croissant with soft, flaky layers and a golden-brown crust. - VEGETARIAN"
#   })
# menu15_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/sbuxchoccr.jpeg")
# menu15_item1.photo.attach(io: menu15_item1img, filename: 'sbuxchoccr.jpeg')

# menu15_item2 = MenuItem.create({
#     menu_id: 15,
#     item_name: "Cheese Danish",
#     item_price: 3.75,
#     description: "Flaky, butter croissant dough with soft, warm cheese in the center. - VEGETARIAN"
#   })
# menu15_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/sbuxdanish.jpeg")
# menu15_item2.photo.attach(io: menu15_item2img, filename: 'sbuxdanish.jpeg')


# menu15_item3 = MenuItem.create({
#     menu_id: 15,
#     item_name: "White Chocolate Mocha",
#     item_price: 5.95,
#     description: "Our signature espresso meets white chocolate sauce and steamed milk, and then is finished off with sweetened whipped cream to create this supreme white chocolate delight."
#   })
# menu15_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/sbuxwhitechoc.jpeg")
# menu15_item3.photo.attach(io: menu15_item3img, filename: 'sbuxwhitechoc.jpeg')


# menu15_item4 = MenuItem.create({
#     menu_id: 15,
#     item_name: "Matcha Tea Latte",
#     item_price: 4.85,
#     description: "Smooth and creamy matcha sweetened just right and served with steamed milk. This favorite will transport your senses to pure green delight."
#   })
# menu15_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/sbuxmatcha.jpeg")
# menu15_item4.photo.attach(io: menu15_item4img, filename: 'sbuxmatcha.jpeg')


# menu15_item5 = MenuItem.create({
#     menu_id: 15,
#     item_name: "Java Chip Frappuccino® Blended Beverage",
#     item_price: 5.15,
#     description: "We blend mocha sauce and Frappuccino® chips with coffee, milk and ice, then top it off with whipped cream and a mocha drizzle to bring you endless java joy."
#   })
# menu15_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/sbuxjava.jpeg")
# menu15_item5.photo.attach(io: menu15_item5img, filename: 'sbuxjava.jpeg')


# menu15_item6 = MenuItem.create({
#     menu_id: 15,
#     item_name: "Pistachio Coffee Frappuccino® Blended Beverage",
#     item_price: 5.75,
#     description: "Sweet pistachio flavor blended with coffee, milk and ice, then finished with whipped cream and a salted brown-buttery topping—an icy-smooth, creamy delight to bring you into the new year."
#   })
# menu15_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/sbuxpistachio.jpeg")
# menu15_item6.photo.attach(io: menu15_item6img, filename: 'sbuxpistachio.jpeg')


# menu15_item7 = MenuItem.create({
#     menu_id: 15,
#     item_name: "Vanilla Sweet Cream Cold Brew",
#     item_price: 4.55,
#     description: "Our slow-steeped custom blend of Starbucks® Cold Brew coffee accented with vanilla and topped with a delicate float of house-made vanilla sweet cream that cascades throughout the cup. It's over-the-top and super-smooth."
#   })
# menu15_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/sbuxcold.jpeg")
# menu15_item7.photo.attach(io: menu15_item7img, filename: 'sbuxcold.jpeg')


# menu15_item8 = MenuItem.create({
#     menu_id: 15,
#     item_name: "Tomato & Mozzarella on Focaccia",
#     item_price: 6.85,
#     description: "Roasted tomatoes, mozzarella, spinach and basil pesto layered on toasted focaccia bread. - VEGETARIAN - HIGH-PROTEIN"
#   })
# menu15_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/sbuxfocaccia.jpeg")
# menu15_item8.photo.attach(io: menu15_item8img, filename: 'sbuxfocaccia.jpeg')


# menu15_item9 = MenuItem.create({
#     menu_id: 15,
#     item_name: "Chicken Caprese on Ciabatta",
#     item_price: 7.95,
#     description: "Slow-cooked chicken breast, mozzarella, balsamic-marinated tomatoes, basil pesto and spinach on soft ciabatta bread."
#   })
# menu15_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/sbuxciabatta.jpeg")
# menu15_item9.photo.attach(io: menu15_item9img, filename: 'sbuxciabatta.jpeg')


# menu15_item10 = MenuItem.create({
#     menu_id: 15,
#     item_name: "Strawberry Overnight Grains",
#     item_price: 4.35,
#     description: "Steel-cut oats, quinoa, chia seeds and coconutmilk combined with fresh strawberries and topped with shaved coconut and toasted almonds. - VEGAN"
#   })
# menu15_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/sbuxgrains.jpeg")
# menu15_item10.photo.attach(io: menu15_item10img, filename: 'sbuxgrains.jpeg')


# puts("Seeding Panda Express...")
# # Panda Express
# #nhttps://www.ubereats.com/store/panda-express-2704-us-22/pTOvVR1yRlizxzLH7_QlqA?diningMode=DELIVERY
# menu16_item1 = MenuItem.create({
#     menu_id: 16,
#     item_name: "Chow Mein",
#     item_price: 4.50,
#     description: ""
#   })
# menu16_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/pandachowmein.jpeg")
# menu16_item1.photo.attach(io: menu16_item1img, filename: 'pandachowmein.jpeg')


# menu16_item2 = MenuItem.create({
#     menu_id: 16,
#     item_name: "Fried Rice",
#     item_price: 4.50,
#     description: ""
#   })
# menu16_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/pandafriedrice.jpeg")
# menu16_item2.photo.attach(io: menu16_item2img, filename: 'pandafriedrice.jpeg')


# menu16_item3 = MenuItem.create({
#     menu_id: 16,
#     item_name: "The Original Orange Chicken",
#     item_price: 5.75,
#     description: ""
#   })
# menu16_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/pandaorangechick.jpeg")
# menu16_item3.photo.attach(io: menu16_item3img, filename: 'pandaorangechick.jpeg')


# menu16_item4 = MenuItem.create({
#     menu_id: 16,
#     item_name: "Honey Walnut Shrimp",
#     item_price: 7.35,
#     description: ""
#   })
# menu16_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/pandawalnutshrimp.jpeg")
# menu16_item4.photo.attach(io: menu16_item4img, filename: 'pandawalnutshrimp.jpeg')


# menu16_item5 = MenuItem.create({
#     menu_id: 16,
#     item_name: "Kung Pao Chicken",
#     item_price: 5.75,
#     description: ""
#   })
# menu16_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/pandakungpao.jpeg")
# menu16_item5.photo.attach(io: menu16_item5img, filename: 'pandakungpao.jpeg')


# menu16_item6 = MenuItem.create({
#     menu_id: 16,
#     item_name: "Veggie Spring Roll",
#     item_price: 2.50,
#     description: "2pcs"
#   })
# menu16_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/pandaspringroll.jpeg")
# menu16_item6.photo.attach(io: menu16_item6img, filename: 'pandaspringroll.jpeg')


# menu16_item7 = MenuItem.create({
#     menu_id: 16,
#     item_name: "Super Greens",
#     item_price: 4.50,
#     description: ""
#   })
# menu16_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/pandagreens.jpeg")
# menu16_item7.photo.attach(io: menu16_item7img, filename: 'pandagreens.jpeg')


# menu16_item8 = MenuItem.create({
#     menu_id: 16,
#     item_name: "Cream Cheese Rangoon",
#     item_price: 2.50,
#     description: "3pcs"
#   })
# menu16_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/pandarangoon.jpeg")
# menu16_item8.photo.attach(io: menu16_item8img, filename: 'pandarangoon.jpeg')


# menu16_item9 = MenuItem.create({
#     menu_id: 16,
#     item_name: "Seagrams Ginger Ale",
#     item_price: 2.65,
#     description: "20oz Bottle"
#   })
# menu16_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/pandagingerale.jpeg")
# menu16_item9.photo.attach(io: menu16_item9img, filename: 'pandagingerale.jpeg')


# menu16_item10 = MenuItem.create({
#     menu_id: 16,
#     item_name: "Honest Half Tea Half Lemonade",
#     item_price: 3.00,
#     description: "16oz Bottle"
#   })
# menu16_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/pandatea.jpeg")
# menu16_item10.photo.attach(io: menu16_item10img, filename: 'pandatea.jpeg')

# puts("Seeding TGI Fridays...")
# # TGI Fridays
# # https://www.ubereats.com/store/tgi-fridays-699-springfield-nj/tp2iG1oSRsiapFXk4BX0cw?diningMode=DELIVERY
# menu17_item1 = MenuItem.create({
#     menu_id: 17,
#     item_name: "Fridays Signature Whiskey-Glazed Burger",
#     item_price: 17.35,
#     description: "Signature Whiskey-Glaze, cheddar, lettuce, red onions, tomato, pickles and bacon."
#   })
# menu17_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/tgifburger.jpeg")
# menu17_item1.photo.attach(io: menu17_item1img, filename: 'tgifburger.jpeg')

# menu17_item2 = MenuItem.create({
#     menu_id: 17,
#     item_name: "Cajun Shrimp & Chicken Pasta",
#     item_price: 22.18,
#     description: "Sauteed shrimp, chicken, red bell peppers, spicy Cajun Alfredo sauce, Parmesan-Romano, fettuccine and a warm garlic breadstick."
#   })
# menu17_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/tgifcajunpasta.jpeg")
# menu17_item2.photo.attach(io: menu17_item2img, filename: 'tgifcajunpasta.jpeg')

# menu17_item3 = MenuItem.create({
#     menu_id: 17,
#     item_name: "CRISPY WHISKEY COMBO",
#     item_price: 27.93,
#     description: "Half Rack double-based pork Big Ribs with Whiskey-Glaze and crispy Fried Shrimp served with Whiskey-Glaze on the side. Served with mashed potatoes and lemon-butter broccoli."
#   })
# menu17_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/tgifcrispy.jpeg")
# menu17_item3.photo.attach(io: menu17_item3img, filename: 'tgifcrispy.jpeg')

# menu17_item4 = MenuItem.create({
#     menu_id: 17,
#     item_name: "NEW! Amazing Blazing Pound of Cheese Fries",
#     item_price: 16.43,
#     description: "Loaded with poblano queso, mixed cheese, bacon, pickled jalapenos, green onions and a side of BBQ Ranch."
#   })
# menu17_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/tgiffries.jpeg")
# menu17_item4.photo.attach(io: menu17_item4img, filename: 'tgiffries.jpeg')

# menu17_item5 = MenuItem.create({
#     menu_id: 17,
#     item_name: "Fried Mushrooms",
#     item_price: 15.74,
#     description: "Battered and golden-brown fried whole button mushrooms served with our tangy remix sauce. A true classic."
#   })
# menu17_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/tgiffriedshroom.jpeg")
# menu17_item5.photo.attach(io: menu17_item5img, filename: 'tgiffriedshroom.jpeg')

# menu17_item6 = MenuItem.create({
#     menu_id: 17,
#     item_name: "Blackened Cajun Chicken Sandwich",
#     item_price: 15.74,
#     description: "We brought back the OG blackened-to-order chicken on a toasted sub roll with cheddar, lettuce, tomato and mayo. Served with seasoned fries."
#   })
# menu17_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/tgifblackenedchick.jpeg")
# menu17_item6.photo.attach(io: menu17_item6img, filename: 'tgifblackenedchick.jpeg')

# menu17_item7 = MenuItem.create({
#     menu_id: 17,
#     item_name: "Spinach & Artichoke Dip Platter",
#     item_price: 25.17,
#     description: "Spinach, artichokes, Romano, sauteed onions & red bell peppers. Topped with Parmesan bread crumbs. Served with tortilla chips & salsa. Feeds 4-6"
#   })
# menu17_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/tgifdip.jpeg")
# menu17_item7.photo.attach(io: menu17_item7img, filename: 'tgifdip.jpeg')

# menu17_item8 = MenuItem.create({
#     menu_id: 17,
#     item_name: "Center-cut Sirloin topped with Whiskey Glaze",
#     item_price: 22.53,
#     description: "6 ounces of flavorful center-cut sirloin topped with Signature Whiskey-Glaze. Served with mashed potatoes and lemon-butter broccoli."
#   })
# menu17_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/tgifsirloin.jpeg")
# menu17_item8.photo.attach(io: menu17_item8img, filename: 'tgifsirloin.jpeg')

# menu17_item9 = MenuItem.create({
#     menu_id: 17,
#     item_name: "Half Rack of Fridays Big Ribs Whiskey-Glazed",
#     item_price: 22.41,
#     description: "Half-Rack of double-basted pork ribs basted in our Signature Whiskey-Glaze served with seasoned fries & coleslaw."
#   })
# menu17_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/tgifribs.jpeg")
# menu17_item9.photo.attach(io: menu17_item9img, filename: 'tgifribs.jpeg')

# menu17_item10 = MenuItem.create({
#     menu_id: 17,
#     item_name: "Fried Shrimp",
#     item_price: 21.84,
#     description: "12 Crispy shrimp served with coleslaw, seasoned fries and cocktail sauce."
#   })
# menu17_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/tgiffriedshrimp.jpeg")
# menu17_item10.photo.attach(io: menu17_item10img, filename: 'tgiffriedshrimp.jpeg')

# puts("Seeding Chipotle Mexican Grill...")
# # Chipotle
# # https://www.ubereats.com/store/chipotle-mexican-grill-6-main-st/R6wvkB6MRzWh4RbPK3iF0g?diningMode=DELIVERY
# menu18_item1 = MenuItem.create({
#     menu_id: 18,
#     item_name: "High Protein Bowl",
#     item_price: 15.80,
#     description: "White Rice, Chicken, Steak, Black Beans, Tomatillo-Red Chili Salsa, Cheese and Shredded Romaine Lettuce"
#   })
# menu18_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/chipotleprotein.jpeg")
# menu18_item1.photo.attach(io: menu18_item1img, filename: 'chipotleprotein.jpeg')

# menu18_item2 = MenuItem.create({
#     menu_id: 18,
#     item_name: "Keto Salad Bowl",
#     item_price: 13.50,
#     description: "Supergreens Lettuce Blend, Chicken, Fresh Tomato Salsa, Cheese and Guacamole"
#   })
# menu18_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/chipotleketo.jpeg")
# menu18_item2.photo.attach(io: menu18_item2img, filename: 'chipotleketo.jpeg')

# menu18_item3 = MenuItem.create({
#     menu_id: 18,
#     item_name: "Vegan Bowl",
#     item_price: 10.40,
#     description: "Sofritas, Brown Rice, Black Beans, Fresh Tomato Salsa, Roasted Chili-Corn Salsa, and Shredded Romaine Lettuce"
#   })
# menu18_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/chipotlevegan.jpeg")
# menu18_item3.photo.attach(io: menu18_item3img, filename: 'chipotlevegan.jpeg')

# menu18_item4 = MenuItem.create({
#     menu_id: 18,
#     item_name: "Burrito",
#     item_price: 10.40,
#     description: "Your choice of freshly grilled meat or sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese."
#   })
# menu18_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/chipotleburrito.jpeg")
# menu18_item4.photo.attach(io: menu18_item4img, filename: 'chipotleburrito.jpeg')

# menu18_item5 = MenuItem.create({
#     menu_id: 18,
#     item_name: "Three Tacos",
#     item_price: 10.40,
#     description: "3 Tacos"
#   })
# menu18_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/chipotletaco.jpeg")
# menu18_item5.photo.attach(io: menu18_item5img, filename: 'chipotletaco.jpeg')

# menu18_item6 = MenuItem.create({
#     menu_id: 18,
#     item_name: "Salad",
#     item_price: 10.40,
#     description: "Your choice of meat or sofritas served with our fresh supergreens lettuce blend made of Romaine, Baby Kale, and Baby Spinach. Add beans, queso blanco, salsa, guacamole, sour cream or cheese and top it off with our signature Chipotle-Honey Vinaigrette."
#   })
# menu18_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/chipotlesalad.jpeg")
# menu18_item6.photo.attach(io: menu18_item6img, filename: 'chipotlesalad.jpeg')

# menu18_item7 = MenuItem.create({
#     menu_id: 18,
#     item_name: "Chips & Guacamole",
#     item_price: 5.20,
#     description: ""
#   })
# menu18_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/chipotlechipguac.jpeg")
# menu18_item7.photo.attach(io: menu18_item7img, filename: 'chipotlechipguac.jpeg')

# menu18_item8 = MenuItem.create({
#     menu_id: 18,
#     item_name: "Chips & Queso Blanco",
#     item_price: 5.20,
#     description: ""
#   })
# menu18_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/chipotlechipqueso.jpeg")
# menu18_item8.photo.attach(io: menu18_item8img, filename: 'chipotlechipqueso.jpeg')

# menu18_item9 = MenuItem.create({
#     menu_id: 18,
#     item_name: "Chips & Roasted Chili-Corn Salsa",
#     item_price: 2.70,
#     description: ""
#   })
# menu18_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/chipotlechipcorn.jpeg")
# menu18_item9.photo.attach(io: menu18_item9img, filename: 'chipotlechipcorn.jpeg')

# menu18_item10 = MenuItem.create({
#     menu_id: 18,
#     item_name: "Chips & Fresh Tomato Salsa",
#     item_price: 2.70,
#     description: ""
#   })
# menu18_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/chipotlechipsalsa.jpeg")
# menu18_item10.photo.attach(io: menu18_item10img, filename: 'chipotlechipsalsa.jpeg')


# puts("Seeding Olive Garden...")
# # Olive Garden
# # https://www.olivegarden.com/menu/classic-entrees/?setRestaurant=1199&cmpid=br:og_ag:ie_ch:loc_ca:OGGMB_sn:gmb_gt:springfield-nj-1199_pl:menu_rd:1148
# menu19_item1 = MenuItem.create({
#     menu_id: 19,
#     item_name: "Chicken Alfredo",
#     item_price: 18.49,
#     description: "Not everyone knows our signature alfredo sauce is made from scratch daily. This homemade sauce combines simple, fresh ingredients like butter, cream and parmesan cheese to make a rich topping to our fettuccine pasta. Then it is topped with tender, sliced grilled chicken. Sprinkle some parsley flakes on top and buon appetito! Olive Garden's classic Chicken Alfredo is an easy and delicious choice for dinner."
#   })
# menu19_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/olivealfredo.webp")
# menu19_item1.photo.attach(io: menu19_item1img, filename: 'olivealfredo.webp')

# menu19_item2 = MenuItem.create({
#     menu_id: 19,
#     item_name: "Chicken and Shrimp Carbonara",
#     item_price: 20.29,
#     description: "Sautéed seasoned chicken, shrimp and spaghetti tossed in a creamy sauce with bacon and roasted red peppers."
#   })
# menu19_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/olivecarbo.webp")
# menu19_item2.photo.attach(io: menu19_item2img, filename: 'olivecarbo.webp')

# menu19_item3 = MenuItem.create({
#     menu_id: 19,
#     item_name: "Chicken Parmigiana",
#     item_price: 17.99,
#     description: "Two lightly fried parmesan-breaded chicken breasts are smothered with Olive Garden’s homemade marinara sauce and melted Italian cheeses. We serve our Chicken Parmigiana with a side of spaghetti for dinner. Try this classic pairing of Italian comfort foods that will leave you saying 'yum!'"
#   })
# menu19_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/olivechickparm.webp")
# menu19_item3.photo.attach(io: menu19_item3img, filename: 'olivechickparm.webp')

# menu19_item4 = MenuItem.create({
#     menu_id: 19,
#     item_name: "Fettucine Alfredo (V)",
#     item_price: 15.49,
#     description: "The key to Olive Garden's rich and creamy alfredo sauce is its freshness. Our chefs make it in house throughout the day with parmesan cheese, heavy cream, and garlic. Served with fettuccine pasta, and even the pickiest eaters can agree this simple Fettuccine Alfredo meal is delightful! (V) Vegetarian option"
#   })
# menu19_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/olivefettu.webp")
# menu19_item4.photo.attach(io: menu19_item4img, filename: 'olivefettu.webp')

# menu19_item5 = MenuItem.create({
#     menu_id: 19,
#     item_name: "Giant Cheese Stuffed Shells",
#     item_price: 16.79,
#     description: "Five shells filled with four-cheeses and topped with marinara, alfredo and toasted breadcrumbs."
#   })
# menu19_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/oliveshells.webp")
# menu19_item5.photo.attach(io: menu19_item5img, filename: 'oliveshells.webp')

# menu19_item6 = MenuItem.create({
#     menu_id: 19,
#     item_name: "Herb-Grilled Salmon",
#     item_price: 20.79,
#     description: "Filet grilled to perfection and topped with garlic herb butter. Served with parmesan garlic broccoli."
#   })
# menu19_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/olivesalmon.webp")
# menu19_item6.photo.attach(io: menu19_item6img, filename: 'olivesalmon.webp')

# menu19_item7 = MenuItem.create({
#     menu_id: 19,
#     item_name: "Cheese Ravioli",
#     item_price: 9.99,
#     description: "Filled with a blend of indulgent Italian cheeses, topped with your choice of homemade marinara or meat sauce** and melted mozzarella. **Our meat sauce is made with pan-seared beef and Italian sausage."
#   })
# menu19_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/oliveravioli.webp")
# menu19_item7.photo.attach(io: menu19_item7img, filename: 'oliveravioli.webp')

# menu19_item8 = MenuItem.create({
#     menu_id: 19,
#     item_name: "Sicilian Cheesecake with Strawberry Topping (V)",
#     item_price: 8.29,
#     description: "Ricotta cheesecake with a shortbread cookie crust, topped with strawberry sauce."
#   })
# menu19_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/olivecheesecake.webp")
# menu19_item8.photo.attach(io: menu19_item8img, filename: 'olivecheesecake.webp')

# menu19_item9 = MenuItem.create({
#     menu_id: 19,
#     item_name: "Tiramisu (V)",
#     item_price: 8.29,
#     description: "The classic Italian dessert. A layer of creamy custard set atop espresso-soaked ladyfingers."
#   })
# menu19_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/olivetiramisu.webp")
# menu19_item9.photo.attach(io: menu19_item9img, filename: 'olivetiramisu.webp')

# menu19_item10 = MenuItem.create({
#     menu_id: 19,
#     item_name: "Breadsticks",
#     item_price: 4.29,
#     description: "Enjoy a freshly-baked, Olive Garden favorite."
#   })
# menu19_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/olivebread.jpeg")
# menu19_item10.photo.attach(io: menu19_item10img, filename: 'olivebread.jpeg')

# menu20_item1 = MenuItem.create({
#     menu_id: 20,
#     item_name: "Coffee",
#     item_price: 7.99,
#     description: "In the house, not on the house!"
#   })
# menu20_item1img = open("https://jwong-eats-seeds.s3.amazonaws.com/bunnycoffee.jpg")
# menu20_item1.photo.attach(io: menu20_item1img, filename: 'bunnycoffee.jpg')

# menu20_item2 = MenuItem.create({
#     menu_id: 20,
#     item_name: "Tea and Sweets Set",
#     item_price: 14.99,
#     description: "1 pot of tea, your choice of tea flavor. Cookies or candy on the side."
#   })
# menu20_item2img = open("https://jwong-eats-seeds.s3.amazonaws.com/bunnytea.jpg")
# menu20_item2.photo.attach(io: menu20_item2img, filename: 'bunnytea.jpg')

# menu20_item3 = MenuItem.create({
#     menu_id: 20,
#     item_name: "Wine, Cheese, Cracker Board & Shrimp Cocktail for 2",
#     item_price: 79.99,
#     description: "1 bottle of Bordeaux blend (Chateau La Rose de Vitrac 2018), 5 assorted cheese, 5 cracker varieties, and a shrimp with with cocktail sauce."
#   })
# menu20_item3img = open("https://jwong-eats-seeds.s3.amazonaws.com/bunnyshrimp.jpg")
# menu20_item3.photo.attach(io: menu20_item3img, filename: 'bunnyshrimp.jpg')

# menu20_item4 = MenuItem.create({
#     menu_id: 20,
#     item_name: "Garden Salad",
#     item_price: 11.99,
#     description: "A fresh and bright salad with spinach, arugula, red onion, cherry tomatoes. Avocado on top $3.99 extra. Poppy Seed dressing or EVOO/Balsamic Vinegar."
#   })
# menu20_item4img = open("https://jwong-eats-seeds.s3.amazonaws.com/bunnysalad.jpg")
# menu20_item4.photo.attach(io: menu20_item4img, filename: 'bunnysalad.jpg')

# menu20_item5 = MenuItem.create({
#     menu_id: 20,
#     item_name: "Salmon Carbonara",
#     item_price: 45.99,
#     description: "Creamy pasta made with eggs, Parmesan cheese, black pepper, topped with pan-seared salmon."
#   })
# menu20_item5img = open("https://jwong-eats-seeds.s3.amazonaws.com/bunnycarbo.jpg")
# menu20_item5.photo.attach(io: menu20_item5img, filename: 'bunnycarbo.jpg')

# menu20_item6 = MenuItem.create({
#     menu_id: 20,
#     item_name: "Weekend Brunch Platter",
#     item_price: 24.99,
#     description: "2 eggs, any style, your choice of protein: (meat: bacon, sausage) (veg: sausage), and 2 pieces of pan toast or pancakes."
#   })
# menu20_item6img = open("https://jwong-eats-seeds.s3.amazonaws.com/bunnybreakfast.jpg")
# menu20_item6.photo.attach(io: menu20_item6img, filename: 'bunnybreakfast.jpg')

# menu20_item7 = MenuItem.create({
#     menu_id: 20,
#     item_name: "Sushi Platter",
#     item_price: 129.99,
#     description: "Makizushi (4 varieties of your choice), 8pc each roll. 8pcs sashimi (salmon, tuna, tamagoyaki)."
#   })
# menu20_item7img = open("https://jwong-eats-seeds.s3.amazonaws.com/bunnysushi.jpg")
# menu20_item7.photo.attach(io: menu20_item7img, filename: 'bunnysushi.jpg')

# menu20_item8 = MenuItem.create({
#     menu_id: 20,
#     item_name: "Garden Veggie Burger",
#     item_price: 29.99,
#     description: "A protein packed plant-based burger topped with red onion, greens, tomato, and your choice of mayo (spicy or plain). Fries $7 extra, chips $5 extra."
#   })
# menu20_item8img = open("https://jwong-eats-seeds.s3.amazonaws.com/bunnyburger.jpg")
# menu20_item8.photo.attach(io: menu20_item8img, filename: 'bunnyburger.jpg')

# menu20_item9 = MenuItem.create({
#     menu_id: 20,
#     item_name: "Bowl of Ramen",
#     item_price: 19.99,
#     description: "Buldak Bokkeumyeon (regular or carbonara), Indomie Mi Goreng or Hwa Ramyun. Egg on top $5 extra."
#   })
# menu20_item9img = open("https://jwong-eats-seeds.s3.amazonaws.com/bunnyramen.jpg")
# menu20_item9.photo.attach(io: menu20_item9img, filename: 'bunnyramen.jpg')

# menu20_item10 = MenuItem.create({
#     menu_id: 20,
#     item_name: "Cantonese Style Egg Fried Rice",
#     item_price: 34.99,
#     description: "Wok tossed egg fried rice with scallions and soy sauce. Authentic Wok Hei"
#   })
# menu20_item10img = open("https://jwong-eats-seeds.s3.amazonaws.com/bunnyrice.jpg")
# menu20_item10.photo.attach(io: menu20_item10img, filename: 'bunnyrice.jpg')

# puts("Done seeding!")