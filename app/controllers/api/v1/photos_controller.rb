class Api::V1::PhotosController < ApplicationController
  def index
    render json: Photo.all
  end

  def show
    @category = Category.find(params['id'])
    @photos = @category.photos
    render json: @photos
  end

end
