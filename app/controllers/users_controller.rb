class UsersController < ApplicationController
  skip_before_action :check_is_signed_in, only: [:sign_in, :sign_out, :check_session_valid, :sign_up]

  def sign_in
    user = User.find_by(name: params[:name]).authenticate(params[:password])
    if !user
      return render json: { message: "name or password is wrong"}, status: 400
    end
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
    rescue ActiveRecord::RecordInvalid => e
      # ほんとはもっと細かくエラーメッセージを切り分けたい
      # パターン
      # - nameがユニークじゃない
      # - name, passwordがマルチバイト文字 or nil
      # - password文字数が6~20じゃない
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