Rails.application.routes.draw do

  devise_for :customers
  # root 'home#index'

  root 'items#index'

end
