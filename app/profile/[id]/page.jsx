'use client'
import { Profile } from '@/components/Profile'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'

export default function page({ params }) {
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");
    console.log(userName)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${params?.id}/posts`);
          const data = await response.json();
          setPosts(data);
        }

        if(params?.id) fetchPosts();
    },[params.id])

  return (
    <Profile
        name={`${userName}'s`}
        desc={`Welcome to ${userName}'s profile!`}
        data={posts}
    />
  )
}
