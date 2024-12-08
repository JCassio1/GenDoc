import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ModeToggle } from '../ui/modeToggler'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { AppSidebar } from '../layout/app-sidebar'
import { CreateNewTemplateButton } from '../ui/create-new-template-button'
import { DynamicForm } from '../ui/dynamic-form'

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
          <CreateNewTemplateButton />
          <div className='ml-auto'>
            <ModeToggle />
          </div>
        </header>
        <DynamicForm />
      </SidebarInset>
    </SidebarProvider>
  )
}
