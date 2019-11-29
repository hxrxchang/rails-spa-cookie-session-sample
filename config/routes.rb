Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    post '/auth/sign-in', to: 'users#sign_in'
  end
end
