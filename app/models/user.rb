class User < ApplicationRecord
  has_secure_password

  validates :password, length: { in: 6..20 }
  validates :name, uniqueness: { case_sensitive: true }
  validates_format_of [:name, :password], :with => /\A[a-zA-Z0-9]+\z/
end
