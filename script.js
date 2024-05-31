function login() {
    // Mock login process
    // Show feeds after login
    document.getElementById('login').style.display = 'none';
    document.getElementById('feeds').style.display = 'block';
    fetchFeeds(); // Fetch and display mock feeds
}

function fetchFeeds() {
    // Mock data for Facebook and Twitter feeds
    const facebookPosts = [
        "Facebook post 1",
        "Facebook post 2",
        "Facebook post 3"
    ];

    const twitterPosts = [
        "Twitter post 1",
        "Twitter post 2",
        "Twitter post 3"
    ];

    // Display Facebook posts
    const facebookList = document.getElementById('facebook-posts');
    facebookPosts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post;
        facebookList.appendChild(li);
    });

    // Display Twitter posts
    const twitterList = document.getElementById('twitter-posts');
    twitterPosts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post;
        twitterList.appendChild(li);
    });
}
