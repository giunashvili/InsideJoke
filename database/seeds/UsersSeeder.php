<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users') -> insert(
            [
                [
                    'name' => 'George',
                    'email' => 'giorgi.official@yahoo.com',
                    'password' => bcrypt('datvi'),
                ],
                [
                    'name' => 'tamarella',
                    'email' => 'tamarella@mail.ru',
                    'password' => bcrypt('wakaranai'),
                ]
            ]
        );
    }
}
