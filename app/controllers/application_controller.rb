class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :render_404_error
  rescue_from StandardError, with: :render_500_error

  def render_401_error
    render json: { message: "access is forbidden" }, status: 401
  end

  def render_404_error
    render json: { message: "data is missing" }, status: 404
  end

  def render_500_error()
    render json: { message: "internal server error" }, status: 500
  end
end
