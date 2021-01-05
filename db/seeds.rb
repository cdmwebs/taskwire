# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Task.create!(title: 'task 10m', estimate: 10)
Task.create!(title: 'task 20m', estimate: 20)
Task.create!(title: 'task 30m', estimate: 30)
Task.create!(title: 'task 1h', estimate: 60)
