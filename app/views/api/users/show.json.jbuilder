json.extract! @user, :id, :email, :first_name, :last_name, :address

json.set! "transactions" do
  @user.transactions.each do |transaction|
    json.set! transaction.id do

      items = transaction.transaction_items
      
      json.set! "items" do
        json.array! items do |item|
          json.item_name  item.item_name
          json.item_quantity  item.item_quantity
          json.item_price  item.item_price
          json.date item.created_at
          json.item_id item.item_id
          
          fetched = MenuItem.find_by(id: item.item_id)

          json.restaurant_id fetched.menu.restaurant.id

          if fetched.photo.attached?
            json.photoUrl url_for(fetched.photo)
          end
        end
      end
    end
  end
end