class ChangeTransactionItem < ActiveRecord::Migration[5.2]
  def change
    change_column_null :transaction_items, :item_name, false
    change_column_null :transaction_items, :item_quantity, false
    change_column_null :transaction_items, :item_price, false
    change_column_null :transaction_items, :order_number, false
  end
end
