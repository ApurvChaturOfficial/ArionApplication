import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import FinalRouteName from '@/love/gRoute/FinalRouteName'
import brand from '@/love/dFunction/gBrand';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EnvelopeOpenIcon, LockOpen2Icon, InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import Image1 from '@/love/hAsset/assets/1.png'
import { Separator } from '@/components/ui/separator';


const HomePageComponent = ({ Redux, ReduxUltimate }) => {
  return (
    Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve &&
    <React.Fragment>
      <section>
        <div className="grid max-w-screen-xl h-[calc(100vh-3.5rem)] px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className='mb-4' >
              <Badge variant="secondary">{Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.tag}</Badge>
            </div>
            <h1 className="max-w-2xl mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl">
              {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.title}
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
              {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.subtitle}
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.description}
            </p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link to="hero-list" >
                <Button className="w-full sm:w-auto" variant="outline">
                    <LockOpen2Icon className="mr-2 h-4 w-4" /> Let's Visit Admin
                </Button>
              </Link>

              <Button className="w-full sm:w-auto" variant="outline">
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
              </Button>
            </div>

            <p className="max-w-2xl mt-6 mb-2 font-light lg:mt-8 md:text-lg lg:text-xl text-center sm:text-start ">
              Follow us on:
            </p>
            <div className="flex justify-center space-x-2 sm:flex sm:justify-start sm:space-y-0 sm:space-x-4">
              <Button variant="ghost" size="icon" asChild >
                <Link 
                  to="https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogoIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild >
                <Link 
                  to="https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterLogoIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild >
                <Link 
                  to="https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInLogoIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild >
                <Link 
                  to="https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubLogoIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src={Image1} alt="hero image" />
          </div>                
        </div>
        {/* <Separator /> */}
      </section>
    </React.Fragment>
  )
}

export default HomePageComponent