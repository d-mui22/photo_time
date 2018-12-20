class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.belongs_to :category
      t.string :name
      t.string :description

      t.timestamps null: false
    end
  end
end
