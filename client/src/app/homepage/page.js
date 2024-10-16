import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

const Homepage = () => {
  return (
    <div className='space-y-5 p-10'>
      <div
        className='grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3 md:grid-flow-col'
        style={{ maxHeight: '60vh' }}
      >
        <div className='md:row-span-4'>
          <ScrollArea className='h-[400px] rounded-md border'>
            <div className='p-4'>
              <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
              {tags.map((tag) => (
                <>
                  <div key={tag} className='text-sm'>
                    {tag}
                  </div>
                  <Separator className='my-2' />
                </>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className='md:col-span-2 bg-blue-600'>02</div>
        <div className='md:row-span-3 md:col-span-2  bg-green-600'>03</div>
      </div>
    </div>
  )
}

export default Homepage
