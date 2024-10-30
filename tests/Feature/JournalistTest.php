<?php
use App\Models\User;

test('journalists page can be rendered', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/journalists');

    $response->assertStatus(200);
});

describe('editor', function () {
    test('can view create page', function () {
        $user = User::factory()->create(['editor' => true]);

        $response = $this->actingAs($user)->get("/journalists/create");

        $response->assertOk();
    });

    test('can create journalist', function () {
        $user = User::factory()->create(['editor' => true]);

        $response = $this->actingAs($user)->post("/journalists", [
            "firstname" => "test",
            "lastname" => "user",
        ]);

        $dummy = User::where(["firstname" => "test", "lastname" => "user"])->exists();

        expect($dummy)->toBeTrue();
        $response->assertRedirectToRoute('journalists.index');
    });

    test('can view edit page', function () {
        $user = User::factory()->create(['editor' => true]);

        $response = $this->actingAs($user)->get("/journalists/$user->id/edit");

        $response->assertOk();
    });

    test('can update journalist', function () {
        $user = User::factory()->create(['editor' => true]);
        $dummy = User::factory()->create();

        $this->actingAs($user)->patch("/journalists/$dummy->id", [
            'title' => 'dummy-title',
            'editor' => true
        ]);

        $dummy->refresh();

        expect($dummy->title)->toBe('dummy-title');
        expect($dummy->editor)->toBeTrue();
    });

    test('can delete journalist', function () {
        $user = User::factory()->create(['editor' => true]);
        $dummy = User::factory()->create();

        $this->actingAs($user)->delete("/journalists/$dummy->id");

        expect(fn() => $dummy->refresh())
            ->toThrow(Illuminate\Database\Eloquent\ModelNotFoundException::class);
    });
});

describe('non editor', function () {
    test('cannot view create page', function () {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get("/journalists/create");

        $response->assertRedirectToRoute('dashboard');
    });

    test('cannot create journalist', function () {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post("/journalists", [
            "firstname" => "test",
            "lastname" => "user",
        ]);

        $dummy = User::where(["firstname" => "test", "lastname" => "user"])->exists();

        expect($dummy)->toBeFalse();
        $response->assertForbidden();
    });

    test('cannot view edit page', function () {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get("/journalists/$user->id/edit");

        $response->assertRedirectToRoute('dashboard');
    });

    test('cannot update journalist', function () {
        $user = User::factory()->create();
        $dummy = User::factory()->create();

        $response = $this->actingAs($user)->patch("/journalists/$dummy->id", [
            'title' => 'dummy-title',
            'editor' => true
        ]);

        $response->assertRedirectToRoute('dashboard');
    });

    test('cannot delete journalist', function () {
        $user = User::factory()->create();
        $dummy = User::factory()->create();

        $response = $this->actingAs($user)->delete("/journalists/$dummy->id");

        $response->assertRedirectToRoute('dashboard');
    });
});
