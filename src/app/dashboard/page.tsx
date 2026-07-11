"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Briefcase,
  Activity,
  Plus,
  Download,
  Calendar,
  CheckCircle2,
  Clock,
} from "lucide-react"

// Mock CRM Data
const pipelineData = [
  { name: "Jan", revenue: 45000, target: 40000 },
  { name: "Feb", revenue: 52000, target: 42000 },
  { name: "Mar", revenue: 49000, target: 45000 },
  { name: "Apr", revenue: 61000, target: 48000 },
  { name: "May", revenue: 58000, target: 50000 },
  { name: "Jun", revenue: 71000, target: 55000 },
  { name: "Jul", revenue: 78000, target: 60000 },
  { name: "Aug", revenue: 85000, target: 65000 },
  { name: "Sep", revenue: 92000, target: 70000 },
  { name: "Oct", revenue: 99000, target: 75000 },
  { name: "Nov", revenue: 110000, target: 80000 },
  { name: "Dec", revenue: 125000, target: 85000 },
]

const leadSources = [
  { name: "Organic Search", value: 450, color: "rgb(99, 102, 241)" },
  { name: "Paid Ads", value: 300, color: "rgb(79, 70, 229)" },
  { name: "Referrals", value: 150, color: "rgb(67, 56, 202)" },
  { name: "Social Media", value: 120, color: "rgb(55, 48, 163)" },
  { name: "Email Campaigns", value: 80, color: "rgb(49, 46, 129)" },
]

const recentDeals = [
  {
    id: "DEAL-001",
    name: "Enterprise Upgrade",
    company: "Acme Corp",
    value: "$45,000.00",
    stage: "Negotiation",
    rep: "Sarah Jenkins",
    date: "Just now",
  },
  {
    id: "DEAL-002",
    name: "SaaS Subscription Pack",
    company: "Initech",
    value: "$12,500.00",
    stage: "Proposal",
    rep: "Alex Rivera",
    date: "12 mins ago",
  },
  {
    id: "DEAL-003",
    name: "Custom API Integration",
    company: "Stark Industries",
    value: "$85,000.00",
    stage: "Closed Won",
    rep: "Sarah Jenkins",
    date: "2 hours ago",
  },
  {
    id: "DEAL-004",
    name: "Pilot Program Kickoff",
    company: "Wayne Enterprises",
    value: "$8,000.00",
    stage: "Qualified",
    rep: "Michael Chen",
    date: "Yesterday",
  },
]

export default function Page() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(handle)
  }, [])

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-background">
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-border bg-card/50 px-6 backdrop-blur-md transition-[width,height] duration-150 ease-out transform-gpu">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1 text-muted-foreground hover:bg-accent" />
            <Separator
              orientation="vertical"
              className="mr-2 h-4 self-center bg-border"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" className="text-muted-foreground hover:text-foreground">
                    CRM Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block text-muted-foreground" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold text-foreground">Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-2">
            <button className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-accent">
              <Calendar className="h-4 w-4" />
              <span>Last 30 days</span>
            </button>
            <button className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:shadow-md">
              <Plus className="h-4 w-4" />
              <span>New Lead</span>
            </button>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* CRM Metrics Row */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-250 hover:translate-y-[-2px] hover:shadow-md">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Total Pipeline</p>
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <DollarSign className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-foreground">$150,500.00</span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="h-3.5 w-3.5" />
                  +18.4%
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">vs. $127,110.00 last month</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-250 hover:translate-y-[-2px] hover:shadow-md">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">New Leads</p>
                <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                  <Users className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-foreground">+128</span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="h-3.5 w-3.5" />
                  +24.2%
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">vs. +103 last month</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-250 hover:translate-y-[-2px] hover:shadow-md">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Win Rate</p>
                <div className="rounded-lg bg-amber-500/10 p-2 text-amber-600 dark:text-amber-400">
                  <Briefcase className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-foreground">22.8%</span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-semibold text-destructive">
                  <TrendingDown className="h-3.5 w-3.5" />
                  -1.5%
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">vs. 24.3% last month</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-250 hover:translate-y-[-2px] hover:shadow-md">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Active Deals</p>
                <div className="rounded-lg bg-destructive/10 p-2 text-destructive">
                  <Activity className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-foreground">32</span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  +4 new
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Avg. size $4.7k per deal</p>
            </div>
          </div>

          {/* CRM Revenue Overview & Deal Tracking */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Revenue Area Chart */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Revenue Funnel Performance</h3>
                  <p className="text-sm text-muted-foreground">Closed Sales vs Monthly Target</p>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-md border border-border bg-card px-2 py-1 text-xs font-medium text-secondary-foreground hover:bg-accent">
                    Export Report
                  </button>
                </div>
              </div>
              <div className="h-[320px] w-full">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={pipelineData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="rgb(99, 102, 241)" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="rgb(99, 102, 241)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="rgb(79, 70, 229)" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="rgb(79, 70, 229)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                      <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                      <RechartsTooltip />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="rgb(99, 102, 241)"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                        animationDuration={300}
                      />
                      <Area
                        type="monotone"
                        dataKey="target"
                        stroke="rgb(79, 70, 229)"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorTarget)"
                        animationDuration={300}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted-foreground">Loading charts...</div>
                )}
              </div>
            </div>

            {/* Recent Deals Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Recent Active Deals</h3>
                  <p className="text-sm text-muted-foreground">Overview of current pipeline status</p>
                </div>
                <button className="text-xs font-semibold text-primary hover:opacity-80">
                  View Pipeline
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {recentDeals.map((deal) => (
                  <div
                    key={deal.id}
                    className="flex items-center justify-between rounded-lg p-2 transition-all hover:bg-accent"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
                        {deal.company.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{deal.name}</p>
                        <p className="text-xs text-muted-foreground">{deal.company} • {deal.rep}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-foreground">
                        {deal.value}
                      </p>
                      <div className="mt-0.5 flex items-center gap-1 justify-end">
                        {deal.stage === "Closed Won" && <CheckCircle2 className="h-3 w-3 text-emerald-500" />}
                        {deal.stage === "Negotiation" && <Clock className="h-3 w-3 text-amber-500" />}
                        {deal.stage === "Proposal" && <Clock className="h-3 w-3 text-indigo-500" />}
                        {deal.stage === "Qualified" && <Clock className="h-3 w-3 text-muted-foreground" />}
                        <span className="text-[10px] text-muted-foreground">{deal.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lead Sources & Quick Actions Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Lead Sources Pie Chart */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Lead Acquisition Channels</h3>
                  <p className="text-sm text-muted-foreground">Distribution of lead sources for the active quarter</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="h-[220px] w-[220px] shrink-0">
                  {mounted ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={leadSources}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          animationDuration={300}
                        >
                          {leadSources.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-muted-foreground">Loading...</div>
                  )}
                </div>
                <div className="grid flex-1 grid-cols-2 gap-4">
                  {leadSources.map((item) => (
                    <div key={item.name} className="flex flex-col rounded-xl border border-border p-4">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm font-medium text-muted-foreground">{item.name}</span>
                      </div>
                      <span className="mt-1 text-xl font-bold text-foreground">{item.value} leads</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-foreground">CRM Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:bg-accent hover:shadow-sm">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Plus className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-secondary-foreground">Add Deal</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:bg-accent hover:shadow-sm">
                  <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                    <Download className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-secondary-foreground">Export Deals</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:bg-accent hover:shadow-sm">
                  <div className="rounded-lg bg-amber-500/10 p-2 text-amber-600 dark:text-amber-400">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-secondary-foreground">Assign Leads</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:bg-accent hover:shadow-sm">
                  <div className="rounded-lg bg-destructive/10 p-2 text-destructive">
                    <Activity className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-secondary-foreground">Call Logs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
