class ChangeMenu < ActiveRecord::Migration[5.2]
  def change
    change_column_null :menus, :restaurant_id, false
    change_column_null :menus, :restaurant_name, false
  end
end
