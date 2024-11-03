<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Section;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $sections = Section::factory(5)->create();

        User::factory()
            ->create([
                'name' => 'admin',
                'email' => 'admin@news.com',
                'password' => bcrypt('admin'),
                'firstname' => 'Journalist',
                'lastname' => 'Name',
                'editor' => true,
            ]);

        User::factory(5)
            ->has(
                Article::factory()
                    ->count(10)
                    ->state(new Sequence(
                        fn(Sequence $sequence) => ['section_id' => $sections->random()],
                    ))
            )
            ->create();
    }
}
