<?php

test('', function () {
  $response = $this->get('/rss');

  $response->assertOk();
});