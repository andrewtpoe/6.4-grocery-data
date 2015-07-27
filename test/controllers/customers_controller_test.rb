require 'test_helper'

class CustomersControllerTest < ActionController::TestCase

  def setup
    @customer = customers(:one)
    @item = items(:one)
    session[:customer_id] = @customer.id
  end

  test 'POST #create builds a new customer record' do
  end

end
