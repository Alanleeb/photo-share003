class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :photo
      t.string :amount
      t.belongs_to :client, foreign_key: true

      t.timestamps
    end
  end
end
