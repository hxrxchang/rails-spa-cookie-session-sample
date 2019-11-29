class ApplicationController < ActionController::API
  before_action :check_is_signed_in

  rescue_from ActiveRecord::RecordNotFound, with: :render_404_error
  rescue_from StandardError, with: :render_500_error

  def check_is_signed_in
    if !session[:user_id]
      render_401_error("unauthorized")
      return
    end

    @user = User.find(session[:user_id])
  end

  def current_user
    @user
  end

  def render_401_error(error = nil)
    render json: { message: "unauthorized" }, status: 401
  end

  def render_404_error(error = nil)
    render json: { message: "data is missing" }, status: 404
  end

  def render_500_error(error = nil)
    render json: { message: "internal server error" }, status: 500
  end
end
