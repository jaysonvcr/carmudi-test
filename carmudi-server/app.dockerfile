FROM php:7.2-fpm

RUN apt-get update && apt-get install -y libmcrypt-dev \
    mysql-client libmagickwand-dev --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && docker-php-ext-install pdo_mysql

WORKDIR /var/www

COPY .env.example .env

RUN chmod -R o+w storage/


RUN php artisan migrate:install
RUN php artisan migrate
RUN php artisan db:seed
