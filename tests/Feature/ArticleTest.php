<?php

use App\Models\Article;
use App\Models\Section;
use App\Models\User;

test('can view article', function () {
    $author = User::factory()->create();
    $section = Section::factory()->create(['name' => 'economy']);
    $article = Article::factory()->create(['title' => 'article', 'slug' => 'article', 'section_id' => $section->id, 'journalist_id' => $author->id]);

    $response = $this->get("/$section->name/$article->slug");

    $response->assertOk();
});