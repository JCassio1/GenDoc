import { AppSidebar } from '@/components/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ModeToggle } from '../ui/modeToggler'

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
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className='hidden md:block'>
                <BreadcrumbLink href='#'>All Documents</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
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
