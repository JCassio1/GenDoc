import { Dashboard } from '@/components/dashboard/dashboard'
import { accounts, mails } from '@/components/mockdata'
import { cookies } from 'next/headers'
import React from 'react'
// import { RequestQueue } from '@/components/ui/requestsQueue'
// import { Button } from '@/components/ui/button'
// import cardBg from '../assets/categories_assets/cardBg.png'
// import Image from 'next/image'

// const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

const Homepage = () => {
  const layout = cookies().get('react-resizable-panels:layout:mail')
  const collapsed = cookies().get('react-resizable-panels:collapsed')

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <div className='hidden flex-col md:flex'>
      <Dashboard
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </div>
  )
}

export default Homepage
