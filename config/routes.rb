Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    post '/auth/sign-in', to: 'users#sign_in'
    post '/auth/sign-out', to: 'users#sign_out'
    post '/user', to: 'users#sign_up'
    get '/auth/check-session', to: 'users#check_session_valid'
    get '/hello', to: 'hello#index'
  end
end
