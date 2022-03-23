Rails.application.routes.draw do
  root :to => "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show]
    resources :menu_items, only: [:index, :show]
  end
end
