class CreateClients < ActiveRecord::Migration[5.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.date :date
      t.string :photo
      t.string :status

      t.timestamps
    end
  end
end
