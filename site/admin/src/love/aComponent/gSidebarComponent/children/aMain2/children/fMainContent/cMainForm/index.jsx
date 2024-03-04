import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { Instagram, Twitter, Link2, Check, X } from 'lucide-react';
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons"
import Balancer from "react-wrap-balancer"
import { cn } from '@/lib/utils'
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
import handleInput from '@/love/dFunction/dHandleInput';
import { Checkbox } from "@/components/ui/checkbox"


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

const MainForm = ({ Content, Redux }) => {
	const editor1 = useRef()

  return (
    <React.Fragment>
      <div className="pb-12 pt-8">
        <div className="items-start justify-center gap-4 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-3">
          {Content.create.cards?.map((each, index) => {
            return (
              each.display && 
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
                      {each.inputs?.map((each1, index1) => {
                        switch (each1.type) {
                          case 'file':
                            return (
                              <div className="grid gap-2" key={index1}>
                                <Label htmlFor={each1.name}>{each1.label} :</Label>
                                <Input
                                  id={each1.name}
                                  name={each1.name}
                                  type={each1.type}
                                  onChange={each1.onChange} 
                                />
                                <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.[each1.name]}</p>
                              </div>
                            )
                        
                          case 'text-area':
                            return (
                              <div className="grid gap-2" key={index1}>
                                <Label htmlFor={each1.label}>{each1.label} :</Label>
                                <Textarea 
                                  id={each1.label}
                                  name={each1.name}
                                  onChange={each1.onChange} 
                                  value={each1.value}
                                />
                                <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.[each1.name]}</p>
                              </div>
                            )

                          case 'radio-new':
                            return (
                              <div className="grid gap-2" key={index1}>
                                <Label htmlFor={each1.label}>{each1.label} :</Label>
                                <Select
                                  onValueChange={value => Redux.dispatch({
                                    type: Redux.action.FormObject,
                                    payload: {
                                      ...Redux.state.FormObject,
                                      FormValue: {
                                        ...Redux.state.FormObject?.FormValue,
                                        [each1.name]: value,
                                      },
                                    },
                                  })}
                                  value={each1.value}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder={each1.placeholder} />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>--Select--</SelectLabel>
                                      {each1.options?.map((each2, index2) => (
                                        <SelectItem key={index2} value={each2.value} >{each2.label}</SelectItem>
                                        ))
                                      }
                                      {/* <SelectItem value="apple">Apple</SelectItem>
                                      <SelectItem value="banana">Banana</SelectItem>
                                      <SelectItem value="blueberry">Blueberry</SelectItem>
                                      <SelectItem value="grapes">Grapes</SelectItem>
                                      <SelectItem value="pineapple">Pineapple</SelectItem> */}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                            )

                          case 'checkbox':
                            return (
                              <div className="grid gap-2" key={index1}>
                                <Label htmlFor={each1.label}>{each1.label} :</Label>
                                {each1.options?.map((each2, index2) => (
                                  <div className="items-top flex space-x-2 my-1" key={index2}>
                                    <input 
                                      id={index2}
                                      type={each1.type}
                                      name={each1.name} 
                                      value={each2.value} 
                                      onChange={each1.onChange} 
                                      checked={each1?.value?.includes(each2.value)}
                                    />
                                    {/* <Checkbox 
                                      id={index2} 
                                      name={each1.name} 
                                      value={each2.value} 
                                      onCheckedChange={each1.onChange} 
                                      checked={each1?.value?.includes(each2.value)}
                                    /> */}
                                    <label htmlFor={index2} className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >
                                      {each2.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            )

                          case 'special-checkbox':
                            return (
                              <div className="grid gap-2" key={index1}>
                                <Label htmlFor={each1.label}>{each1.label} :</Label>
                                <ScrollArea>
                                  <Table>
                                    <TableHeader>
                                      <TableRow>
                                        {each1.columns.map((each1, index1) => (
                                          <TableHead key={index1} className="min-w-[100px]">{each1}</TableHead>
                                        ))}
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {each1.data}
                                    </TableBody>
                                  </Table>
                                  <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                              </div>
                            )
                            
                          case 'static-multiple':
                            return (
                              <div className="grid gap-2" key={index1}>
                                <Label htmlFor="blabla">{each1.label} :</Label>
                                {each1?.inputs?.map((each2, index2) => {
                                  return (
                                    <React.Fragment key={index2}>
                                      <Input 
                                        id={each2.name} 
                                        type={each2.type}  
                                        name={each2.name}
                                        placeholder={each2.placeholder} 
                                        onChange={each2.onChange}  
                                        value={each2.value} 
                                      />
                                      <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.[each2.name]}</p>
                                    </React.Fragment>
                                  )
                                }) }
                              </div>
                            )

                          case 'dynamic-multiple':
                            return (
                              <div className="grid gap-2" key={index1}>
                                <div className="flex w-full items-center justify-between space-x-2">
                                  <Label htmlFor={each1.name}>{each1.label} :</Label>
                                  <Button variant="accent" size="smallIcon" onClick={() => each1.onAdd()}>
                                    <PlusIcon className="h-3 w-3" />
                                  </Button>
                                </div>
          
                                {each1?.inputs?.map((each2, index2) => {
                                  return (
                                    <Card key={index2} >
                                      <CardHeader>
                                        <CardTitle className="text-base">
                                          <div className="flex w-full items-center justify-between space-x-2">
                                            <Label htmlFor="tag">Link {index2+1} :</Label>
                                            <Button variant="destructive" size="smallIcon" onClick={() => each1.onRemove(index2)}>
                                              <MinusIcon className="h-3 w-3" />
                                            </Button>
                                          </div>
                                        </CardTitle>
                                      </CardHeader>
                                      <CardContent className="grid gap-4">
                                        {Object.keys(each2)?.map((each3, index3) => {
                                          return (
                                            each3 !== "_id" && typeof each2[each3] === "object" ? (
                                              <div className="grid gap-2" key={index3}>
                                                <div className="flex w-full items-center justify-between space-x-2">
                                                  <Label htmlFor="tag">{each3[0].toUpperCase() + each3.slice(1)} :</Label>
                                                  <Button variant="accent" size="smallIcon" onClick={() => each1.onAdd2(index2)}>
                                                    <PlusIcon className="h-3 w-3" />
                                                  </Button>
                                                </div>

                                                {each2[each3]?.map((each4, index4) => {
                                                  return (
                                                    <Card key={index4}>
                                                      <CardHeader>
                                                        <CardTitle className="text-base">
                                                          <div className="flex w-full items-center justify-between space-x-2">
                                                            <Label htmlFor="tag">Title 1</Label>
                                                            <Button variant="destructive" size="smallIcon" onClick={() => each1.onRemove2(index2, index4)} >
                                                              <MinusIcon className="h-3 w-3" />
                                                            </Button>
                                                          </div>
                                                        </CardTitle>
                                                      </CardHeader>
                                                      <CardContent className="grid gap-4">
                                                      {Object.keys(each4)?.map((each5, index5) => {
                                                        return (
                                                          each5 !== "_id" &&
                                                          <div className="grid gap-2" key={index5}>
                                                            <Label htmlFor="each3" className="capitalize">{each5} :</Label>
                                                            <Input 
                                                              type="text"  
                                                              name={each5}
                                                              placeholder={each5[0].toUpperCase() + each5.slice(1)}
                                                              onChange={(event) => each1.onChange2(event, index2, index4)}  
                                                              value={each4?.[each5]} 
                                                            />
                                                          </div>
                                                        )
                                                      })}
                                                      </CardContent>
                                                    </Card>
                                                  )
                                                })} 
                                              </div>
                                            ) : (
                                              each3 !== "_id" &&
                                              <div className="grid gap-2" key={index3}>
                                                <Label htmlFor="each3" className="capitalize">{each3} :</Label>
                                                <Input 
                                                  type="text"  
                                                  name={each3}
                                                  placeholder={each3[0].toUpperCase() + each3.slice(1)}
                                                  onChange={(event) => each1.onChange(event, index2)}  
                                                  value={each2?.[each3]}
                                                />
                                              </div>
                                            )
                                          )
                                        })}
                                      </CardContent>
                                    </Card>
                                    )
                                })}

                                {/* {each1?.inputs?.map((each2, index2) => {
                                  return (
                                    <React.Fragment key={index2}>
                                      <MDBox pb={1} mt={1}>

                                        {Object.keys(each2)?.map((each3, index3) => {
                                          return (
                                            each3 !== "_id" && typeof each2[each3] === "object" ?
                                              <React.Fragment key={index3}>
                                                <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={0.5} pb={1} mx={1}>
                                                  <MDTypography variant="button" textTransform="capitalize">
                                                    {each3[0].toUpperCase() + each3.slice(1)}: 
                                                  </MDTypography>
                                                  <MDButton variant="outlined" color="info" iconOnly size="small"
                                                    onClick={() => each1.onAdd2(index2)}
                                                  >
                                                    <Icon>add</Icon>
                                                  </MDButton>
                                                </MDBox>

                                                {each2[each3]?.map((each4, index4) => {
                                                  return (
                                                    <MDBox key={index4} display="flex">
                                                      {Object.keys(each4)?.map((each5, index5) => {
                                                        return (
                                                          each5 !== "_id" &&
                                                          <React.Fragment key={index5}>
                                                            <MDBox display="flex" px={0.5} py={0.5} mr={0.5}>
                                                              <MDInput 
                                                                fullWidth
                                                                type="text"  
                                                                name={each5}
                                                                label={each5[0].toUpperCase() + each5.slice(1)}
                                                                placeholder={each5[0].toUpperCase() + each5.slice(1)}
                                                                onChange={(event) => each1.onChange2(event, index2, index4)}  
                                                                value={each4?.[each5]} 
                                                              />
                                                            </MDBox>
                                                            <MDTypography variant="caption" color='error'>
                                                              {Redux.state.FormObject.FormError?.[each21.name]}
                                                            </MDTypography>
                                                          </React.Fragment>
                                                        )
                                                      })}
                                                      <MDBox display="flex" justifyContent="space-between" alignItems="center" my={0.5} mx={1}>
                                                        <MDButton variant="outlined" color="error" size="small" iconOnly  
                                                          onClick={() => each1.onRemove2(index2, index4)}
                                                        >
                                                          <Icon>remove</Icon>
                                                        </MDButton>                              
                                                      </MDBox>
                                                    </MDBox>
                                                  )
                                                })}
                                              </React.Fragment>
                                              :
                                              each3 !== "_id" &&
                                              <React.Fragment key={index3}>
                                                <MDBox display="flex" px={0.5} py={0.5} mr={0.5}>
                                                  <MDInput 
                                                    fullWidth
                                                    type="text"  
                                                    name={each3}
                                                    label={each3[0].toUpperCase() + each3.slice(1)}
                                                    placeholder={each3[0].toUpperCase() + each3.slice(1)}
                                                    onChange={(event) => each1.onChange(event, index2)}  
                                                    value={each2?.[each3]} 
                                                  />
                                                </MDBox>
                                                <MDTypography variant="caption" color='error'>
                                                  {Redux.state.FormObject.FormError?.[each21.name]}
                                                </MDTypography>
                                              </React.Fragment>
                                          )
                                        })}

                                        <MDBox display="flex" justifyContent="space-between" alignItems="center" my={0.5}>
                                          <MDButton variant="outlined" color="error" size="small" fullWidth 
                                            onClick={() => each1.onRemove(index2)}
                                          >
                                            <Icon>remove</Icon>&nbsp;
                                            Remove
                                          </MDButton>                              
                                        </MDBox>
                                      </MDBox>
                                    </React.Fragment>
                                  )
                                })} */}
                              </div>
                            )
                          
                          case 'rich-text':
                            return (
                              <div className="grid gap-2" key={index1}>
                                <JoditEditor
                                  value={each1.value}
                                  tabIndex={1}
                                  onChange={value => Redux.dispatch({
                                    type: Redux.action.FormObject,
                                    payload: {
                                      ...Redux.state.FormObject,
                                      FormValue: {
                                        ...Redux.state.FormObject?.FormValue,
                                        [each1.name]: value,
                                      },
                                    },
                                  })}
                                />
                                <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.[each1.name]}</p>
                              </div>
                            )

                          default:
                            return (
                              <div className="grid gap-2" key={index1}>
                                <Label htmlFor={each1.label}>{each1.label} :</Label>
                                <Input 
                                  id={each1.label} 
                                  type={each1.type}  
                                  name={each1.name}
                                  label={each1.label}
                                  placeholder={each1.placeholder} 
                                  onChange={each1.onChange}  
                                  value={each1.value} 
                                />
                                <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.[each1.name]}</p>
                              </div>
                            )
                          }
                      })}
                    </CardContent>
                  </Card>
                </DemoContainer>
              </div>
            )
          })}
        </div>

        <div className="flex items-center space-x-2 pt-4">
          {Content.create.buttons?.map((each, index) =>  {
            return (
              <Button key={index} onClick={each.onClick}>{each.label}</Button>
            )
          }) }
        </div>

      </div>
    </React.Fragment>
  );
};

export default MainForm;
