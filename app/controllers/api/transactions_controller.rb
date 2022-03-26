class Api::TransactionsController < ApplicationController

  def show
    @transactions = Transaction.where(user_id: params[:user_id])
    @transaction_items = Transaction.transaction_items
    debugger
    render :show
  end

  def create
    @transaction = Transaction.create({user_id: params[:cart][:userId]})
    items = params[:cart][:order]

    items.each do |id, item|
      transaction_item = TransactionItem.new({
        item_name: item[:item_name],
        item_quantity: item[:quantity],
        item_price: item[:item_price].to_f,
        order_number: @transaction.id
      })
      transaction_item.save
    end
    render :create
  end
  
end