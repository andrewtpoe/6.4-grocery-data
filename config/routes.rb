Rails.application.routes.draw do

  root 'home#index'

  get '/items_page/:page_number',
        to: 'items#show',
        as: 'items_page'

  devise_for :customers

end
