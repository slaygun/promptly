'use client'
import { Check, Copy } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const PromptCard = ({post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setcopied] = useState('')

  const handleCopy = () => {
    setcopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setcopied(''), 2000);
  }

  const handleProfileClick = () => {
    if (post.creator._id === session?.user.id)
      return router.push("/profile")

    const params = new URLSearchParams();
    params.set("name", post.creator.username);
    router.push(`/profile/${post.creator._id}?${params.toString()}`)
  }

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>{post.creator.username}</h3>
            <p className='font-inter tex-sm text-gray-500'>{post.creator.email}</p>
          </div>
        </div>

        <div onClick={handleCopy}>
          { copied === post.prompt ? (
            <Check className='w-4 h-4 cursor-pointer'/>           
          ): (
            <Copy className='w-4 h-4 cursor-pointer'/>
          )}
        </div>
      </div>

      <p className='py-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
      <p className='px-1.5 py-1 font-inter border rounded-full text-gray-700 text-sm w-fit metallic-button cursor-pointer'
        onClick={() => handleTagClick && 
          handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      {session?.user.id === post.creator._id &&
      pathName === '/profile' && (
        <div className='mt-5 pt-3 flex-end gap-4 border-t border-gray-300'>
          <p 
            className='font-inter px-1.5 py-1 rounded-lg text-white text-sm bg-green-500 hover:bg-green-600 transition-all cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p 
            className='font-inter px-1.5 py-1 rounded-lg text-white text-sm bg-red-500 hover:bg-red-600 transition-all cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}
