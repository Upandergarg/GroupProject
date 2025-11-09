import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  // 🌟 Load aura points from localStorage
  const [auraPoints, setAuraPoints] = useState(
    Number(localStorage.getItem("auraPoints")) || 45
  );

  // 🌟 Load posts from localStorage
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  });

  // 🟣 Function: Add a new Aura point
  const addAuraPoint = () => {
    setAuraPoints((prev) => {
      const updated = prev + 1;
      localStorage.setItem("auraPoints", updated);
      return updated;
    });
  };

  // 🟢 Function: Add new post
  const addPost = (newPost) => {
    setPosts((prev) => {
      const updatedPosts = [newPost, ...prev];
      localStorage.setItem("posts", JSON.stringify(updatedPosts)); // ✅ store in localStorage
      return updatedPosts;
    });
  };

  // 🟡 Sync aura points automatically on change
  useEffect(() => {
    localStorage.setItem("auraPoints", auraPoints);
  }, [auraPoints]);

  // 🟡 Sync posts automatically on change (backup safety)
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <GlobalContext.Provider value={{ auraPoints, addAuraPoint, posts, addPost }}>
      {children}
    </GlobalContext.Provider>
  );
};
