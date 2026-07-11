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
  CreditCard,
  Activity,
  Plus,
  Download,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react"

// Mock Data
const revenueData = [
  { name: "Jan", revenue: 4000, expenses: 2400 },
  { name: "Feb", revenue: 3000, expenses: 1398 },
  { name: "Mar", revenue: 5000, expenses: 3800 },
  { name: "Apr", revenue: 2780, expenses: 3908 },
  { name: "May", revenue: 1890, expenses: 4800 },
  { name: "Jun", revenue: 2390, expenses: 3800 },
  { name: "Jul", revenue: 3490, expenses: 4300 },
  { name: "Aug", revenue: 4200, expenses: 3100 },
  { name: "Sep", revenue: 5800, expenses: 4000 },
  { name: "Oct", revenue: 6200, expenses: 4200 },
  { name: "Nov", revenue: 7500, expenses: 4900 },
  { name: "Dec", revenue: 9000, expenses: 5400 },
]

const trafficData = [
  { name: "Organic", value: 450, color: "rgb(99, 102, 241)" },
  { name: "Direct", value: 300, color: "rgb(79, 70, 229)" },
  { name: "Referral", value: 150, color: "rgb(67, 56, 202)" },
  { name: "Social", value: 100, color: "rgb(55, 48, 163)" },
]

const recentTransactions = [
  {
    id: "TX-9012",
    user: "Aria Montgomery",
    email: "aria@example.com",
    amount: "+$1,250.00",
    status: "Completed",
    date: "Just now",
  },
  {
    id: "TX-9011",
    user: "Marcus Aurelius",
    email: "marcus@example.com",
    amount: "-$420.50",
    status: "Pending",
    date: "10 mins ago",
  },
  {
    id: "TX-9010",
    user: "Clara Oswald",
    email: "clara@example.com",
    amount: "+$3,400.00",
    status: "Completed",
    date: "2 hours ago",
  },
  {
    id: "TX-9009",
    user: "Danny Pink",
    email: "danny@example.com",
    amount: "-$120.00",
    status: "Failed",
    date: "Yesterday",
  },
]

export default function Page() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
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
                    Dashboard
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
              <span>New Report</span>
            </button>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Metrics Row */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-250 hover:translate-y-[-2px] hover:shadow-md">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <DollarSign className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-foreground">$45,231.89</span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="h-3.5 w-3.5" />
                  +20.1%
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">vs. $37,654.00 last month</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-250 hover:translate-y-[-2px] hover:shadow-md">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Subscriptions</p>
                <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                  <Users className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-foreground">+2,350</span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="h-3.5 w-3.5" />
                  +180.1%
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">vs. +832 last month</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-250 hover:translate-y-[-2px] hover:shadow-md">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Sales Growth</p>
                <div className="rounded-lg bg-amber-500/10 p-2 text-amber-600 dark:text-amber-400">
                  <CreditCard className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-foreground">+12,234</span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-semibold text-destructive">
                  <TrendingDown className="h-3.5 w-3.5" />
                  -4.5%
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">vs. +12,810 last month</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-250 hover:translate-y-[-2px] hover:shadow-md">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Active Now</p>
                <div className="rounded-lg bg-destructive/10 p-2 text-destructive">
                  <Activity className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-foreground">+573</span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  +12m ago
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">+201 since last hour</p>
            </div>
          </div>

          {/* Primary Charts & Transactions Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Area Chart Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Revenue Overview</h3>
                  <p className="text-sm text-muted-foreground">Monthly breakdown of income and expenses</p>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-md border border-border bg-card px-2 py-1 text-xs font-medium text-secondary-foreground hover:bg-accent">
                    Export
                  </button>
                </div>
              </div>
              <div className="h-[320px] w-full">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={revenueData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="rgb(99, 102, 241)" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="rgb(99, 102, 241)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
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
                        dataKey="expenses"
                        stroke="rgb(79, 70, 229)"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorExpenses)"
                        animationDuration={300}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted-foreground">Loading charts...</div>
                )}
              </div>
            </div>

            {/* Recent Transactions Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
                  <p className="text-sm text-muted-foreground">Overview of recent activity</p>
                </div>
                <button className="text-xs font-semibold text-primary hover:opacity-80">
                  View all
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {recentTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between rounded-lg p-2 transition-all hover:bg-accent"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
                        {tx.user.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{tx.user}</p>
                        <p className="text-xs text-muted-foreground">{tx.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-bold ${tx.amount.startsWith("+") ? "text-emerald-600 dark:text-emerald-400" : "text-foreground"}`}>
                        {tx.amount}
                      </p>
                      <div className="mt-0.5 flex items-center gap-1 justify-end">
                        {tx.status === "Completed" && <CheckCircle2 className="h-3 w-3 text-emerald-500" />}
                        {tx.status === "Pending" && <Clock className="h-3 w-3 text-amber-500" />}
                        {tx.status === "Failed" && <AlertCircle className="h-3 w-3 text-destructive" />}
                        <span className="text-[10px] text-muted-foreground">{tx.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Traffic Sources & Quick Actions Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Traffic Source Pie Chart */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Traffic Acquisition</h3>
                  <p className="text-sm text-muted-foreground">Analysis of search engine and referral traffic</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="h-[220px] w-[220px] shrink-0">
                  {mounted ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={trafficData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          animationDuration={300}
                        >
                          {trafficData.map((entry, index) => (
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
                  {trafficData.map((item) => (
                    <div key={item.name} className="flex flex-col rounded-xl border border-border p-4">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm font-medium text-muted-foreground">{item.name}</span>
                      </div>
                      <span className="mt-1 text-xl font-bold text-foreground">{item.value} visitors</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:bg-accent hover:shadow-sm">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Plus className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-secondary-foreground">Add Project</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:bg-accent hover:shadow-sm">
                  <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                    <Download className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-secondary-foreground">Download Data</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:bg-accent hover:shadow-sm">
                  <div className="rounded-lg bg-amber-500/10 p-2 text-amber-600 dark:text-amber-400">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-secondary-foreground">Manage Team</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:bg-accent hover:shadow-sm">
                  <div className="rounded-lg bg-destructive/10 p-2 text-destructive">
                    <Activity className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-secondary-foreground">View Logs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
