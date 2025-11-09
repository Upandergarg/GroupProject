import React, { useState } from "react";
import { useGlobal } from "../context/GlobalContext";

const GoodDeeds = () => {
  const { addAuraPoint, addPost } = useGlobal();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    category: "Human",
    image: null,
  });
  const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.title || !formData.description) {
    setMessage("Please fill all required fields!");
    return;
  }

  let imageBase64 = null;

  if (formData.image) {
    imageBase64 = await toBase64(formData.image);
  }

  const newPost = {
    id: Date.now(),
    user: {
      name: "Upander Garg",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    title: formData.title,
    content: formData.description,
    location: formData.location,
    category: formData.category,
    image: imageBase64, // ✅ Save Base64 string
    likes: 0,
  };

  addPost(newPost);
  addAuraPoint();
  setMessage("Good Deed submitted successfully! 🌟 You earned +1 Aura Point.");
  setFormData({
    title: "",
    description: "",
    location: "",
    category: "Human",
    image: null,
  });
};

// Helper: convert image to base64
const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};


  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-purple-600 mb-6 text-center">
        Share Your Good Deed 💖
      </h2>

      {message && (
        <p className="text-center mb-4 text-green-600 font-medium">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full border border-gray-300 rounded-md p-2"
        />

        {/* Description */}
        <textarea
          placeholder="Describe your good deed..."
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md p-2"
        ></textarea>

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md p-2"
        />

        {/* Category */}
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option>Human</option>
          <option>Animal</option>
          <option>Environment</option>
          <option>Helping</option>
          <option>Others</option>
        </select>

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files[0] })
          }
          className="w-full border border-gray-300 rounded-md p-2"
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition w-full"
        >
          Submit Deed
        </button>
      </form>
    </div>
  );
};

export default GoodDeeds;
