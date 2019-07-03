require 'spec_helper'

feature 'User visits index page' do

  let(:starship) { Starship.create(
    name: 'USS Victor',
    ship_class: 'UltraMarathon',
    location: "GogginsVille, MASS") }

  scenario 'User sees list of Starship names' do
    visit '/'
    expect(page).to have_content("#{starship.name}")
  end
end
