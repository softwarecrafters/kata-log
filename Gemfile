source "https://rubygems.org"

# Jekyll with `bundle exec`, like so:
#     bundle exec jekyll serve

gem "jekyll", "~> 4.3.1"

gem "minima", "~> 2.5"

gem "kramdown-parser-gfm"

gem "webrick"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1" if Gem.win_platform?

gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
