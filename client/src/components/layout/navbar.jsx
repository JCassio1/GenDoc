import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sun } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-4 bg-background'>
      <div className='flex items-center'>
        <Link href='/' className='text-2xl font-bold text-foreground'>
          Logo
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <Button variant='outline' asChild>
          <Link href='/login'>Login</Link>
        </Button>
        <Button asChild>
          <Link href='/signup'>Create Account</Link>
        </Button>
        <Button>
          <Sun />
        </Button>
        {/* <ModeToggle /> */}
      </div>
    </nav>
  )
}

export default Navbar
