class CreateMenuItems < ActiveRecord::Migration[5.2]
  def change
    create_table :menu_items do |t|
      t.integer :menu_id, null: false
      t.string :item_name, null: false, index: { unique: true }
      t.decimal :item_price, null: false, index: { unique: true }
      t.text :description
      t.timestamps
    end
  end
end
