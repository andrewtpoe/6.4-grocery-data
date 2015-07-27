class ItemsController < ApplicationController

  def show
    if params[:page_number]
      page_number = params[:page_number].to_i
    else
      params[:page_number] = 1
      page_number = 1
    end
    limit = 10
    mp = current_customer.items.length / limit
    params[:max_pages] = mp
    @items = current_customer.items.limit(limit).offset(limit * (page_number - 1))
    @data = { max_pages: mp, items: @items }
    respond_to do |format|
      format.html { render template: "items/show" }
      format.json { render json: @data }
    end
  end

end
