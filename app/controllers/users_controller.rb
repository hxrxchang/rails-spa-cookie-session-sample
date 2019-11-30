class UsersController < ApplicationController
  skip_before_action :check_is_signed_in, only: [:sign_in, :sign_out, :check_session_valid, :sign_up]

  def sign_in
    user = User.find_by(name: params[:name]).authenticate(params[:password])
    session[:user_id] = user.id
    render json: { message: "sign in success" }
  end

  def sign_out
    session.delete(:user_id)
    render json: { message: "sign out success" }
  end

  def sign_up
    begin
      user = User.create!(name: params[:name], password: params[:password])
    rescue ActiveRecord::RecordNotUnique => e
      return render json: { message: "this name is already registered" }, status: 400
    rescue ActiveRecord::RecordInvalid => e
      return render json: { message: "this value is invalid" }, status: 400
    rescue => e
      return render_500_error
    end

    session[:user_id] = user.id
    render json: { message: "sign up success" }
  end

  def check_session_valid
    begin
      user = User.find(session[:user_id])
    rescue ActiveRecord::RecordNotFound
      # 見つからないということはsessionがnilになってるので401を返す
      render_401_error
      return
    end
    render json: { message: "session is valid" }
  end
end