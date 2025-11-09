import React from 'react';
import Post from './post';
import User1 from '../assets/im1.jpg';
import User2 from '../assets/im2.jpg';
const Feed = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: 'Walter White',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxLspZzfvP8zUZjp3p_uiI4uKT3haXiXrIw&s',
      },
      content: 'Change doesn’t knock on your door — YOU have to be the one who knocks. 🚪💥 Today me & my friends cleaned our area, tomorrow it could be the whole city. Let’s make it happen! #ProjectShield #CleanIndia',
      image: User2,
      likes: 0,
    },
    {
      id: 2,
      user: {
        name: 'Walter White',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxLspZzfvP8zUZjp3p_uiI4uKT3haXiXrIw&s',
      },
      content: 'I am not asking for charity. I am not begging. What I’m doing… is building. Brick by brick, meal by meal. Today I put food in the hands of those who had none. Tomorrow, maybe it’s the whole city. This is not kindness. This is inevitability. #FoodDrive #CitizenPower',
      image: User1,
      likes: 0,
    },
  ];

  return (
    <main className="min-h-[60vh] bg-white rounded-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold">Citizen Feed</h2>
      {posts.map(post => (
        <Post
  key={post.id}
  id={post.id}
  user={post.user}
  content={post.content}
  imageUrl={post.image}
  initialLikes={post.likes}
/>
      ))}
    </main>
  );
};

export default Feed;