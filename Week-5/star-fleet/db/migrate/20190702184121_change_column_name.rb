class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :starships, :class, :ship_class
  end
end
