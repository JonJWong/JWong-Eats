class ChangeMenuItemsPriceColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :menu_items, :item_price, 'numeric USING CAST(item_price AS numeric)'
  end
end
