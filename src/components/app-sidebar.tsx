"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  TerminalIcon,
  LayoutDashboardIcon,
  BriefcaseIcon,
  MegaphoneIcon,
  Settings2Icon,
  UsersIcon,
  TrendingUpIcon,
  HeartHandshakeIcon,
} from "lucide-react"

// Sample CRM Data
const data = {
  user: {
    name: "Harshith",
    email: "harshith@outskill.com",
    avatar: "",
  },
  teams: [
    {
      name: "Sales HQ",
      logo: <BriefcaseIcon />,
      plan: "Enterprise",
    },
    {
      name: "Marketing Ops",
      logo: <MegaphoneIcon />,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: <TerminalIcon />,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboardIcon />,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
        {
          title: "Analytics",
          url: "/dashboard/analytics",
        },
      ],
    },
    {
      title: "Sales",
      url: "#",
      icon: <TrendingUpIcon />,
      items: [
        {
          title: "Contacts",
          url: "/dashboard/contacts",
        },
        {
          title: "Deals Pipeline",
          url: "/dashboard/deals",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: <Settings2Icon />,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Integrations",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Sales Team",
      url: "#",
      icon: <UsersIcon />,
    },
    {
      name: "Marketing Ops",
      url: "#",
      icon: <MegaphoneIcon />,
    },
    {
      name: "Customer Success",
      url: "#",
      icon: <HeartHandshakeIcon />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
