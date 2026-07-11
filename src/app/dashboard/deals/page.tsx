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
import { Badge } from "@/components/ui/badge"

const initialDeals = [
  { id: "1", name: "Enterprise Upgrade", company: "Acme Corp", value: "$45,000", stage: "Negotiation", rep: "Sarah Jenkins" },
  { id: "2", name: "SaaS Subscription Pack", company: "Initech", value: "$12,500", stage: "Proposal", rep: "Alex Rivera" },
  { id: "3", name: "Custom API Integration", company: "Stark Industries", value: "$85,000", stage: "Closed Won", rep: "Sarah Jenkins" },
  { id: "4", name: "Pilot Program Kickoff", company: "Wayne Enterprises", value: "$8,000", stage: "Qualified", rep: "Michael Chen" },
  { id: "5", name: "Cloud Migration Strategy", company: "Tyrell Corp", value: "$150,000", stage: "Qualified", rep: "Alex Rivera" },
  { id: "6", name: "Mobile App Licensing", company: "Soylent Corp", value: "$28,000", stage: "Proposal", rep: "Michael Chen" },
]

const STAGES = ["Qualified", "Proposal", "Negotiation", "Closed Won"]

export default function DealsPage() {
  const [deals] = React.useState(initialDeals)

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
                  <BreadcrumbPage className="font-semibold text-foreground">Deals Pipeline</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Sales Pipeline Board</h1>
            <p className="text-sm text-muted-foreground">Track opportunities and update deal stages visually.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {STAGES.map((stage) => {
              const stageDeals = deals.filter((deal) => deal.stage === stage)
              const totalValue = stageDeals.reduce((sum, deal) => {
                const num = parseInt(deal.value.replace(/[^0-9]/g, ""), 10)
                return sum + num
              }, 0)

              return (
                <div key={stage} className="flex flex-col gap-4 rounded-xl border border-border bg-secondary/20 p-4">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2">
                    <h2 className="font-semibold text-foreground">{stage}</h2>
                    <Badge variant="outline" className="bg-background text-muted-foreground">
                      {stageDeals.length}
                    </Badge>
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground">
                    Total: ${totalValue.toLocaleString()}
                  </div>

                  <div className="flex flex-col gap-3 overflow-y-auto">
                    {stageDeals.map((deal) => (
                      <Card key={deal.id} className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="p-3">
                          <CardTitle className="text-sm font-semibold text-foreground">{deal.name}</CardTitle>
                          <CardDescription className="text-xs text-muted-foreground">{deal.company}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-3 pt-0 flex items-center justify-between">
                          <span className="text-xs font-bold text-primary">{deal.value}</span>
                          <span className="text-[10px] text-muted-foreground font-medium">{deal.rep}</span>
                        </CardContent>
                      </Card>
                    ))}
                    {stageDeals.length === 0 && (
                      <div className="flex h-20 items-center justify-center rounded-lg border border-dashed border-border/80 text-[10px] text-muted-foreground">
                        Drag deals here
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
