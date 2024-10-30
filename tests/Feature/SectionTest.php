<?php

use App\Models\Section;
use App\Models\User;

test('sections page can be rendered', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/sections');

    $response->assertOk();
});

describe('editor', function () {
    test('can view create page', function () {
        $user = User::factory()->create(['editor' => true]);

        $response = $this->actingAs($user)->get("/sections/create");

        $response->assertOk();
    });

    test('can create section', function () {
        $user = User::factory()->create(['editor' => true]);

        $response = $this->actingAs($user)->post("/sections", [
            "name" => "section",
        ]);

        $dummy = Section::where(["name" => "section"])->exists();

        expect($dummy)->toBeTrue();
        $response->assertRedirectToRoute('sections.index');
    });

    test('can update section', function () {
        $user = User::factory()->create(['editor' => true]);
        $dummy = Section::factory()->create();

        $this->actingAs($user)->patch("/sections/$dummy->id", [
            'name' => 'dummy-name',
        ]);

        $dummy->refresh();

        expect($dummy->name)->toBe('dummy-name');
    });

    test('can delete section', function () {
        $user = User::factory()->create(['editor' => true]);
        $dummy = Section::factory()->create();

        $this->actingAs($user)->delete("/sections/$dummy->id");

        expect(fn() => $dummy->refresh())
            ->toThrow(Illuminate\Database\Eloquent\ModelNotFoundException::class);
    });
});

describe('non editor', function () {
    test('cannot view create page', function () {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get("/sections/create");

        $response->assertRedirectToRoute('dashboard');
    });

    test('cannot create section', function () {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post("/sections", [
            "name" => "section",
        ]);

        $dummy = Section::where(["name" => "section"])->exists();

        expect($dummy)->toBeFalse();
        $response->assertForbidden();
    });

    test('cannot update section', function () {
        $user = User::factory()->create();
        $dummy = Section::factory()->create();

        $response = $this->actingAs($user)->patch("/sections/$dummy->id", [
            'name' => 'dummy-name',
        ]);

        $response->assertForbidden();
    });

    test('cannot delete journalist', function () {
        $user = User::factory()->create();
        $dummy = Section::factory()->create();

        $response = $this->actingAs($user)->delete("/sections/$dummy->id");

        $response->assertRedirectToRoute('dashboard');
    });
});
