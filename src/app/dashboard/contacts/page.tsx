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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const initialContacts = [
  { id: "1", name: "Aria Montgomery", email: "aria@example.com", company: "Rosewood High", phone: "555-0192", status: "Lead" },
  { id: "2", name: "Marcus Aurelius", email: "marcus@rome.gov", company: "Roman Empire", phone: "555-0145", status: "Prospect" },
  { id: "3", name: "Clara Oswald", email: "clara@tardis.co.uk", company: "Time Travel Inc", phone: "555-0189", status: "Customer" },
  { id: "4", name: "Danny Pink", email: "danny@coalhill.edu", company: "Coal Hill School", phone: "555-0177", status: "Prospect" },
  { id: "5", name: "Sarah Jenkins", email: "sarah@outskill.com", company: "Outskill", phone: "555-0112", status: "Customer" },
  { id: "6", name: "Alex Rivera", email: "alex@outskill.com", company: "Outskill", phone: "555-0113", status: "Prospect" },
]

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [contacts] = React.useState(initialContacts)

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
                  <BreadcrumbPage className="font-semibold text-foreground">Contacts</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Contacts Registry</CardTitle>
              <CardDescription className="text-muted-foreground">Manage and filter your workspace contacts and leads.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Input
                placeholder="Search by name, company, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md border-border bg-background text-foreground"
              />

              <div className="rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader className="bg-secondary/40 border-b border-border">
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="text-muted-foreground font-semibold">Name</TableHead>
                      <TableHead className="text-muted-foreground font-semibold">Email</TableHead>
                      <TableHead className="text-muted-foreground font-semibold">Company</TableHead>
                      <TableHead className="text-muted-foreground font-semibold">Phone</TableHead>
                      <TableHead className="text-muted-foreground font-semibold">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContacts.length > 0 ? (
                      filteredContacts.map((contact) => (
                        <TableRow key={contact.id} className="border-b border-border/60 hover:bg-accent/40">
                          <TableCell className="font-medium text-foreground">{contact.name}</TableCell>
                          <TableCell className="text-muted-foreground">{contact.email}</TableCell>
                          <TableCell className="text-muted-foreground">{contact.company}</TableCell>
                          <TableCell className="text-muted-foreground">{contact.phone}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                contact.status === "Customer"
                                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20"
                                  : contact.status === "Prospect"
                                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/20"
                                  : "bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20"
                              }
                            >
                              {contact.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                          No contacts found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
