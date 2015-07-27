class Customer < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
         :registerable,
          :rememberable
        #  :recoverable,
        #  :trackable,
        #  :validatable
  has_many :items

  validates :name, :email, presence: true
end
