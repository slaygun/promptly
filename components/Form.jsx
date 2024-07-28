import Link from 'next/link'
import React from 'react'

export const Form = ({ type, post, setPost, submitting, 
  handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>{type} Post</h1>
      <p className='py-2 desc text-left max-w-md'>
        {type} and share amazing prompts to ignite creativity and 
        inspire innovation across a dynamic community.
      </p>

        <form
          onSubmit={handleSubmit}
          className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
        >
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Your AI Prompt
            </span>

            <textarea
              value={post.prompt}
              onChange={(e) => setPost({...post,
                prompt: e.target.value
              })}
              placeholder='Write your prompt here...'
              required
              className='form_textarea'
            />
          </label>

          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Tag&nbsp;
              <span className='font-normal'>
                (#product, #web-development, #idea)
              </span>
            </span>

            <input
              value={post.tag}
              onChange={(e) => setPost({...post,
                tag: e.target.value
              })}
              placeholder='#tag'
              required
              className='form_input'
            />

            <div className='flex-end px-3 pt-5 gap-4'>
              <Link href='/' className='px-1.5 py-1 rounded-lg text-white text-base bg-red-500 hover:bg-red-600 transition-all'>
                Cancel
              </Link>

              <button
                type='submit'
                disabled={submitting}
                className='px-1.5 py-1 rounded-lg text-white text-base bg-green-500 hover:bg-green-600 transition-all'
              >
                {submitting ? `${type}...` : type}
              </button>
            </div>
          </label>
        </form>
    </section>
  )
}
