# == Schema Information
#
# Table name: menus
#
#  id              :bigint           not null, primary key
#  restaurant_name :string
#  restaurant_id   :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class MenuTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
