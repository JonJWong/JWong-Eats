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
require 'test_helper'

class TransactionItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
