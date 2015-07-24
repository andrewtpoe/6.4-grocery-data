Rails.application.routes.draw do

  root 'home#index'

  get '/items/:page_number', to: 'items#show', as: 'items'

  devise_for :customers

end
