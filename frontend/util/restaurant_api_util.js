export const fetchRestaurants = (category) => {
  return $.ajax({
    method: 'GET',
    url: `api/restaurants`,
    data: {category}
  });
};

export const fetchRestaurant = (restaurantId) => {
  return $.ajax({
    method: 'GET',
    url: `api/restaurants/${restaurantId}`
  });
};