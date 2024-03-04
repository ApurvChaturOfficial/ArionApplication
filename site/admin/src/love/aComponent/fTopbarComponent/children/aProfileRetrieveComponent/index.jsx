import React, { useEffect } from 'react'
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { Instagram, Twitter, Link2, Check, X } from 'lucide-react';
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons"
import Balancer from "react-wrap-balancer"
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { badgeVariants } from '@/components/ui/badge'
import CreateForm from './component/card'
import SampleForm3 from './component/card/SampleForm3'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


function DemoContainer({ className, ...props }) {
  return (
    <div
      className={cn( "flex items-center justify-center [&>div]:w-full", className )}
      {...props}
    />
  )
}

function getInitials(firstName, lastName) {
  // Extract the first character of the first name and last name
  const firstInitial = firstName.charAt(0).toUpperCase();
  const lastInitial = lastName.charAt(0).toUpperCase();
  
  // Return the initials
  return `${firstInitial}${lastInitial}`;
}

const ProfileRetrieveComponent = ({ Redux }) => {
  const data = Redux.state.ReceivedObject?.Retrieve?.role?.cMenus?.map((each, index) => {
    return ({
      menu: each?.menu?.aTitle,
      list: each?.access?.list ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />,
      create: each?.access?.create ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />,
      retrieve: each?.access?.retrieve ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />,
      update: each?.access?.update ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />,
      delete: each?.access?.delete ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />,
    })
  })

  // JSX
  return (
    Redux.state.ReceivedObject?.Retrieve &&
    <React.Fragment>
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr]">
        <div className="mx-auto w-full min-w-0">

          {/* Breadcrumbs */}
          <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
              Home
            </div>
            <ChevronRightIcon className="h-4 w-4" />
            <div className="font-medium text-foreground">Profile Retrieve</div>
          </div>

          {/* Header */}
          <div className="pt-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20" >
                <AvatarImage src={Redux.state.ReceivedObject?.Retrieve?.image?.url} />
                <AvatarFallback>{getInitials(
                    Redux.state.ReceivedObject?.Retrieve?.firstName, 
                    Redux.state.ReceivedObject?.Retrieve?.lastName
                  )}</AvatarFallback>
              </Avatar>        
              <div className="space-y-2">
                <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
                  {`${Redux.state.ReceivedObject?.Retrieve?.firstName} ${Redux.state.ReceivedObject?.Retrieve?.lastName}`}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {`${Redux.state.ReceivedObject?.Retrieve?.email} (${Redux.state.ReceivedObject?.Retrieve?.role?.aTitle})`}
                </p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="pb-12 pt-8">
            <div className="items-start justify-center gap-4 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-3">
              <div className="col-span-2 grid items-start gap-4 lg:col-span-1">
                <DemoContainer>
                  <Card>
                    <CardHeader className="space-y-1">
                      <CardTitle className="text-2xl">Critical Information</CardTitle>
                      <CardDescription>
                        This section contains vital information like email, name, image, etc.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="coverImage">Cover Image :</Label>
                        <Avatar id="coverImage">
                          <AvatarImage src={Redux.state.ReceivedObject?.Retrieve?.image?.url} />
                          <AvatarFallback>NA</AvatarFallback>
                        </Avatar>        
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="title">Title :</Label>
                        <p id="title" className="text-md text-muted-foreground">{Redux.state.ReceivedObject?.Retrieve?.firstName}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="subtitle">Sub Title :</Label>
                        <p id="subtitle" className="text-md text-muted-foreground">{Redux.state.ReceivedObject?.Retrieve?.lastName}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Description :</Label>
                        <p id="description" className="text-md text-muted-foreground">{Redux.state.ReceivedObject?.Retrieve?.email}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="detail">Detail :</Label>
                        <p id="detail" className="text-md text-muted-foreground">{Redux.state.ReceivedObject?.Retrieve?.mobile || "--NA--"}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DemoContainer>
              </div>
              <div className="col-span-2 grid items-start gap-4 lg:col-span-1">
                <DemoContainer>
                  <Card>
                    <CardHeader className="space-y-1">
                      <CardTitle className="text-2xl">Basic Information</CardTitle>
                      <CardDescription>
                        Enter the basic info like title, subtitle, status, etc.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="coverImage">Cover Image :</Label>
                        <Avatar id="coverImage">
                          <AvatarImage src={Redux.state.ReceivedObject?.Retrieve?.coverImage?.url} />
                          <AvatarFallback>NA</AvatarFallback>
                        </Avatar>        
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="title">Title :</Label>
                        <p id="title" className="text-md text-muted-foreground">{Redux.state.ReceivedObject?.Retrieve?.title}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="subtitle">Sub Title :</Label>
                        <p id="subtitle" className="text-md text-muted-foreground">{Redux.state.ReceivedObject?.Retrieve?.subtitle}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Description :</Label>
                        <p id="description" className="text-md text-muted-foreground">{Redux.state.ReceivedObject?.Retrieve?.description}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="detail">Detail :</Label>
                        <p id="detail" className="text-md text-muted-foreground">{Redux.state.ReceivedObject?.Retrieve?.detail || "--NA--"}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DemoContainer>
              </div>
              <div className="col-span-2 grid items-start gap-4 lg:col-span-1">
                <DemoContainer>
                  <Card>
                    <CardHeader className="space-y-1">
                      <CardTitle className="text-2xl">More Information</CardTitle>
                      <CardDescription>
                        Enter the basic info like title, subtitle, status, etc.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="address">Address :</Label>
                        <p id="address" className="text-md text-muted-foreground">{
                            Redux.state.ReceivedObject?.Retrieve?.address ? `
                            ${Redux.state.ReceivedObject?.Retrieve?.address?.lane}, 
                            ${Redux.state.ReceivedObject?.Retrieve?.address?.street}, 
                            ${Redux.state.ReceivedObject?.Retrieve?.address?.city}, 
                            ${Redux.state.ReceivedObject?.Retrieve?.address?.state}, 
                            ${Redux.state.ReceivedObject?.Retrieve?.address?.country}, 
                            ${Redux.state.ReceivedObject?.Retrieve?.address?.pinCode}, 
                          ` : '-'
                        }</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="socialLinks">Social Links :</Label>
                        <div className="flex gap-2">
                          {Redux.state.ReceivedObject?.Retrieve?.links?.map((each, index) => {
                            return (
                              <Button key={index} variant="outline" size="icon"> {
                                each?.title === 'Instagram' ? <Instagram className="h-4 w-4" /> : 
                                each?.title === "Twitter" ? <Twitter className="h-4 w-4" /> : 
                                <Link2 className="h-4 w-4" />
                              }</Button>
                            )
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DemoContainer>
              </div>
              <div className="col-span-2 grid items-start gap-4 lg:col-span-3">
                <DemoContainer>
                  <Card>
                    <CardHeader className="space-y-1">
                      <CardTitle className="text-2xl">Relation Information</CardTitle>
                      <CardDescription>
                        Enter the basic info like title, subtitle, status, etc.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="role">Role :</Label>
                        {Redux.state.ReceivedObject?.Retrieve?.role &&
                          <Card>
                            <CardContent className="grid gap-4 mt-6">
                              <div className="grid gap-2">
                                <Label htmlFor="title">Title :</Label>
                                <p id="title" className="text-md text-muted-foreground">{Redux.state.ReceivedObject?.Retrieve?.role?.aTitle}</p>
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="title">Sub Title :</Label>
                                <p id="title" className="text-md text-muted-foreground">{Redux.state.ReceivedObject?.Retrieve?.role?.aSubtitle}</p>
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="title">Menu Access :</Label>
                                <Card>
                                  <CardContent className="grid gap-4 mt-6">
                                    <ScrollArea>
                                      <Table>
                                        <TableHeader>
                                          <TableRow>
                                            <TableHead className="min-w-[100px]">Menu</TableHead>
                                            <TableHead className="min-w-[50px]">List</TableHead>
                                            <TableHead className="min-w-[50px]">Create</TableHead>
                                            <TableHead className="min-w-[50px]">Retrieve</TableHead>
                                            <TableHead className="min-w-[50px]">Update</TableHead>
                                            <TableHead className="min-w-[50px]">Delete</TableHead>
                                          </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                          {data?.map((each, index) => (
                                            <TableRow key={index}>
                                              <TableCell>{each.menu}</TableCell>
                                              <TableCell>{each.list}</TableCell>
                                              <TableCell>{each.create}</TableCell>
                                              <TableCell>{each.retrieve}</TableCell>
                                              <TableCell>{each.update}</TableCell>
                                              <TableCell>{each.delete}</TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                      <ScrollBar orientation="horizontal" />
                                    </ScrollArea>
                                  </CardContent>
                                </Card>
                              </div>
                            </CardContent>
                          </Card>
                        }
                      </div>
                    </CardContent>
                  </Card>
                </DemoContainer>
              </div>
            </div>
          </div>

        </div>
      </main> 
    </React.Fragment>
  )
}

export default ProfileRetrieveComponent