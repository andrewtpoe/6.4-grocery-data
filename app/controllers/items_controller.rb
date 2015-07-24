class ItemsController < ApplicationController

  def show
    limit = 10
    params[:max_pages] = current_customer.items.length / limit
    page_number = params[:page_number].to_i
    @items = current_customer.items.limit(limit).offset(limit * (page_number - 1))
    respond_to do |format|
      format.html { render template: "items/show" }
    end
  end

end


# def index
#   users = User.all
#   page_number = params[:page_number].to_i
#   limit_per_page = 20
#   @users = User.limit(20).offset(limit_per_page  * (page_number - 1))
# end
#
# def users_paginated_ajax
#   users = User.all
#   page_number = params[:page_number].to_i
#   limit_per_page = 20
#   @users = User.limit(20).offset(limit_per_page  * (page_number - 1))
#   respond_to do |format|
#     format.json { render json: @users }
#   end
# end
