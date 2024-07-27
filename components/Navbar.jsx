'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { Menu, UserCircleIcon } from 'lucide-react'

export const Navbar = () => {
  const { data: session } = useSession();

  const [isToggleOn, setToggleOn] = useState(false);

  const handleToggle = () => {
    console.log("click")
    setToggleOn(prev => !prev);
  }

  const [providers, setProviders] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-4'>
      <Link href="/" className='flex flex-center gap-2'>
        <Image
          src="/assets/images/logo.png"
          alt="Promptly Logo"
          width="35"
          height="35"
          className='object-contain'
        />
        <p className='text-2xl font-bold' >Promptly</p>
      </Link>

      <div className='sm:flex sm:flex-center gap-4 hidden'>
        {session?.user ? (
          <>
            <Link href='/create-post' className='black_btn'> Create Post </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={40}
                height={40}
                className='rounded-full border-2 border-black hover:border-4 hover:border-gray-500 transition-all'
                alt='profile'
              />
            </Link>
          </>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign In
              </button>
            )
            )}
          </>
        )}
      </div>

      {/* Mobile Nav */}
      <div className='sm:hidden relative space-y-2'>

        {session?.user ? (
          <>
            <Menu className='w-8 h-8 p-1 border-2 rounded-lg  cursor-pointer' onClick={handleToggle} />
            {isToggleOn && (
              <div className='dropdown'>
                <Link href='/profile' className='flex flex-center'>
                  <Image
                    src={session?.user.image}
                    width={40}
                    height={40}
                    className='rounded-full border-2 border-black hover:border-4 hover:border-gray-500 transition-all mr-2'
                    alt='profile'
                  /> Profile
                </Link>
                <Link href='/create-post' className='black_btn'> Create Post </Link>
                <button type='button' onClick={signOut} className='w-full outline_btn'>
                  Sign Out
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='w-full black_btn'
              >
                Sign In
              </button>
            )
            )}
          </>
        )}

      </div>
    </nav>
  )
}
