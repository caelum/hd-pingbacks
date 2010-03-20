require 'net/http'
 require 'uri'

class DucksController < ApplicationController
  def index

       url = URI.parse(params[:uri])
       res = Net::HTTP.start(url.host, url.port) {|http|
         http.get(url.path.empty? ? "/" : url.path)
       }
    render :text => res.body
  end
end