class MainController < ApplicationController

  def products
    @products = Affiliate.fetch
  end
end
