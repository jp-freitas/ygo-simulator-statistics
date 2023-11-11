import { Logo } from "@/components/Sidebar/Logo";
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  Cog,
  LifeBuoy,
  Search,
} from "lucide-react";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "@/components/Form/Input";

export function Sidebar() {
  return (
    <aside className="flex flex-col items-center gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="search" />
      </Input.Root>
      <nav className="w-full space-y-0.5">
        <NavItem title="home" icon={Home} />
        <NavItem title="dashboard" icon={BarChart} />
        <NavItem title="projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>
      <div className="mt-auto flex w-full flex-col gap-6">
        <nav className="w-full space-y-0.5">
          <NavItem title="support" icon={LifeBuoy} />
          <NavItem title="settings" icon={Cog} />
        </nav>
        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  );
}
