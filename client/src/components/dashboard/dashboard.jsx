'use client'

import { useState } from 'react'
import {
  AlertCircle,
  Archive,
  ArchiveX,
  ChevronDown,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
  cloud
} from 'lucide-react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Nav } from '@/components/ui/nav'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { useMail } from '../useMail'
import { MailList } from '../ui/mailList'
import { MailDisplay } from '../ui/maildisplay'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenuButton } from '../ui/sidebar'

export const Dashboard = ({
  accounts,
  mails,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize
}) => {
  const [isCollapsed, setIsCollapsed] = useState(undefined)
  const [mail] = useMail()

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction='horizontal'
        onLayout={(sizes) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`
        }}
        className='h-full max-h-[730px] items-stretch'
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
          }}
          onResize={() => {
            setIsCollapsed(false)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
          }}
          className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
        >
          <div className={cn('flex h-[52px] items-center justify-center px-2')}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className='flex px-5'>
                  Select Workspace
                  <ChevronDown className='ml-auto pl-3' />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-[--radix-popper-anchor-width]'>
                <DropdownMenuItem>
                  <span>Acme Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Acme Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: 'Inbox',
                label: '128',
                icon: Inbox,
                variant: 'default'
              },
              {
                title: 'Drafts',
                label: '9',
                icon: File,
                variant: 'ghost'
              },
              {
                title: 'Sent',
                label: '',
                icon: Send,
                variant: 'ghost'
              },
              {
                title: 'Junk',
                label: '23',
                icon: ArchiveX,
                variant: 'ghost'
              },
              {
                title: 'Trash',
                label: '',
                icon: Trash2,
                variant: 'ghost'
              },
              {
                title: 'Archive',
                label: '',
                icon: Archive,
                variant: 'ghost'
              }
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: 'Social',
                label: '972',
                icon: Users2,
                variant: 'ghost'
              },
              {
                title: 'Updates',
                label: '342',
                icon: AlertCircle,
                variant: 'ghost'
              },
              {
                title: 'Forums',
                label: '128',
                icon: MessagesSquare,
                variant: 'ghost'
              },
              {
                title: 'Shopping',
                label: '8',
                icon: ShoppingCart,
                variant: 'ghost'
              },
              {
                title: 'Promotions',
                label: '21',
                icon: Archive,
                variant: 'ghost'
              }
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Tabs defaultValue='all'>
            <div className='flex items-center px-4 py-2'>
              <h1 className='text-xl font-bold'>Inbox</h1>
              <TabsList className='ml-auto'>
                <TabsTrigger value='all' className='text-zinc-600 dark:text-zinc-200'>
                  All mail
                </TabsTrigger>
                <TabsTrigger value='unread' className='text-zinc-600 dark:text-zinc-200'>
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <div className='bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
              <form>
                <div className='relative'>
                  <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
                  <Input placeholder='Search' className='pl-8' />
                </div>
              </form>
            </div>
            <TabsContent value='all' className='m-0'>
              <MailList items={mails} />
            </TabsContent>
            <TabsContent value='unread' className='m-0'>
              <MailList items={mails.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
          <MailDisplay mail={mails.find((item) => item.id === mail.selected) || null} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}
