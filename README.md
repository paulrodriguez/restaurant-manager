#  Restaurant Manager

This open source project is a platform that allows restaurants
to create their own website to allow online orders using various forms of payment.

## local setup
this project has the minimum requirements for php, apache
and mysql using docker.

below are the steps needed to take in order to run the project
successfully.

copy the ```env.example``` to ```.env```

install all composer dependencies
```
docker run --rm -v $(pwd):/app composer install
```

build docker containers
```
docker-compose build
```

run application container
```
docker-compose up
```

generate laravel required key
```
docker-compose exec app php artisan key:generate
```

run migrations to generate all tables
```
docker-compose exec app php artisan migrate
```

run seeds to generate sample data
```
docker-compose exec app php artisan db:seed --class=RestaurantTableSeeder
```


## creating an admin user
run the following to create a seeder class

```
docker-compose exec app php artisan make:seeder AdminUserSeeder
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

dumps old class mappings and generate a new one
```
docker run --rm -v $(pwd):/app composer dump-autoload
```

run seeder to generate your admin user
```
docker-compose app php artisan db:seed --class=AdminUserSeeder
```

## Compiling assets
we need to utilize Node.js to install dependencies

run the below to install dependencies using npm
```
docker run -it --rm -v $(pwd):/app -w /app node npm install
```

compile assets using laravel's webpack mix
```
docker run -it --rm -v $(pwd):/app -w /app node npm run development
```
