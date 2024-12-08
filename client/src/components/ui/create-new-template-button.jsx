import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Separator } from './separator'
import { Button } from './button'
import { ChevronDown, Receipt, ReceiptText } from 'lucide-react'

export const CreateNewTemplateButton = () => {
  const icon = {
    size: 18,
    rightSpace: 3
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='purple'>
          Create New <Separator className='mx-2' orientation='vertical' /> <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Receipt className={`mr-${icon.rightSpace}`} size={icon.size} /> Invoices
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ReceiptText className={`mr-${icon.rightSpace}`} size={icon.size} /> Receipts
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
