FROM php:7.2.2-fpm


RUN apt-get update && apt-get install -y libmcrypt-dev mysql-client libmagickwand-dev --no-install-recommends php-pecl  imagick docker-php-ext-enable imagick docker-php-ext-install php-mcrypt php-pdo curl

RUN curl --silent --show-error https://getcomposer.org/installer | php

WORKINGDIR /var/www

RUN php composer.phar install