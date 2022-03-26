class CreateTransactionItems < ActiveRecord::Migration[5.2]
  def change
    create_table :transaction_items do |t|
      t.string :item_name
      t.integer :item_quantity
      t.decimal :item_price
      t.integer :order_number
      t.timestamps
    end
  end
end
