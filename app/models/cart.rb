class Cart < ApplicationRecord
  belongs_to :client
  belongs_to :album
end
