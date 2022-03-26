class Api::TransactionsController < ApplicationController

  def show

  end

  def create

  end

  private

  def transaction_params
    params.require(:cart).permit()
  end
  
end