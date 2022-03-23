class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false, index: { unique: true }
      t.string :address, null: false, index: { unique: true }
      t.text :description
      t.float :rating
      t.integer :review_count
      t.string :price_rating
      t.string :hours, null: false
      t.timestamps
    end
  end
end
