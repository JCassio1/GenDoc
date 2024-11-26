import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export function RequestQueue({ tags }) {
  return (
    <ScrollArea className='h-[400px] rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
        {tags.map((tag, index) => (
          <>
            <div key={index} className='text-sm'>
              {tag}
            </div>
            <Separator className='my-2' />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
