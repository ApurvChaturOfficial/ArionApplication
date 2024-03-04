import React from 'react';
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { Instagram, Twitter, Link2, Check, X } from 'lucide-react';
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons"
import Balancer from "react-wrap-balancer"
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { badgeVariants } from '@/components/ui/badge'
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
import { RocketIcon } from "@radix-ui/react-icons"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


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

const MainDetail = ({ Content, Component, DeleteAPI }) => {
  return (
    <React.Fragment>
      <div className="pb-12 pt-8">
        {Component === "Delete" &&
          <div className="mb-4">
            <Alert variant="destructive">
              <RocketIcon className="h-4 w-4" />
              <div className="flex flex-1 justify-between">
                <div>
                  <AlertTitle>Delete Item!</AlertTitle>
                  <AlertDescription>
                    Are yo sure you want to delete this object?
                  </AlertDescription>
                </div>
                <Button variant="destructive" onClick={() => DeleteAPI()}>Sure, Delete</Button>
              </div>
              
            </Alert>
          </div>
        }

        <div className="items-start justify-center gap-4 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-3">
          {Content.detail.cards?.map((each, index) => {
            return (
              each.display && (
                <div className="col-span-2 grid items-start gap-4 lg:col-span-1" key={index}>
                  <DemoContainer>
                    <Card>
                      <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">{each.title}</CardTitle>
                        <CardDescription>
                          This section contains vital information like email, name, image, etc.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        {
                          each.values?.map((each1, index1) => {
                            return (
                              <div className="grid gap-2" key={index1}>
                                <Label htmlFor="coverImage">{each1.label} :</Label>
                                {each1?.type === 'file' ? (
                                  <Avatar id="coverImage">
                                    <AvatarImage src={each1.value} />
                                    <AvatarFallback>NA</AvatarFallback>
                                  </Avatar>
                                ) : each1?.type === 'links1' ? (
                                  <React.Fragment>
                                    {each1.value?.map((each2, index2) => (
                                      <Link key={index2} to={each2?.url} target='_blank' rel='refferrer' className="text-md text-muted-foreground hover:underline">
                                        {index2+1}. {each2?.title}
                                      </Link>                                    
                                    ))}
                                  </React.Fragment>
                                ) : each1?.type === 'links2' ? (
                                  <div className="flex gap-2">
                                    {each1.value?.map((each2, index2) => (
                                      <Link to={each2.url} target='_blank' rel='refferrer' key={index2}>
                                        <Button variant="outline" size="icon"> 
                                          {
                                            each2?.title === 'Instagram' ? <Instagram className="h-4 w-4" /> : 
                                            each2?.title === "Twitter" ? <Twitter className="h-4 w-4" /> : 
                                            <Link2 className="h-4 w-4" />
                                          }
                                        </Button>
                                      </Link>
                                    ))}
                                  </div>
                                ) : each1?.type === 'links3' ? (
                                  <React.Fragment>
                                    {each1.value?.map((each2, index2) => (
                                      <p id="subtitle" className="text-md text-muted-foreground">{index2+1}. {each2}</p>
                                    ))}
                                  </React.Fragment>
                                ) : each1?.type === 'cards1' ? (
                                  <React.Fragment>
                                    {each1.value?.map((each2, index2) => (
                                      <p id="subtitle" className="text-md text-muted-foreground">{index2+1}. {each2.title}</p>
                                    ))}
                                  </React.Fragment>
                                ) : each1?.type === 'special-checkbox' ? (
                                  <React.Fragment>
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
                                          {each1.value?.map((each2, index2) => {
                                            return (
                                              <TableRow key={index2}>
                                                <TableCell>{each2.menu}</TableCell>
                                                <TableCell>
                                                  {each2?.access?.list ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}  
                                                </TableCell>
                                                <TableCell>
                                                  {each2?.access?.create ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                                                </TableCell>
                                                <TableCell>
                                                  {each2?.access?.retrieve ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />} 
                                                </TableCell>
                                                <TableCell>
                                                  {each2?.access?.update ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />} 
                                                </TableCell>
                                                <TableCell>
                                                  {each2?.access?.delete ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />} 
                                                </TableCell>
                                              </TableRow>
                                            )
                                          })}
                                        </TableBody>
                                      </Table>
                                      <ScrollBar orientation="horizontal" />
                                    </ScrollArea>
                                  </React.Fragment>
                                ) : (
                                  each.title === "Personal Info" && (each1.label === "Created By" || each1.label === "Updated By") ? (
                                    each1.value && (
                                      <div className="flex items-center space-x-2">
                                        <Avatar>
                                          <AvatarImage src={each1.value?.eImage?.url} />
                                          <AvatarFallback>NA</AvatarFallback>
                                        </Avatar>
                                        <div>
                                          <p className="text-sm font-medium leading-none">{`${each1.value?.eFirstName} ${each1.value?.eLastName}`}</p>
                                          <p className="text-sm text-muted-foreground">{each1.value?.eEmail}</p>
                                        </div>
                                      </div>
                                    )
                                  ) : (
                                    <p id="subtitle" className="text-md text-muted-foreground">{each1.value}</p>
                                  )
                                )}
                              </div>
                              
                            )
                          })
                        }
                        
                      </CardContent>
                    </Card>
                  </DemoContainer>
                </div>
              )
            )
          })}
        </div>
      </div>

    </React.Fragment>
  );
};

export default MainDetail;
