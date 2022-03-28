class Api::TransactionsController < ApplicationController

  def create
    @transaction = Transaction.create({
      user_id: params[:cart][:userId],
      total: params[:cart][:total]
      })
    items = params[:cart][:order]

    items.each do |id, item|
      transaction_item = TransactionItem.new({
        item_id: id,
        item_name: item[:item_name],
        item_quantity: item[:quantity],
        item_price: item[:item_price].to_f,
        order_number: @transaction.id
      })

      if transaction_item.save
        next
      else
        render json: ['Something went wrong, please try again.'], status: 401
        break
      end
    end
    render :create
  end
  
end