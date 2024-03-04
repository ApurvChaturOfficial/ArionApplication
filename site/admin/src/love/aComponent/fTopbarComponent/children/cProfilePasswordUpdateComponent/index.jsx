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

const ProfilePasswordUpdateComponent = ({ Redux, EventHandler, OnClick }) => {
  // JSX
  return (
    <React.Fragment>
      {/* <MDBox mb={2} />
      <HeaderComponent Redux={Redux}>
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
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="text"  
                          name="oldPassword"
                          label="Old Password"
                          placeholder="Old Password"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.oldPassword} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.oldPassword}
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
                          name="newPassword"
                          label="New Password"
                          placeholder="New Password"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.newPassword} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.newPassword}
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
                          name="confirmPassword"
                          label="Confirm Password"
                          placeholder="Confirm Password"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.confirmPassword} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.confirmPassword}
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
            Update Password
          </MDButton>
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
            <div className="font-medium text-foreground">Profile Update Password</div>
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
                        <Label htmlFor="oldPassword">Old Password :</Label>
                        <Input 
                          id="oldPassword" 
                          name="oldPassword"
                          placeholder="Enter old password"
                          type="password" 
                          onChange={event => handleInput(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.oldPassword}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="newPassword">New Password :</Label>
                        <Input 
                          id="newPassword" 
                          name="newPassword"
                          placeholder="Enter last name"
                          type="password" 
                          onChange={event => handleInput(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.newPassword}</p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirmPassword">Confirm Password :</Label>
                        <Input 
                          id="confirmPassword" 
                          name="confirmPassword"
                          placeholder="Enter confirm password"
                          type="password" 
                          onChange={event => handleInput(event, Redux)} 
                        />
                        <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.confirmPassword}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DemoContainer>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex items-center space-x-2 pt-4">
            <Button onClick={OnClick}>Update Password</Button>
          </div>

        </div>
      </main> 
    </React.Fragment>
  )
}

export default ProfilePasswordUpdateComponent