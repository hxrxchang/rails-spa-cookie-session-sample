class ApplicationController < ActionController::Base
  # ref: https://api.rubyonrails.org/classes/ActionController/RequestForgeryProtection.html
  protect_from_forgery unless: -> { request.format.json? }

  before_action :check_is_signed_in, :csrf_protection

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
    if @user
      return @user
    else
      return nil
    end
  end

  def csrf_protection
    if request.method != 'POST'
      return true
    end

    if URI.parse(request.headers['Origin']).host != request.host
      render_403_error()
      return
    end

    return true
  end

  def render_401_error(error = nil)
    render json: { message: "unauthorized" }, status: 401
  end

  def render_403_error(error = nil)
    render json: { message: "forbidden" }, status: 403
  end

  def render_404_error(error = nil)
    render json: { message: "data is missing" }, status: 404
  end

  def render_500_error(error = nil)
    render json: { message: "internal server error" }, status: 500
  end
end
