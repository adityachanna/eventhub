"use client"

import { useState, useEffect } from "react"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

// Sample event data
const events = [
  {
    id: "1",
    title: "Tech Conference 2025",
    date: "May 15-17, 2025",
    location: "San Francisco Convention Center",
    imageUrl: "/placeholder.svg?height=400&width=600",
    attendees: 1250,
    category: "Conference",
    virtual: false,
  },
  {
    id: "2",
    title: "Summer Music Festival",
    date: "July 10-12, 2025",
    location: "Central Park, New York",
    imageUrl: "/placeholder.svg?height=400&width=600",
    attendees: 5000,
    category: "Festival",
    virtual: false,
  },
  {
    id: "3",
    title: "Virtual AI Summit",
    date: "June 5, 2025",
    location: "Online Event",
    imageUrl: "/placeholder.svg?height=400&width=600",
    attendees: 3200,
    category: "Summit",
    virtual: true,
  },
  {
    id: "4",
    title: "Charity Gala Dinner",
    date: "August 20, 2025",
    location: "Grand Hyatt Hotel",
    imageUrl: "/placeholder.svg?height=400&width=600",
    attendees: 450,
    category: "Gala",
    virtual: false,
  },
  {
    id: "5",
    title: "Marathon for a Cause",
    date: "September 12, 2025",
    location: "Downtown Circuit",
    imageUrl: "/placeholder.svg?height=400&width=600",
    attendees: 2500,
    category: "Marathon",
    virtual: false,
  },
  {
    id: "6",
    title: "Virtual Product Launch",
    date: "May 28, 2025",
    location: "Online Event",
    imageUrl: "/placeholder.svg?height=400&width=600",
    attendees: 1800,
    category: "Launch",
    virtual: true,
  },
]

export function EventGrid() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredEvents, setFilteredEvents] = useState(events)

  useEffect(() => {
    let result = events

    // Apply category filter
    if (filter !== "all") {
      if (filter === "virtual") {
        result = result.filter((event) => event.virtual)
      } else if (filter === "physical") {
        result = result.filter((event) => !event.virtual)
      }
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.location.toLowerCase().includes(query) ||
          event.category.toLowerCase().includes(query),
      )
    }

    setFilteredEvents(result)
  }, [filter, searchQuery])

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground">Discover and join amazing events</p>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Tabs defaultValue="all" onValueChange={setFilter} className="w-full sm:w-auto">
              <TabsList className="grid grid-cols-3 w-full sm:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="physical">Physical</TabsTrigger>
                <TabsTrigger value="virtual">Virtual</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No events found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setFilter("all")
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {filteredEvents.length > 0 && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="px-8">
              Load More Events
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
