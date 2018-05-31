FROM FROM brunogasparin/laravel-apache:5-onbuild

RUN apt-get update \
  && apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libmcrypt-dev \
  && docker-php-ext-install pdo_mysql mysqli mbstring gd iconv mcrypt

RUN mkdir -p /carmudi-server

WORKDIR /carmudi-server

COPY ./ /var/www/html
COPY php.ini /usr/local/etc/php/
COPY default.conf /etc/apache2/sites-enabled/000-default.conf

RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

COPY .env.example .env
RUN composer install
RUN php artisan key:generate

