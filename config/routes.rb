Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    post '/auth/sign-in', to: 'users#sign_in'
    post '/auth/sign-out', to: 'users#sign_out'
    get '/home', to: 'home#index'
  end
end
