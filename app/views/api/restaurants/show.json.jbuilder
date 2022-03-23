json.extract! @restaurant,
  :name, :address, :description, :rating, :review_count,
  :price_rating, :hours, :id

json.set! "menu" do
  @restaurant.menu_items.each do |item|
    json.set! item.id do
      json.extract! item, :item_name, :item_price, :description
    end
  end
end
