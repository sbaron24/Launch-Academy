require "sinatra"
require "pg"
require "pry" if development? || test?
require "sinatra/reloader" if development?
require_relative "./app/models/article"

set :bind, '0.0.0.0'  # bind to all interfaces
set :views, File.join(File.dirname(__FILE__), "app", "views")

configure :development do
  set :db_config, { dbname: "news_aggregator_development" }
end

configure :test do
  set :db_config, { dbname: "news_aggregator_test" }
end

def db_connection
  begin
    connection = PG.connect(Sinatra::Application.db_config)
    yield(connection)
  ensure
    connection.close
  end
end

get '/' do
  redirect 'articles'
end

# Put your News Aggregator server.rb route code here

get '/articles' do
  @articles = Article.all
  erb :index
end

get '/articles/new' do
  erb :new
end

post '/articles/new' do
  @error = nil
  # params.keys.each do |param|
    # if (params[key].nil?)
      # @error = 'Must fill out entire form before submitting.'
    # end
  # end
  Article.create(params)
  redirect '/'
end

get '/articles/:id' do
  @article = Article.find(params)
  erb :show
end

get '/random' do
  erb :random
end

get '/api/v1/articles.json' do
  ## get all articles
end

def csv_file
  if ENV["RACK_ENV"] == "test"
    "data/test_articles.csv"
  else
    "data/articles.csv"
  end
end

def reset_csv
  CSV.open(csv_file, "w", headers: true) do |csv|
    csv << ["title", "description", "url"]
    csv << ["A Deep Dive into Routing and Controller Dispatch in Rails",
            "How does a web request accepted by Rack make it all the way to your Rails controller? Let's find out!",
            "https://medium.com/rubyinside/a-deep-dive-into-routing-and-controller-dispatch-in-rails-8bf58c2cf3b5"]
  end
end
