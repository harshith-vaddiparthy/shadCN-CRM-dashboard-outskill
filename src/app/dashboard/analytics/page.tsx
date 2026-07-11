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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const funnelData = [
  { stage: "Leads", value: 1200, color: "rgb(99, 102, 241)" },
  { stage: "Qualified", value: 650, color: "rgb(79, 70, 229)" },
  { stage: "Proposal", value: 320, color: "rgb(67, 56, 202)" },
  { stage: "Negotiation", value: 180, color: "rgb(55, 48, 163)" },
  { stage: "Closed Won", value: 85, color: "rgb(49, 46, 129)" },
]

const winLossData = [
  { name: "Won", value: 85, color: "rgb(99, 102, 241)" },
  { name: "Lost", value: 45, color: "rgb(239, 68, 68)" },
]

const monthlyTrends = [
  { month: "Jul", value: 48000 },
  { month: "Aug", value: 55000 },
  { month: "Sep", value: 62000 },
  { month: "Oct", value: 78000 },
  { month: "Nov", value: 92000 },
  { month: "Dec", value: 125000 },
]

const leaderboard = [
  { name: "Sarah Jenkins", deals: 32, value: "$285,000", conversion: "28%" },
  { name: "Alex Rivera", deals: 24, value: "$195,000", conversion: "24%" },
  { name: "Michael Chen", deals: 19, value: "$142,000", conversion: "21%" },
]

export default function AnalyticsPage() {
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
            <Separator orientation="vertical" className="mr-2 h-4 self-center bg-border" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard" className="text-muted-foreground hover:text-foreground">
                    CRM Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block text-muted-foreground" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold text-foreground">Analytics</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Funnel Performance */}
            <Card className="border-border bg-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-foreground">Sales Conversion Funnel</CardTitle>
                <CardDescription className="text-muted-foreground">Flow and count of prospects from initial lead to closed won.</CardDescription>
              </CardHeader>
              <CardContent className="h-[280px]">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={funnelData} layout="vertical" margin={{ left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
                      <XAxis type="number" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis dataKey="stage" type="category" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                      <RechartsTooltip />
                      <Bar dataKey="value" radius={[0, 8, 8, 0]} animationDuration={300}>
                        {funnelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted-foreground">Loading charts...</div>
                )}
              </CardContent>
            </Card>

            {/* Win/Loss Ratio */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Win/Loss Ratio</CardTitle>
                <CardDescription className="text-muted-foreground">Comparison of won vs lost deals.</CardDescription>
              </CardHeader>
              <CardContent className="flex h-[280px] flex-col items-center justify-center gap-4">
                {mounted ? (
                  <div className="h-[180px] w-[180px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={winLossData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={70}
                          paddingAngle={5}
                          dataKey="value"
                          animationDuration={300}
                        >
                          {winLossData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted-foreground">Loading...</div>
                )}
                <div className="flex gap-4">
                  {winLossData.map((item) => (
                    <div key={item.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span>{item.name}: {item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Sales Reps Leaderboard */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Top Sales Reps</CardTitle>
                <CardDescription className="text-muted-foreground">Ranking of team members by closed deal values.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {leaderboard.map((rep, idx) => (
                  <div key={rep.name} className="flex items-center justify-between border-b border-border/40 pb-2 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary font-bold text-secondary-foreground text-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{rep.name}</p>
                        <p className="text-xs text-muted-foreground">{rep.deals} deals • {rep.conversion} conv.</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-foreground">{rep.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Growth Curve */}
            <Card className="border-border bg-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-foreground">Monthly Growth Velocity</CardTitle>
                <CardDescription className="text-muted-foreground">Trend of total monthly sales revenues.</CardDescription>
              </CardHeader>
              <CardContent className="h-[230px]">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                      <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                      <RechartsTooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="rgb(99, 102, 241)"
                        strokeWidth={3}
                        dot={{ r: 4, stroke: "rgb(99, 102, 241)", strokeWidth: 2, fill: "var(--card)" }}
                        activeDot={{ r: 6 }}
                        animationDuration={300}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted-foreground">Loading charts...</div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
