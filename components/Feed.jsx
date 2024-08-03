'use client'
import React, { useEffect, useState } from 'react'
import { PromptCard } from './PromptCard';

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-14 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

export const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [searchedResults, setsearchedResults] = useState([])

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i"); // 'i' 
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
    const results =  filterPrompts(e.target.value)
    setsearchedResults(results)
  }

  const handleTagClick = (tagName) => {
    setSearchText(tagName)
    const results =  filterPrompts(tagName)
    setsearchedResults(results)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  },[])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search by a Prompt, Tag or Username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />

      </form>
      
      { searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        /> 
      )
      : (
        <PromptCardList
          data={posts}
          handleTagClick={handleTagClick}
        />
    )}

    </section>
  )
}
