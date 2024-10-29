<?php

use App\Models\User;

test('sections page can be rendered', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/sections');

    $response->assertOk();
});
