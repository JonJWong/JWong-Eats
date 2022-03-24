@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: restaurant

    if restaurant.photo.attached?
      json.photoUrl url_for(restaurant.photo)
    end
  end
end