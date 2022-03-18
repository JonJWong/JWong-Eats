class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: {unique: true}
      t.string :password_digest
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :address, null: false
      t.string :session_token, null: false, index: {unique: true}
      t.timestamps
    end
  end
end
