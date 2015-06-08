class MainController < ApplicationController
  def index
  end

  def products
      @products = Affiliate.fetch

      render 'index'
  end
end
