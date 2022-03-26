# == Schema Information
#
# Table name: transaction_items
#
#  id            :bigint           not null, primary key
#  item_name     :string           not null
#  item_quantity :integer          not null
#  item_price    :decimal(, )      not null
#  order_number  :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class TransactionItem < ApplicationRecord

  validates :item_name, :item_quantity, :item_price, :order_number, presence: true

  belongs_to :order,
    foreign_key: :order_number,
    class_name: :Transaction
  
end
