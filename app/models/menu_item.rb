# == Schema Information
#
# Table name: menu_items
#
#  id          :bigint           not null, primary key
#  menu_id     :integer          not null
#  item_name   :string           not null
#  item_price  :decimal(, )      not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class MenuItem < ApplicationRecord

  belongs_to :menu,
    foreign_key: :menu_id,
    class_name: :Menu
    
end