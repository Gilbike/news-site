<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->realText(150);
        $content = $this->generateRandomContent();

        return [
            'title' => $title,
            'slug' => Str::of($title),
            'small_summary' => fake()->realText(300),
            'large_summary' => fake()->boolean() ? fake()->realText(1000) : null,
            'content' => $content
        ];
    }

    private function generateRandomContent()
    {
        if ($this->faker->boolean())
            return "";

        $paragraphCount = rand(1, 6);

        $content = '';

        for ($i = 0; $i < $paragraphCount; $i++) {
            $content .= ":p\n" . $this->faker->paragraph() . "\n";
        }

        return $content;
    }
}
