import React from 'react'
import { PromptCard } from './PromptCard'

export const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text'>{name} Profile</h1>
      <p className='desc'>{desc}</p>
      <h3 className='pt-8 text-2xl sm:text-4xl font-bold'>Prompts</h3>
      <div className='prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}

