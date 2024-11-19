<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function show(Request $request)
    {
        return inertia('Profile');
    }

    public function update(Request $request)
    {
        $user = $request->user();
        $validated = $request->validate([
            'firstname' => 'required',
            'lastname' => 'required'
        ]);


        if ($user->name != 'admin' && $user->email != 'admin@news.com') {
            $isNameDuplicated = DB::table("users")->where(["firstname" => $validated["firstname"], "lastname" => $validated["lastname"]])->exists();

            $username = strtolower($validated["firstname"] . '.' . $validated["lastname"]);

            if ($isNameDuplicated) {
                $username .= '.' . $user->id;
            }

            $validated["name"] = $username;
            $validated["email"] = $username . "@news.com";
        }

        $user->update($validated);

        return back();
    }

    public function pictureUpdate(Request $request)
    {
        $user = $request->user();
        $image = base64_encode(file_get_contents($request->file('profilepicture')->path()));

        $user->profilepicture = $image;
        $user->save();

        return back();
    }
}
