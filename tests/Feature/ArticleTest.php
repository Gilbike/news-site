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

test('can view create page', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get("/article/create");

    $response->assertOk();
});

test('can create article', function () {
    $user = User::factory()->create();
    $section = Section::factory()->create();

    $response = $this->actingAs($user)->post("/article/create", [
        "title" => "dummy-article",
        "section_id" => $section->id,
        "small_summary" => "dummy-article",
        "large_summary" => "dummy-article",
        "content" => "dummy-article",
    ]);

    $dummy = Article::where(["title" => "dummy-article"])->exists();

    expect($dummy)->toBeTrue();
    $response->assertRedirectToRoute('dashboard');
});

test('can update article', function () {
    $user = User::factory()->create();
    $section = Section::factory()->create();
    $article = Article::factory()->create([
        'section_id' => $section->id,
        'journalist_id' => $user->id,
    ]);

    $this->actingAs($user)->patch("/article/$article->id/edit", [
        'title' => 'dummy-title',
        'slug' => 'dummy-slug',
        'small_summary' => 'dummy-summary',
        'large_summary' => 'dummy-summary'
    ]);

    $article->refresh();

    expect($article->title)->toBe('dummy-title');
});

test('can delete article', function () {
    $user = User::factory()->create();
    $section = Section::factory()->create();
    $article = Article::factory()->create([
        'section_id' => $section->id,
        'journalist_id' => $user->id,
    ]);

    $this->actingAs($user)->delete("/article/$article->id");

    expect(fn() => $article->refresh())
        ->toThrow(Illuminate\Database\Eloquent\ModelNotFoundException::class);
});

test('visitor can\'t view draft article', function () {
    $author = User::factory()->create();
    $section = Section::factory()->create(['name' => 'economy']);
    $article = Article::factory()->create(['slug' => 'dummy-slug', 'section_id' => $section->id, 'journalist_id' => $author->id, 'published' => false]);

    $response = $this->get("/$section->name/$article->slug");

    $response->assertRedirect('/');
});

test('editor can view draft article', function () {
    $author = User::factory()->create(['editor' => true]);
    $section = Section::factory()->create(['name' => 'economy']);
    $article = Article::factory()->create(['slug' => 'dummy-slug', 'section_id' => $section->id, 'journalist_id' => $author->id, 'published' => false]);

    $response = $this->actingAs($author)->get("/$section->name/$article->slug/draft");

    $response->assertOk();
});

test('editor can publish', function () {
    $author = User::factory()->create(['editor' => true]);
    $section = Section::factory()->create(['name' => 'economy']);
    $article = Article::factory()->create(['slug' => 'dummy-slug', 'section_id' => $section->id, 'journalist_id' => $author->id, 'published' => false]);

    $response = $this->actingAs($author)->post("/$section->name/$article->slug/publish");

    $article->refresh();

    expect($article->published == 1)->toBeTrue();
});