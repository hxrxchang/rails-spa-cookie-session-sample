class UsersController < ApplicationController
  skip_before_action :check_is_signed_in, only: [:sign_in, :sign_out]

  def sign_in
    user = User.find_by(name: params[:name]).authenticate(params[:password])
    session[:user_id] = user.id
    render json: { message: "sign in success" }
  end

  def sign_out
    session.delete(:user_id)
    render json: { message: "sign out success" }
  end
end