async function loadFeed() {
  try {
    const profile = await fetchProfile();
    const friends = await fetchFriends(profile.id);

    const allPosts = await Promise.allSettled(
      friends.map(friend => fetchPosts(friend.id))
    );

    const posts = [];

    for (const result of allPosts) {
      if (result.status === "fulfilled") {
        posts.push(...result.value);
      } else {
        console.warn("Failed to load posts for a friend", result.reason);
      }
    }
    const commentsPromises = posts.map(post =>
      fetchComments(post.id)
        .then(comments => ({ post, comments }))
        .catch(err => {
          console.warn(`Failed to load comments for post ${post.id}`);
          return { post, comments: [] };
        })
    );

    const postsWithComments = await Promise.all(commentsPromises);
    postsWithComments.forEach(({ post, comments }) => {
      post.comments = comments;
    });

    renderFeed(profile, posts);
  } catch (error) {
    console.error("Critical error loading feed:", error);
  }
}
