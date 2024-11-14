<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table("sections", function (Blueprint $table) {
            $table->string('slug')->default('invalid-slug');
        });

        $this->populateSlugs();

        Schema::table("sections", function (Blueprint $table) {
            $table->string('slug')->unique()->default(null)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("sections", function (Blueprint $table) {
            $table->dropUnique(['slug']);
            $table->dropColumn("slug");
        });
    }

    protected function populateSlugs()
    {
        $sections = DB::table('sections')->select('id', 'name')->get();

        foreach ($sections as $section) {
            $slug = Str::slug($section->name);

            DB::table('sections')->where('id', '=', $section->id)->update(['slug' => $slug]);
        }
    }
};
