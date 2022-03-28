class AddIdToTransItem < ActiveRecord::Migration[5.2]
  def change
    add_column :transaction_items, :item_id, :integer, null: false
  end
end
