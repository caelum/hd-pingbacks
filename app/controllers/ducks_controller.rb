require 'net/http'
 require 'uri'

class DucksController < ApplicationController
  def index
      uri = params[:uri]
      uri = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20search.siteexplorer.inlinks%20where%20query%3D%22" + uri + "%22&format=json&callback=cbfunc"
      url = URI.parse(params[:uri])
      res = Net::HTTP.start(url.host, url.port) {|http|
        http.get(url.path.empty? ? "/" : url.path)
      }
    render :text => res.body
  end
end