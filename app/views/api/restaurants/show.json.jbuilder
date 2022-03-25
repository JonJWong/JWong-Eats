json.extract! @restaurant,
  :name, :address, :description, :rating, :review_count,
  :price_rating, :hours, :id

if @restaurant.photo.attached?
  json.photoUrl url_for(@restaurant.photo)
end

json.set! "menu" do
  @restaurant.menu_items.each do |item|
    json.set! item.id do
      json.extract! item, :item_name, :item_price, :description, :id

      if item.photo.attached?
        json.photoUrl url_for(item.photo)
      end
    end
  end
end
