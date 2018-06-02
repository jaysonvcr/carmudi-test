sudo docker-compose up --build -d && 
sudo docker run --rm -v $(pwd)/carmudi-server:/app composer install &&
sudo docker exec carmuditest_app_1 chmod -R o+w storage/ &&
sudo docker-compose exec app cp .env.example .env &&
sudo docker-compose exec app php artisan migrate:install &&
sudo docker-compose exec app php artisan migrate:fresh --seed

