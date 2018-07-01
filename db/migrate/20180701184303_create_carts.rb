class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.belongs_to :client, foreign_key: true
      t.belongs_to :album, foreign_key: true
      t.string :amount

      t.timestamps
    end
  end
end
