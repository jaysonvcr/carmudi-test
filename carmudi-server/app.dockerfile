FROM php:7.2.2-fpm

RUN apt-get install -y libmcrypt-dev mysql-client libmagickwand-dev --no-install-recommends pecl install imagick docker-php-ext-enable imagick docker-php-ext-install mcrypt pdo_mysql

RUN apt-get update