import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '../ui/modeToggler'
import Image from 'next/image'
import logoDark from '../../app/assets/GenDoc_logo_for_dark.png'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-4 bg-background'>
      <div className='flex items-center'>
        <Link href='/' className='text-2xl font-bold text-foreground'>
          <Image src={logoDark} width={100} height={100} alt='GenDoc Logo' />
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <Button variant='outline' asChild>
          <Link href='/login'>Login</Link>
        </Button>
        <Button asChild>
          <Link href='/signup'>Create Account</Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
