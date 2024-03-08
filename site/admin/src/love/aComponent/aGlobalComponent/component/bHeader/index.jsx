import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import React from 'react'
import MainNav from "./components/aMainNav"
import MobileNav from "./components/bMobileNav"
import { Link } from "react-router-dom"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"
import Setting from "./components/cSetting"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { EnvelopeOpenIcon, LockOpen2Icon, InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { LogIn, Signpost } from 'lucide-react';


function getInitials(firstName, lastName) {
  // Extract the first character of the first name and last name
  const firstInitial = firstName.charAt(0).toUpperCase();
  const lastInitial = lastName.charAt(0).toUpperCase();
  
  // Return the initials
  return `${firstInitial}${lastInitial}`;
}

const Header = ({ Redux, LogoutAPICall }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav ReduxUltimate={Redux} />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
          </div>
          <nav className="flex items-center space-x-2">
            {Redux.state.RequiredObject?.Loading ? null :
              Redux.state.ReceivedObject?.ProfileRetrieve ? (
                <div className="flex items-center space-x-2 mr-2">
                  <Avatar>
                    <AvatarImage src={Redux.state.ReceivedObject?.ProfileRetrieve?.eImage?.url} />
                    <AvatarFallback>{getInitials(
                      Redux.state.ReceivedObject?.ProfileRetrieve?.eFirstName, 
                      Redux.state.ReceivedObject?.ProfileRetrieve?.eLastName
                    )}</AvatarFallback>
                  </Avatar>
                  <div className='hidden sm:block' >
                    <p className="text-sm font-medium leading-none">{`${Redux.state.ReceivedObject?.ProfileRetrieve?.eFirstName} ${Redux.state.ReceivedObject?.ProfileRetrieve?.eLastName}`}</p>
                    <p className="text-sm text-muted-foreground">{Redux.state.ReceivedObject?.ProfileRetrieve?.cRole?.aTitle}</p>
                  </div>
                </div>
              ) : (
                <React.Fragment>
                  <Button variant="outline" asChild className="hidden md:flex">
                    <Link to="/login" >
                      <LogIn className="mr-2 h-4 w-4" /> Sign In
                    </Link>
                  </Button>

                  <Button variant="outline" asChild className="hidden md:flex">
                    <Link to="/register" >
                      <Signpost className="mr-2 h-4 w-4" /> Sign Up
                    </Link>
                  </Button>
                </React.Fragment>
              )
            }
            
            <ModeToggle />
            <Setting Redux={Redux} LogoutAPICall={LogoutAPICall} />
          </nav>
        </div>
      </div>
      <Separator />
    </header>
  )
}

export default Header