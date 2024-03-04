import React, { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area';
import SideNav from './component/aSideNav';


const AuthorisedComponent = ({ ReduxUltimate, children }) => {
  // JSX
  return (
    <React.Fragment>
      <main className="flex-1">
        <div className="border-b">
          <div className="container flex-1 items-start md:grid md:grid-cols-[160px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-10">
            <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
              <ScrollArea className="h-full py-6 pr-6 lg:py-8 border-r">
                <SideNav 
                  ReduxUltimate={ReduxUltimate}
                />
              </ScrollArea>
            </aside>
            { children }
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default AuthorisedComponent