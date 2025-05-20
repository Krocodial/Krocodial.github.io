// Cyber Attack Feed JS
async function fetchSingleFeed(rssUrl, sourceName, count) {
    try {
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        if (data && data.items && data.items.length > 0) {
            return data.items.slice(0, count).map(item => ({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                source: sourceName
            }));
        } else {
            return [];
        }
    } catch (e) {
        return [];
    }
}
async function fetchAllCyberFeeds() {
    const feed = document.getElementById('cyber-attack-feed');
    feed.innerHTML = 'Loading latest news from top sources...';
    const feeds = [
        { url: 'https://krebsonsecurity.com/feed/', name: 'Krebs on Security', count: 3 },
        { url: 'https://thehackernews.com/rss.xml', name: 'The Hacker News', count: 3 },
        { url: 'https://www.bleepingcomputer.com/feed/', name: 'BleepingComputer', count: 3 },
        { url: 'https://www.darkreading.com/rss.xml', name: 'Dark Reading', count: 3 }
    ];
    // Fetch all articles from all feeds
    const results = await Promise.all(feeds.map(f => fetchSingleFeed(f.url, f.name, f.count)));
    // Flatten and sort by date descending
    const allArticles = results.flat().sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    if (allArticles.length === 0) {
        feed.innerHTML = '<div class="mb-2 text-start text-secondary">No recent news found.</div>';
        return;
    }
    feed.innerHTML = allArticles.map(item =>
        `<div class='mb-2 text-start'><a href='${item.link}' target='_blank' class='text-white fw-bold'>${item.title}</a><br><small class='text-secondary'>${item.source} &middot; ${new Date(item.pubDate).toLocaleString()}</small></div>`
    ).join('');
}
fetchAllCyberFeeds();
