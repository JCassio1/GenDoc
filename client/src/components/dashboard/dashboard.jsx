import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ModeToggle } from '../ui/modeToggler'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { AppSidebar } from '../layout/app-sidebar'

export function Dashboard() {
  return (
    <SidebarProvider
      style={{
        '--sidebar-width': '350px'
      }}
    >
      <AppSidebar />
      <SidebarInset>
        <header className='sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4'>
          <SidebarTrigger className='-ml-1' />
          <Separator orientation='vertical' className='mr-2 h-4' />
          <Button>
            <Plus className='mr-1 h-5 w-5' />
            Create Document
          </Button>
          <div className='ml-auto'>
            <ModeToggle />
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4'>
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className='aspect-video h-12 w-full rounded-lg bg-muted/50' />
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
