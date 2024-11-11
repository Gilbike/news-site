<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title>{{ $title }}</title>
        <link>{{ Request::url() }}</link>
        <description>{{ $title }}</description>
        @foreach ($articles as $article)
            <item>
                <title>{{ $article->title }}</title>
                <link>{{ Request::root() . "/" . $article->section->name . "/" . $article->slug }}</link>
                <description>{{ $article->small_summary }}</description>
                <author>{{ $article->author->firstname . " " . $article->author->lastname }}</author>
                <category>{{ $article->section->name }}</category>
                <pubDate>{{ $article->created_at }}</pubDate>
            </item>
        @endforeach
    </channel>
</rss>