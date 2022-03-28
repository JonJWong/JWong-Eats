class AddTotalPriceTransaction < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :total, :decimal, null: false
  end
end
