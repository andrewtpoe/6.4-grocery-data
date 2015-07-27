require 'test_helper'

class ItemsControllerTest < ActionController::TestCase
  def setup
    @customer = customers(:one)
    @item = items(:one)
    session[:customer_id] = @customer.id
  end

  test "GET #show" do
    get :show, page_number: 1, current_customer: @customer
    assert assigns(:items).include?(@item)
    assert_response 200
  end

  test 'GET #show returns an item list belonging only to the user' do
    get :show, page_number: 1, id: @customer
    assigns(:items).each do |item|
      assert_equal item.customer.id, @customer.id
    end
  end

end
