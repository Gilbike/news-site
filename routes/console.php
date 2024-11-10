<?php

use App\Models\User;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Artisan::command('admin:insert', function () {
    $admin = User::create([
        'name' => 'admin',
        'email' => 'admin@news.com',
        'password' => Hash::make('admin'),
        'firstname' => 'Site',
        'lastname' => 'Admin',
    ]);

    $admin->email_verified_at = now();
    $admin->remember_token = Str::random(10);
    $admin->editor = true;
    $admin->title = 'Editor-in-chief';
    $admin->save();

    $this->newLine();
    $this->info('Successfully created admin account!');
    $this->info('Email: admin@news.com');
    $this->info('Password: admin');
})->purpose('Insert an admin account to journalists');
