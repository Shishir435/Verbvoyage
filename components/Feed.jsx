"use client";

import { useState, useEffect } from "react";

import VerbCard from "./VerbCard";
import CreatePencil from "./CreatePencil";

const VerbCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 verb_layout ">
      {data.map((post) => (
        <VerbCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/verb");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterVerbs = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.verb)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterVerbs(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterVerbs(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <h1 className="head_text text-center">
        Inspire, Share & Discover
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center"> Your Thoughts</span>
      </h1>
      <p className="desc text-center">
        Embrace the Journey of Minds with VerbVoyage.
      </p>
      <CreatePencil/>
      {/* All Verbs */}
     
         {searchText ? (
        <VerbCardList data={searchedResults} handleTagClick={handleTagClick} />
      ) : (
        <VerbCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    
    </section>
  );
};

export default Feed;
