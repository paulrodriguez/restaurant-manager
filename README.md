#  Restaurant Manager

This open source project is a platform that allows restaurants
to create their own website to allow online orders using various forms of payment.

## local setup
this project has the minimum requirements for php, apache
and mysql using docker.

below are the steps needed to take in order to run the project
successfully.

copy the ```env.example``` to ```.env```

```
docker run --rm -v $(pwd):/app composer install
```
install all composer dependencies
```

docker-compose build
```
to build docker containers

```
docker-compose up
```
to run application

```
docker-compose exec app php artisan key:generate
```
to generate key

```
docker-compose exec app php artisan migrate
```
runs migrations to generate all tables

```
docker-compose exec app php artisan db:seed --class=RestaurantTableSeeder
```
run seeds to generate sample data

## creating an admin user
run the following to create a seeder class

```
docker-compose app php artisan make:seeder AdminUserSeeder
```

the method ```run``` in this seeder class should look like this:
```
        DB::table('admins')->insert([
            'name'=>'{{name}}',
            'email'=>'{{email}}',
            'password'=>bcrypt('{{password}}')
        ]);
```
replace everything inside and including the curly braces with your own values.
this will be the credentials you will use to log in to the admin

```
docker run --rm -v $(pwd):/app composer dump-autoload
```
dumps old class map and generates a new one

```
docker-compose app php artisan db:seed --class=AdminUserSeeder
```
run seeder to generate your admin user