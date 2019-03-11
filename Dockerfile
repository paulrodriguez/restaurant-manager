FROM php:7.2-apache

EXPOSE 80

COPY --chown=www-data:www-data . /var/www/html
