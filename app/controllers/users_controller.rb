class UsersController < ApplicationController
  def sign_in
    user = User.find_by(name: params[:name]).authenticate(params[:password])
    session[:user_id] = user.id
    render json: { message: "sign in success" }
  end
end