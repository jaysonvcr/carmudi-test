FROM php:7.2-apache


RUN mkdir -p /carmudi-server
WORKDIR /carmudi-server
COPY ./ /var/www/html

COPY php.ini /usr/local/etc/php/
COPY default.conf /etc/apache2/sites-enabled/000-default.conf
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer
RUN apt-get update
RUN apt-get install -y apt-utils git unzip
RUN composer install
COPY .env.example .env