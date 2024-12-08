'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  username: z.string().min(2).max(50)
})

export const DynamicForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ''
    }
  })

  function onSubmit(values) {
    console.log(values)
  }
  return (
    <div className='bg-gray-100 dark:bg-gray-800 p-4 shadow h-screen'>
      <div className='bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md h-full max-w-screen-lg mx-auto'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 h-full'>
            <div className='flex flex-col space-y-2'>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...form.register('username')} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </div>
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
