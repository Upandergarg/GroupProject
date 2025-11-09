import React, { useState } from 'react';

const Post = ({ id,user, content, imageUrl, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  return (
    <div className=" rounded-xl p-4 space-y-3 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <img
          src={user.avatar}
          className="w-12 h-12 rounded-full ring-2 ring-offset-2 ring-blue-500 shadow-md object-cover hover:scale-105 transition-transform duration-200"
          alt="User"
        />
        <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-500">{content}</p>
        </div>
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Post"
          className="w-full max-h-[450px] object-cover rounded-xl  shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      )}

      <div className="flex gap-6 mt-2">
        <button onClick={handleLike} className="like-btn text-blue-600 hover:underline">
          👍 Like (<span>{likes}</span>)
        </button>
        <button className="text-green-600 hover:underline" onClick={() => document.getElementById(`comment-form-${user.id}`).classList.toggle('hidden')}>
          💬 Comment
        </button>
      </div>

      <form id={`comment-form-${user.id}`} className="hidden mt-2" onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentInput}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          className=" rounded px-3 py-2 w-full"
        />
        <button type="submit" className="mt-2 bg-blue-600 text-white rounded py-1 px-3">Submit</button>
      </form>

      <div className="comments text-sm text-gray-700 mt-2 space-y-3">
        {comments.map((comment, index) => (
          <p key={index} className="border-b pb-1">{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default Post;