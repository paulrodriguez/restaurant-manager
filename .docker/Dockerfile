FROM php:7.3.5-apache

COPY . /srv/app

COPY .docker/vhost.conf /etc/apache2/sites-available/000-default.conf


RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN docker-php-ext-install mbstring pdo pdo_mysql \
	&& chown -R www-data:www-data /srv/app \
	&& a2enmod rewrite
