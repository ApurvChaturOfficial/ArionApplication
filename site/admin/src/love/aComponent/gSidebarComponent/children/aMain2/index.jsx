import React from 'react';
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { cn } from '@/lib/utils';
import Balancer from "react-wrap-balancer"
import { Link } from 'react-router-dom';
import { badgeVariants } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import MainList from './children/fMainContent/bMainList';
import MainForm from './children/fMainContent/cMainForm';
import MainDetail from './children/fMainContent/dMainDetail';
import Loader from '@/love/aComponent/aGlobalComponent/component/aLoader';


const MainSection2 = ({ Data, Redux, ReduxUltimate, DeleteAPI, }) => {
  // Variables
  const { header, component, content } = Data

  // JSX
  return (
    <React.Fragment>
      {ReduxUltimate.state.RequiredObject?.Loading ? <Loader /> :
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr]">
          <div className="mx-auto w-full min-w-0">

            {/* Breadcrumbs */}
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                Docs
              </div>
              <ChevronRightIcon className="h-4 w-4" />
              <div className="font-medium text-foreground">{"Hero List"}</div>
            </div>

            {/* Header */}
            <div className="space-y-2">
              <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
                {header.label}
              </h1>
              <p className="text-lg text-muted-foreground">
                <Balancer>A vertically stacked set of interactive headings that each reveal a section of content.</Balancer>
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-2 pt-4">
              {header.buttons.map((each, index) => {
                return (
                  <Button key={index}><Link to={each.route}>{each.label}</Link></Button>
                )
              }) }
            </div>

            {
              component === "List"     ? <MainList   Content={content} Header={header}                                                          /> :
              component === "Create"   ? <MainForm   Content={content} Redux={Redux}                                             /> :
              component === "Retrieve" ? <MainDetail Content={content}                                                           /> :
              component === "Update"   ? <MainForm   Content={content} Redux={Redux}                                             /> :
              component === "Delete"   ? <MainDetail Content={content}               Component={component} DeleteAPI={DeleteAPI} /> :
              <MainCardList />
            }   
          </div>
        </main> 
      }
    </React.Fragment>
  );
};

export default MainSection2;
