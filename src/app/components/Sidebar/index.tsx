import { Logo } from '@/app/components/Sidebar/Logo'
import {
  Search,
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  Cog,
  LifeBuoy,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'

export function Sidebar() {
  return (
    <aside className="flex flex-col items-center gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="flex w-11/12 items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="w-10/12 flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder:text-zinc-600"
          placeholder="Search"
          type="text"
        />
      </div>
      <nav className="w-full space-y-0.5">
        <NavItem title="home" icon={Home} />
        <NavItem title="dashboard" icon={BarChart} />
        <NavItem title="projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>
      <div className='w-full mt-auto flex flex-col gap-6'>
        <nav className='w-full space-y-0.5'>
          <NavItem title="support" icon={LifeBuoy} />
          <NavItem title="settings" icon={Cog} />
        </nav>
        <UsedSpaceWidget />
        <div className='h-px bg-zinc-200' />
        <Profile />
      </div>
    </aside>
  )
}
