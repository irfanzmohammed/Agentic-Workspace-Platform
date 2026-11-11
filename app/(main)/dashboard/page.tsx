import { checkUser } from '@/actions/check-user'
import React from 'react'
import { redirect } from 'next/navigation';
const DashboardPage =async () => {

    const user= await checkUser();
    if(!user) redirect("/sign-in")
        
  return (
    <div className='p-8'>
        <p className='text-white'>welcome {user.name ?? user.email}</p>
        <p>your userid in db is{user.id}</p>

    </div>
  )
}

export default DashboardPage