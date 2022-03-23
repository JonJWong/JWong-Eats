class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.string :restaurant_name
      t.integer :restaurant_id
      t.timestamps
    end
  end
end
