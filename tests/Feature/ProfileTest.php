<?php

use App\Models\User;
use Hash;

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

test('can update password', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->put(route('profile.password.update'), [
        'current_password' => 'password',
        'password' => 'dummy-password',
        'password_confirmation' => 'dummy-password'
    ]);

    $user->refresh();

    $response->assertSessionHasNoErrors()->assertRedirect();
    expect(Hash::check('dummy-password', $user->password, ))->toBeTrue();
});