class ChangeMenuItems < ActiveRecord::Migration[5.2]
  def change
    change_column :menu_items, :item_price, :string
  end
end
