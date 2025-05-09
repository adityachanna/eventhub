"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Download,
  Mail,
  MoreHorizontal,
  UserPlus,
  Users,
  TrendingUp,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for attendees
const attendees = [
  {
    id: "att-001",
    name: "John Doe",
    email: "john.doe@example.com",
    ticketType: "VIP",
    events: 3,
    lastAttended: "May 15, 2025",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "att-002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    ticketType: "Standard",
    events: 5,
    lastAttended: "April 22, 2025",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "att-003",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    ticketType: "VIP",
    events: 2,
    lastAttended: "June 10, 2025",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "att-004",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    ticketType: "Standard",
    events: 1,
    lastAttended: "May 28, 2025",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "att-005",
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    ticketType: "Standard",
    events: 4,
    lastAttended: "March 15, 2025",
    status: "inactive",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "att-006",
    name: "Sarah Brown",
    email: "sarah.brown@example.com",
    ticketType: "VIP",
    events: 6,
    lastAttended: "April 5, 2025",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "att-007",
    name: "David Miller",
    email: "david.miller@example.com",
    ticketType: "Standard",
    events: 2,
    lastAttended: "February 20, 2025",
    status: "inactive",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "att-008",
    name: "Jennifer Taylor",
    email: "jennifer.taylor@example.com",
    ticketType: "VIP",
    events: 3,
    lastAttended: "May 10, 2025",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function AttendeesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedEvent, setSelectedEvent] = useState("all")

  // Filter attendees based on search query
  const filteredAttendees = attendees.filter(
    (attendee) =>
      attendee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Calculate statistics
  const totalAttendees = attendees.length
  const activeAttendees = attendees.filter((a) => a.status === "active").length
  const vipAttendees = attendees.filter((a) => a.ticketType === "VIP").length
  const standardAttendees = attendees.filter((a) => a.ticketType === "Standard").length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Attendees</h1>
        <p className="text-muted-foreground">Manage and analyze your event attendees.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Attendees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAttendees}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +12% from last month
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Attendees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeAttendees}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +5% from last month
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">VIP Attendees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{vipAttendees}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +8% from last month
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 flex items-center">
                <ArrowDownRight className="h-3 w-3 mr-1" /> -3% from last month
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Attendee Growth</CardTitle>
            <CardDescription>Monthly attendee acquisition</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-end gap-2">
              {[40, 55, 45, 60, 75, 65, 80, 90, 85, 95, 110, 120].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-primary/10 rounded-t-sm relative group" style={{ height: `${height}px` }}>
                    <div
                      className="absolute inset-x-0 bottom-0 bg-primary rounded-t-sm transition-all duration-300"
                      style={{ height: `${height * 0.7}px` }}
                    ></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {height}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="w-full md:w-80">
          <CardHeader>
            <CardTitle>Ticket Distribution</CardTitle>
            <CardDescription>By ticket type</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="relative h-40 w-40">
              <div className="absolute inset-0 flex items-center justify-center">
                <PieChart className="h-full w-full text-muted-foreground/20" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-sm font-medium">Distribution</div>
                <div className="text-xs text-muted-foreground">Total: {totalAttendees}</div>
              </div>
            </div>
            <div className="ml-4 space-y-2">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                <div className="text-sm">VIP ({vipAttendees})</div>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-primary/60 mr-2"></div>
                <div className="text-sm">Standard ({standardAttendees})</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search attendees..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedEvent} onValueChange={setSelectedEvent}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by event" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="tech-conf">Tech Conference</SelectItem>
              <SelectItem value="music-fest">Music Festival</SelectItem>
              <SelectItem value="charity-gala">Charity Gala</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" /> Email All
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" /> Export
          </Button>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" /> Add Attendee
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Attendees</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
          <TabsTrigger value="vip">VIP</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Attendee</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Ticket Type</TableHead>
                    <TableHead>Events Attended</TableHead>
                    <TableHead>Last Attended</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAttendees.map((attendee) => (
                    <TableRow key={attendee.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={attendee.avatar || "/placeholder.svg"} alt={attendee.name} />
                            <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{attendee.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{attendee.email}</TableCell>
                      <TableCell>
                        <Badge variant={attendee.ticketType === "VIP" ? "default" : "outline"}>
                          {attendee.ticketType}
                        </Badge>
                      </TableCell>
                      <TableCell>{attendee.events}</TableCell>
                      <TableCell>{attendee.lastAttended}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            attendee.status === "active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100 border-green-200"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-100 border-gray-200"
                          }
                        >
                          {attendee.status === "active" ? "Active" : "Inactive"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit Details</DropdownMenuItem>
                            <DropdownMenuItem>Send Email</DropdownMenuItem>
                            <DropdownMenuItem>View Tickets</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Attendee</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Ticket Type</TableHead>
                    <TableHead>Events Attended</TableHead>
                    <TableHead>Last Attended</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAttendees
                    .filter((attendee) => attendee.status === "active")
                    .map((attendee) => (
                      <TableRow key={attendee.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={attendee.avatar || "/placeholder.svg"} alt={attendee.name} />
                              <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="font-medium">{attendee.name}</div>
                          </div>
                        </TableCell>
                        <TableCell>{attendee.email}</TableCell>
                        <TableCell>
                          <Badge variant={attendee.ticketType === "VIP" ? "default" : "outline"}>
                            {attendee.ticketType}
                          </Badge>
                        </TableCell>
                        <TableCell>{attendee.events}</TableCell>
                        <TableCell>{attendee.lastAttended}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200"
                          >
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Edit Details</DropdownMenuItem>
                              <DropdownMenuItem>Send Email</DropdownMenuItem>
                              <DropdownMenuItem>View Tickets</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inactive">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Attendee</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Ticket Type</TableHead>
                    <TableHead>Events Attended</TableHead>
                    <TableHead>Last Attended</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAttendees
                    .filter((attendee) => attendee.status === "inactive")
                    .map((attendee) => (
                      <TableRow key={attendee.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={attendee.avatar || "/placeholder.svg"} alt={attendee.name} />
                              <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="font-medium">{attendee.name}</div>
                          </div>
                        </TableCell>
                        <TableCell>{attendee.email}</TableCell>
                        <TableCell>
                          <Badge variant={attendee.ticketType === "VIP" ? "default" : "outline"}>
                            {attendee.ticketType}
                          </Badge>
                        </TableCell>
                        <TableCell>{attendee.events}</TableCell>
                        <TableCell>{attendee.lastAttended}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-gray-100 text-gray-800 hover:bg-gray-100 border-gray-200"
                          >
                            Inactive
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Edit Details</DropdownMenuItem>
                              <DropdownMenuItem>Send Email</DropdownMenuItem>
                              <DropdownMenuItem>View Tickets</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vip">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Attendee</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Ticket Type</TableHead>
                    <TableHead>Events Attended</TableHead>
                    <TableHead>Last Attended</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAttendees
                    .filter((attendee) => attendee.ticketType === "VIP")
                    .map((attendee) => (
                      <TableRow key={attendee.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={attendee.avatar || "/placeholder.svg"} alt={attendee.name} />
                              <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="font-medium">{attendee.name}</div>
                          </div>
                        </TableCell>
                        <TableCell>{attendee.email}</TableCell>
                        <TableCell>
                          <Badge>VIP</Badge>
                        </TableCell>
                        <TableCell>{attendee.events}</TableCell>
                        <TableCell>{attendee.lastAttended}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              attendee.status === "active"
                                ? "bg-green-100 text-green-800 hover:bg-green-100 border-green-200"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-100 border-gray-200"
                            }
                          >
                            {attendee.status === "active" ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Edit Details</DropdownMenuItem>
                              <DropdownMenuItem>Send Email</DropdownMenuItem>
                              <DropdownMenuItem>View Tickets</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
