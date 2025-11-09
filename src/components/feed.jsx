import React, { useEffect, useState } from "react";
import Post from "./post";
import { useGlobal } from "./context/GlobalContext";


const Feed = () => {
  const { posts } = useGlobal();
  const [dummyPosts, setDummyPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load dummy posts only once
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await response.json();

        const mapped = data.map((post, index) => ({
          id: post.id,
          user: {
            name: `User ${post.userId}`,
            avatar: `https://randomuser.me/api/portraits/men/${index + 10}.jpg`,
          },
          content: post.body,
          image: `https://picsum.photos/seed/${post.id}/600/400`,
          likes: Math.floor(Math.random() * 100),
        }));

        setDummyPosts(mapped);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dummy posts:", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const allPosts = [...posts, ...dummyPosts];

  return (
    <main className="min-h-[60vh] bg-white rounded-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold">Citizen Feed</h2>

      {loading ? (
        <p className="text-gray-500 text-center">Loading feed...</p>
      ) : allPosts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet!</p>
      ) : (
        allPosts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            user={post.user}
            content={post.content}
            imageUrl={post.image}
            initialLikes={post.likes}
          />
        ))
      )}
    </main>
  );
};

export default Feed;
