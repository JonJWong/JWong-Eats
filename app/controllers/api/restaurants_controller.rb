class Api::RestaurantsController < ApplicationController

  def index
    if (params[:category])
      @restaurants = Restaurant.where("description like ?", "%#{params[:category]}%")
      render :index
    else
      @restaurants = Restaurant.all
      render :index
    end
  end

  def show
    @restaurant = Restaurant.find_by(id: params[:id])
    render :show
  end
  
end