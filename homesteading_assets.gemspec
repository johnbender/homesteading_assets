$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "homesteading_assets/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "homesteading_assets"
  s.version     = HomesteadingAssets::VERSION
  s.authors     = ["Shane Becker", "Jessica Lynn Suttles"]
  s.email       = ["veganstraightedge@gmail.com", "jlsuttles@gmail.com"]
  s.homepage    = "https://github.com/homesteading/homesteading_assets"
  s.summary     = "A collection of Rails CSS/JS assets shared across multiple Homesteading publisher apps."
  s.description = "A collection of Rails CSS/JS assets shared across multiple Homesteading publisher apps."
  s.license     = "Public Domain (CC0)"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.1.6"

  s.add_development_dependency "sqlite3"
end
