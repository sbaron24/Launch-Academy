require "pry"
require "csv"


class Article
  attr_reader :description, :title, :url, :id

  def initialize(title,description,url, id)
    @title = title
    @description = description
    @url = url
    @id = id
  end

#should we put all of this in server file instead?
  def self.all
    all_articles = []
    articles = []
    db_connection do |conn|
      articles = conn.exec("SELECT * FROM articles")
    end


    articles.each do |article|
      all_articles << Article.new(
        article['title'],
        article['description'],
        article['url'],
        article['id'])
    end
    all_articles
  end

  def self.find(params)
    article = nil
    db_connection do |conn|
      article = conn.exec("SELECT * FROM articles WHERE id = #{params['id']}")
    end
    article = article.to_a[0]
    Article.new(article['title'],
                article['description'],
                article['url'],
                article['id'])
  end

  def self.create(params)
    binding.pry
    sql_query = "INSERT INTO articles (title, url, description) VALUES ('#{params['title']}', '#{params['url']}', '#{params['description']}');"
    db_connection do |conn|
      conn.exec(sql_query)
    end
  end
end



# title = params['title']
# url = params['url']
# description = params['description']
# db_connection do |conn|
#   conn.exec_params("INSERT INTO articles (title, url, description) VALUES ($1, $2, $3);", [title, url, description])
# end
