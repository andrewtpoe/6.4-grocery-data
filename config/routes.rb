Rails.application.routes.draw do

  root 'home#index'

  get 'items', to: 'items#index'

  devise_for :customers

end
