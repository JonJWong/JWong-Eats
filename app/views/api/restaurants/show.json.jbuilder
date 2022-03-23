json.partial! 'api/restaurants/restaurant', restaurant: @restaurant

json.set! menu do
  @restaurant.menu_items.each do |item|
    json.extract! item, :item_name, :item_price, :description
  end
end