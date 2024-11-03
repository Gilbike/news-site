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
        Schema::table("articles", function (Blueprint $table) {
            $table->string('slug')->default('invalid-slug');
        });

        $this->populateSlugs();

        Schema::table("articles", function (Blueprint $table) {
            $table->string('slug')->unique()->default(null)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("articles", function (Blueprint $table) {
            $table->dropUnique(['slug']);
            $table->dropColumn('slug');
        });
    }

    protected function populateSlugs()
    {
        $articles = DB::table('articles')->select('id', 'title')->get();

        foreach ($articles as $article) {
            $slug = Str::slug($article->title);

            DB::table('articles')->where('id', '=', $article->id)->update(['slug' => $slug]);
        }
    }
};
