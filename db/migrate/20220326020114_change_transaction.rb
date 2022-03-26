class ChangeTransaction < ActiveRecord::Migration[5.2]
  def change
    change_column_null :transactions, :user_id, false
  end
end
