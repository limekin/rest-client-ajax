require 'test_helper'

class MainControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get fetch_status" do
    get :fetch_status
    assert_response :success
  end

  test "should get items" do
    get :items
    assert_response :success
  end

end
