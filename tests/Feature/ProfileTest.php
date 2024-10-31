<?php

use App\Models\User;

test('can render profile page', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get(route('profile'));

    $response->assertOk();
});

test('can update personal details', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->patch(route('profile.update'), [
        'firstname' => "dummy",
        "lastname" => "name"
    ]);

    $user->refresh();

    expect($user->firstname)->toBe('dummy');
    expect($user->lastname)->toBe('name');
    expect($user->name)->toBe('dummy.name');
    expect($user->email)->toBe('dummy.name@news.com');
});
