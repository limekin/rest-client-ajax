class Affiliate < ActiveRecord::Base
    def self.fetch
	response = RestClient::Request.execute(
	  :method => :get,
	  :url => "http://api.shopstyle.com/api/v2/products?pid=uid7849-6112293-28&fts=women&offset=0&limit=10"
	)

	@products = JSON.parse(response)["products"].map do |product|
	  product = OpenStruct.new(product)
	  affiliate = Affiliate.find_or_create_by(:name => product.name, :url => product.url)
	  affiliate.save
	  affiliate
	end
    end
end
