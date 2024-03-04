import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import handleInput from '@/love/dFunction/dHandleInput';
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { cn } from '@/lib/utils';
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { badgeVariants } from '@/components/ui/badge';


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
  const firstInitial = firstName?.charAt(0).toUpperCase();
  const lastInitial = lastName?.charAt(0).toUpperCase();
  
  // Return the initials
  return `${firstInitial}${lastInitial}`;
}

const ProfileUpdateComponent = ({ Redux, EventHandler, OnClick }) => {
  // JSX
  return (
    <React.Fragment>
      {/* <MDBox mb={2} />
      <HeaderComponent Redux={Redux} >
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <Card sx={{ height: "100%", width: "100%", boxShadow: "none" }}>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
                  <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Critical Information
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox mb={2} lineHeight={1}>
                    <MDTypography variant="button" color="text" fontWeight="light">
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
                    </MDTypography>
                  </MDBox>
                  <MDBox opacity={0.3}>
                    <Divider />
                  </MDBox>
                  <MDBox>

                    {renderItems}
                    <React.Fragment>
                      <MDBox display="flex" pt={1} pb={1}>
                        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                          Image: 
                        </MDTypography>
                      </MDBox>
                      <MDBox display="flex" alignItems="center" pb={1} px={2}>
                        <MDAvatar src={Redux.state.FormObject.FormValue?.image?.url || defaultUser} size="md" />
                        <MDBox ml={2}>
                          <MDButton 
                            size="small" 
                            variant="outlined" 
                            color="info" 
                            component={Link} 
                            onClick={() => inputElement1.current.click()}
                          >
                            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                            &nbsp;Choose Image
                          </MDButton>
                        </MDBox>
                      </MDBox>
                      <input type="file" name="image" style={{display: "none"}} ref={inputElement1} onChange={event => handleInput(event, Redux)} />
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>
                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="text"  
                          name="firstName"
                          label="First Name"
                          placeholder="First Name"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.firstName} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.lane}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>
                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="text"  
                          name="lastName"
                          label="Last` Name"
                          placeholder="Last` Name"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.lastName} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.lane}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>
                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="email"  
                          name="email"
                          label="Email"
                          placeholder="Email"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.email} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.lane}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>
                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="text"  
                          name="mobile"
                          label="Mobile"
                          placeholder="Mobile"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.mobile} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.lane}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>
                    </React.Fragment>

                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Card sx={{ height: "100%", width: "100%", boxShadow: "none" }}>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
                  <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Critical Information
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox mb={2} lineHeight={1}>
                    <MDTypography variant="button" color="text" fontWeight="light">
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
                    </MDTypography>
                  </MDBox>
                  <MDBox opacity={0.3}>
                    <Divider />
                  </MDBox>
                  <MDBox>

                    {renderItems}
                    <React.Fragment>
                      <MDBox display="flex" pt={1} pb={1}>
                        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                          Cover Image: 
                        </MDTypography>
                      </MDBox>
                      <MDBox display="flex" alignItems="center" pb={1} px={2}>
                        <MDAvatar src={Redux.state.FormObject.FormValue?.coverImage?.url || defaultUser} size="md" />
                        <MDBox ml={2}>
                          <MDButton 
                            size="small" 
                            variant="outlined" 
                            color="info" 
                            component={Link} 
                            onClick={() => inputElement2.current.click()}
                          >
                            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                            &nbsp;Choose Image
                          </MDButton>
                        </MDBox>
                      </MDBox>
                      <input type="file" name="coverImage" style={{display: "none"}} ref={inputElement2} onChange={event => handleInput(event, Redux)} />
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>
                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="text"  
                          name="title"
                          label="Title"
                          placeholder="Title"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.title} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.title}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>
                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="text"  
                          name="subtitle"
                          label="Sub Title"
                          placeholder="Sub Title"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.subtitle} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.subtitle}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>
                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="text"  
                          name="description"
                          label="Description"
                          placeholder="Description"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.description} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.description}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>
                    </React.Fragment>

                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Card sx={{ height: "100%", width: "100%", boxShadow: "none" }}>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
                  <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Critical Information
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox mb={2} lineHeight={1}>
                    <MDTypography variant="button" color="text" fontWeight="light">
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
                    </MDTypography>
                  </MDBox>
                  <MDBox opacity={0.3}>
                    <Divider />
                  </MDBox>
                  <MDBox>

                    {renderItems}
                    <React.Fragment>
                      <MDBox display="flex" pt={1} pb={1}>
                        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                          Address: 
                        </MDTypography>
                      </MDBox>

                      <MDBox display="flex" pb={1} px={2}>
                        <MDInput 
                          type="text"  
                          name="lane"
                          label="Lane"
                          placeholder="Lane"
                          onChange={(event) => EventHandler.Address.Change(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.address?.lane} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.address?.lane}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>

                      <MDBox display="flex" pb={1} px={2}>
                        <MDInput 
                          type="text"  
                          name="street"
                          label="Street"
                          placeholder="Street"
                          onChange={(event) => EventHandler.Address.Change(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.address?.street} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.address?.street}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>

                      <MDBox display="flex" pb={1} px={2}>
                        <MDInput 
                          type="text"  
                          name="city"
                          label="City"
                          placeholder="City"
                          onChange={(event) => EventHandler.Address.Change(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.address?.city} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.address?.city}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>

                      <MDBox display="flex" pb={1} px={2}>
                        <MDInput 
                          type="text"  
                          name="state"
                          label="State"
                          placeholder="State"
                          onChange={(event) => EventHandler.Address.Change(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.address?.state} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.address?.state}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>

                      <MDBox display="flex" pb={1} px={2}>
                        <MDInput 
                          type="text"  
                          name="country"
                          label="Country"
                          placeholder="Country"
                          onChange={(event) => EventHandler.Address.Change(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.address?.country} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.address?.country}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>

                      <MDBox display="flex" pb={1} px={2}>
                        <MDInput 
                          type="text"  
                          name="pinCode"
                          label="Pin Code"
                          placeholder="Pin Code"
                          onChange={(event) => EventHandler.Address.Change(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.address?.pinCode} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.address?.pinCode}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each1.name]}
                      </MDTypography>

                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={1} pb={1}>
                        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                          Links: 
                        </MDTypography>
                        <MDButton variant="gradient" color="info" iconOnly size="small"
                          onClick={() => EventHandler.Link.Add(Redux)}
                        >
                          <Icon>add</Icon>
                        </MDButton>
                      </MDBox>

                      {Redux.state.FormObject.FormValue?.links?.map((each, index) => {
                        return (
                          <React.Fragment key={index}>
                            <MDBox display="flex" pb={1}>
                              <MDBox display="flex">
                                <MDInput 
                                  type="text"  
                                  name="title"
                                  label="Title"
                                  placeholder="Title"
                                  onChange={(event) => EventHandler.Link.Change(event, Redux, index)}  
                                  value={each?.title} 
                                  error={Redux.state.FormObject.FormError?.address?.lane}
                                />
                              </MDBox>
                              <MDTypography variant="caption" color='error'>
                                {Redux.state.FormObject.FormError?.[each1.name]}
                              </MDTypography>

                              <MDBox display="flex">
                                <MDInput 
                                  type="text"  
                                  name="url"
                                  label="URL"
                                  placeholder="URL"
                                  onChange={(event) => EventHandler.Link.Change(event, Redux, index)}  
                                  value={each?.url} 
                                  error={Redux.state.FormObject.FormError?.address?.lane}
                                />
                              </MDBox>
                              <MDTypography variant="caption" color='error'>
                                {Redux.state.FormObject.FormError?.[each1.name]}
                              </MDTypography>

                              <MDBox display="flex" justifyContent="space-between" alignItems="center">
                                <MDButton variant="gradient" color="info" iconOnly size="small"
                                  onClick={() => EventHandler.Link.Remove(Redux, index)}
                                >
                                  <Icon>remove</Icon>
                                </MDButton>                              
                              </MDBox>
                            </MDBox>
                          </React.Fragment>
                        )
                      })}
                    </React.Fragment>


                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox
          py={3}
          px={2}
          display="flex" 
          justifyContent="left" 
        >
          <MDButton size="small" variant="gradient" color="info" onClick={OnClick}>
            <Icon>edit</Icon>&nbsp;
            Update Profile
          </MDButton>
        </MDBox>

        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Projects
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Architects design houses
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="project #2"
                title="modern"
                description="As Uber works through a huge amount of internal management turmoil."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="project #1"
                title="scandinavian"
                description="Music is something that everyone has their own specific opinion about."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label="project #3"
                title="minimalist"
                description="Different people have different taste, and various types of music."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label="project #4"
                title="gothic"
                description="Why would anyone pick blue over pink? Pink is obviously a better color."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
          </Grid>
        </MDBox>
      </HeaderComponent> */}

      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr]">
        <div className="mx-auto w-full min-w-0">

          {/* Breadcrumbs */}
          <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
              Home
            </div>
            <ChevronRightIcon className="h-4 w-4" />
            <div className="font-medium text-foreground">Profile Update</div>
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
                        <Label htmlFor="image">Profile Picture :</Label>
                        <Input
                          id="image"
                          name="image"
                          type="file"
                          onChange={event => handleInput(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.image}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="firstName">First Name :</Label>
                        <Input 
                          id="firstName" 
                          name="firstName"
                          placeholder="Enter first name"
                          type="text" 
                          value={Redux.state.FormObject.FormValue?.firstName} 
                          onChange={event => handleInput(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.firstName}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="lastName">Last Name :</Label>
                        <Input 
                          id="lastName" 
                          name="lastName"
                          placeholder="Enter last name"
                          type="text" 
                          value={Redux.state.FormObject.FormValue?.lastName} 
                          onChange={event => handleInput(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.lastName}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email :</Label>
                        <Input 
                          id="email" 
                          name="email"
                          placeholder="Enter email"
                          type="email" 
                          value={Redux.state.FormObject.FormValue?.email} 
                          onChange={event => handleInput(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.email}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="mobile">Mobile :</Label>
                        <Input 
                          id="mobile" 
                          name="mobile"
                          placeholder="Enter mobile"
                          type="text" 
                          value={Redux.state.FormObject.FormValue?.mobile} 
                          onChange={event => handleInput(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.mobile}</p>
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
                        <Label htmlFor="coverImage">Cover Picture :</Label>
                        <Input
                          id="coverImage"
                          name="coverImage"
                          type="file"
                          onChange={event => handleInput(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.coverImage}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="title">Title :</Label>
                        <Input 
                          id="title" 
                          name="title"
                          placeholder="Enter title"
                          type="text" 
                          value={Redux.state.FormObject.FormValue?.title} 
                          onChange={event => handleInput(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.title}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="subtitle">Sub Title :</Label>
                        <Input 
                          id="subtitle" 
                          name="subtitle"
                          placeholder="Enter subtitle"
                          type="text" 
                          value={Redux.state.FormObject.FormValue?.subtitle} 
                          onChange={event => handleInput(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.subtitle}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Description :</Label>
                        <Textarea 
                          id="description" 
                          name="description"
                          placeholder="Enter description"
                          value={Redux.state.FormObject.FormValue?.description} 
                          onChange={event => handleInput(event, Redux)}
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.description}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="detail">Detail :</Label>
                        <Textarea 
                          id="detail" 
                          name="detail"
                          placeholder="Enter detail"
                          value={Redux.state.FormObject.FormValue?.detail} 
                          onChange={event => handleInput(event, Redux)}
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.detail}</p>
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
                        <Label htmlFor="blabla">Address :</Label>
                        <Input 
                          id="lane" 
                          name="lane"
                          placeholder="Enter lane"
                          type="text" 
                          value={Redux.state.FormObject.FormValue?.address?.lane} 
                          onChange={(event) => EventHandler.Address.Change(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.address?.lane}</p>
                        <Input 
                          id="street" 
                          name="street"
                          placeholder="Enter street"
                          type="text" 
                          value={Redux.state.FormObject.FormValue?.address?.street} 
                          onChange={(event) => EventHandler.Address.Change(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.address?.street}</p>
                        <Input 
                          id="city" 
                          name="city"
                          placeholder="Enter city"
                          type="text" 
                          value={Redux.state.FormObject.FormValue?.address?.city} 
                          onChange={(event) => EventHandler.Address.Change(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.address?.city}</p>
                        <Input 
                          id="state" 
                          name="state"
                          placeholder="Enter state"
                          type="text" 
                          value={Redux.state.FormObject.FormValue?.address?.state} 
                          onChange={(event) => EventHandler.Address.Change(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.address?.state}</p>
                        <Input 
                          id="country" 
                          name="country"
                          placeholder="Enter country"
                          type="text" 
                          value={Redux.state.FormObject.FormValue?.address?.country} 
                          onChange={(event) => EventHandler.Address.Change(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.address?.country}</p>
                        <Input 
                          id="pinCode" 
                          name="pinCode"
                          placeholder="Enter pin code"
                          type="text" 
                          value={Redux.state.FormObject.FormValue?.address?.pinCode} 
                          onChange={(event) => EventHandler.Address.Change(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.address?.pinCode}</p>
                      </div>
                      <div className="grid gap-2">
                        <div className="flex w-full items-center justify-between space-x-2">
                          <Label htmlFor="tag">Web Links :</Label>
                          <Button variant="accent" size="smallIcon" onClick={() => EventHandler.Link.Add(Redux)}>
                            <PlusIcon className="h-3 w-3" />
                          </Button>
                        </div>
                        {Redux.state.FormObject.FormValue?.links?.map((each, index) => {
                          return (
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-base">
                                  <div className="flex w-full items-center justify-between space-x-2">
                                    <Label htmlFor="tag">Link 1 :</Label>
                                    <Button variant="destructive" size="smallIcon" onClick={() => EventHandler.Link.Remove(Redux, index)}>
                                      <MinusIcon className="h-3 w-3" />
                                    </Button>
                                  </div>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="grid gap-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="title">Title :</Label>
                                  <Input 
                                    id="title" 
                                    type="text" 
                                    name="title"
                                    placeholder="Enter title"
                                    onChange={(event) => EventHandler.Link.Change(event, Redux, index)}  
                                    value={each?.title}   
                                  />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="url">Tag :</Label>
                                  <Input 
                                    id="url" 
                                    type="text" 
                                    name="url"
                                    placeholder="Enter URL"
                                    onChange={(event) => EventHandler.Link.Change(event, Redux, index)}  
                                    value={each?.url}   
                                  />
                                </div>
                              </CardContent>
                            </Card>
                          )
                        })}                        
                      </div>
                    </CardContent>
                  </Card>
                </DemoContainer>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex items-center space-x-2 pt-4">
            <Button onClick={OnClick}>Update</Button>
          </div>

        </div>
      </main> 
    </React.Fragment>
  )
}

export default ProfileUpdateComponent