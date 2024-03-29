import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import brand from '@/love/dFunction/gBrand';
import FinalRouteName from '@/love/gRoute/FinalRouteName';


const items = (ReduxUltimate) => {
  let mainItems = []
  
  import.meta.env.VITE_CORPORATION === "BeehiveCorporation" ? (
    import.meta.env.VITE_ORGANISATION === "AndromedaOrganisation" ? (
      import.meta.env.VITE_ENTERPRISE === "AcruxEnterprise" ? (
        import.meta.env.VITE_APPLICATION === "ArionApplication" || 
        import.meta.env.VITE_APPLICATION === "AnkasApplication" || 
        import.meta.env.VITE_APPLICATION === "AbolApplication" ? (
          (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
            mainItems.push({ title: "Hero", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute }))
  
          &&
        
          (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Counter')[0]?.access?.list &&
            mainItems.push({ title: "Counter", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute }))
  
          &&
        
          (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Program Section')[0]?.access?.list &&
            mainItems.push({ title: "Program Section", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute }))
  
          &&
        
          (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Program')[0]?.access?.list &&
            mainItems.push({ title: "Program", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute }))

        ) : null
      ) :
      import.meta.env.VITE_ENTERPRISE === "AnserEnterprise" ? ("") : null
    ) :
    import.meta.env.VITE_ORGANISATION === "PinwheelOrganisation" ? (
      import.meta.env.VITE_APPLICATION === "BeehiveApplication" ||
      import.meta.env.VITE_APPLICATION === "AndromedaApplication" ||
      import.meta.env.VITE_APPLICATION === "TadpoleApplication" ? ( 
        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
          mainItems.push({ title: "Hero", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute }))

        &&

        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Counter')[0]?.access?.list &&
          mainItems.push({ title: "Counter", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute }))

        &&

        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'About')[0]?.access?.list &&

          mainItems.push({ title: "About", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute }))

        &&

        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Service')[0]?.access?.list &&

          mainItems.push({ title: "Service", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute }))

        &&

        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Branch Section')[0]?.access?.list &&

          mainItems.push({ title: "Branch Section", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.ListRoute }))

        &&

        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Branch Group')[0]?.access?.list &&

          mainItems.push({ title: "Branch Group", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.ListRoute }))

        &&

        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Branch')[0]?.access?.list &&

          mainItems.push({ title: "Branch", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.ListRoute }))

        &&

        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Section')[0]?.access?.list &&

          mainItems.push({ title: "Project Section", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute }))

        &&

        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Group')[0]?.access?.list &&

          mainItems.push({ title: "Project Group", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute }))

        &&

        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project')[0]?.access?.list &&
          mainItems.push({ title: "Project", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute }))

      ) :
      import.meta.env.VITE_APPLICATION === "PinwheelApplication" ||
      import.meta.env.VITE_APPLICATION === "AcruxApplication" ||
      import.meta.env.VITE_APPLICATION === "AnserApplication" ||
      import.meta.env.VITE_APPLICATION === "AquilaApplication" ||
      import.meta.env.VITE_APPLICATION === "BellatrixApplication" ||
      import.meta.env.VITE_APPLICATION === "CapellaApplication" ? (
        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
          mainItems.push({ title: "Hero", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute }))

        &&
        
        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Counter')[0]?.access?.list &&
          mainItems.push({ title: "Counter", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute }))

        &&
        
        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'About')[0]?.access?.list &&
          mainItems.push({ title: "About", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute }))

        &&
        
        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Service')[0]?.access?.list &&
          mainItems.push({ title: "Service", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute }))

        &&
        
        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Section')[0]?.access?.list &&
          mainItems.push({ title: "Project Section", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute }))

        &&
        
        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Group')[0]?.access?.list &&
          mainItems.push({ title: "Project Group", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute }))

        &&
        
        (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project')[0]?.access?.list &&
          mainItems.push({ title: "Project", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute }))
          
      ) : null
    ) :
    import.meta.env.VITE_ORGANISATION === "TadpoleOrganisation" ? (
      import.meta.env.VITE_ENTERPRISE === "AquilaEnterprise" ? ("") :
      import.meta.env.VITE_ENTERPRISE === "BellatrixEnterprise" ? (
        import.meta.env.VITE_FIRM === "TechfolioFirm" ? (
          import.meta.env.VITE_APPLICATION === "TechfolioApplication" ? ( 
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
              mainItems.push({ title: "Hero", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute }))
    
            &&
          
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Counter')[0]?.access?.list &&
              mainItems.push({ title: "Counter", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute }))
    
            &&
          
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Program Section')[0]?.access?.list &&
              mainItems.push({ title: "Program Section", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute }))
    
            &&
          
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Program')[0]?.access?.list &&
              mainItems.push({ title: "Program", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute }))
    
          ) :
          import.meta.env.VITE_APPLICATION === "ApurvChaturApplication" ||
          import.meta.env.VITE_APPLICATION === "AnushreeMandapeApplication" ||
          import.meta.env.VITE_APPLICATION === "SofieBerkinApplication" ? ( 
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
              mainItems.push({ title: "Hero", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute }))
    
            &&
        
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'About')[0]?.access?.list &&
              mainItems.push({ title: "About", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute }))
    
            &&
        
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Experience')[0]?.access?.list &&
              mainItems.push({ title: "Experience", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.ListRoute }))
    
            &&
        
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Service')[0]?.access?.list &&
              mainItems.push({ title: "Service", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute }))
    
            &&
        
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Portfolio')[0]?.access?.list &&
              mainItems.push({ title: "Portfolio", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.ListRoute }))
    
            &&
        
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Portfolio Card')[0]?.access?.list &&
              mainItems.push({ title: "Portfolio Card", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.ListRoute }))
    
            &&
        
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Event')[0]?.access?.list &&
              mainItems.push({ title: "Event", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.ListRoute }))
    
            &&
        
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Event Card')[0]?.access?.list &&
              mainItems.push({ title: "Event Card", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.ListRoute }))
    
            &&
        
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Blog')[0]?.access?.list &&
              mainItems.push({ title: "Blog", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.ListRoute }))
    
            &&
        
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Blog Card')[0]?.access?.list &&
              mainItems.push({ title: "Blog Card", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.ListRoute }))
    
          ) : null
        ) : 
        import.meta.env.VITE_FIRM === "BlogifyFirm" ? (
          import.meta.env.VITE_APPLICATION === "BlogifyApplication" ? ( 
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
              mainItems.push({ title: "Hero", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute }))
    
            &&
          
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Counter')[0]?.access?.list &&
              mainItems.push({ title: "Counter", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute }))
    
            &&
          
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Program Section')[0]?.access?.list &&
              mainItems.push({ title: "Program Section", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute }))
    
            &&
          
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Program')[0]?.access?.list &&
              mainItems.push({ title: "Program", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute }))
    
          ) :
          import.meta.env.VITE_APPLICATION === "SrimadBhagwatamApplication" ? (
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
              mainItems.push({ title: "Hero", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Counter')[0]?.access?.list &&
              mainItems.push({ title: "Counter", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'About')[0]?.access?.list &&
              mainItems.push({ title: "About", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Service')[0]?.access?.list &&
              mainItems.push({ title: "Service", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Section')[0]?.access?.list &&
              mainItems.push({ title: "Project Section", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Group')[0]?.access?.list &&
              mainItems.push({ title: "Project Group", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project')[0]?.access?.list &&
              mainItems.push({ title: "Project", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute }))
              
          ) : 
          import.meta.env.VITE_APPLICATION === "BhagwadGitaApplication" ? (
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
              mainItems.push({ title: "Hero", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Counter')[0]?.access?.list &&
              mainItems.push({ title: "Counter", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'About')[0]?.access?.list &&
              mainItems.push({ title: "About", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Service')[0]?.access?.list &&
              mainItems.push({ title: "Service", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Section')[0]?.access?.list &&
              mainItems.push({ title: "Project Section", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Group')[0]?.access?.list &&
              mainItems.push({ title: "Project Group", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project')[0]?.access?.list &&
              mainItems.push({ title: "Project", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute }))
              
          ) : 
          import.meta.env.VITE_APPLICATION === "InterviewQuestionApplication" ? (
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
              mainItems.push({ title: "Hero", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Counter')[0]?.access?.list &&
              mainItems.push({ title: "Counter", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'About')[0]?.access?.list &&
              mainItems.push({ title: "About", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Service')[0]?.access?.list &&
              mainItems.push({ title: "Service", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Section')[0]?.access?.list &&
              mainItems.push({ title: "Project Section", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Group')[0]?.access?.list &&
              mainItems.push({ title: "Project Group", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute }))
    
            &&
            
            (ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project')[0]?.access?.list &&
              mainItems.push({ title: "Project", href: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute }))
              
          ) : null
        ) : null
      ) :
      import.meta.env.VITE_ENTERPRISE === "CapellaEnterprise" ? ("") : null
    ) : null
  ) : null 

  let administrationItems = []

  ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'User')[0]?.access?.list &&
    administrationItems.push({ title: "User", href: FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.ListRoute })

  ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Role')[0]?.access?.list &&
    administrationItems.push({ title: "Role", href: FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.ListRoute })

  ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Menu')[0]?.access?.list &&
    administrationItems.push({ title: "Menu", href: FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.ListRoute })

  let settingItems = []

  ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Base')[0]?.access?.list &&
    settingItems.push({ title: "Base", href: FinalRouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.ListRoute })

  ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Admin Hero')[0]?.access?.list &&
    settingItems.push({ title: "Admin Hero", href: FinalRouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.ListRoute })
  
  let assetItems = []

  ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Base')[0]?.access?.list &&
    assetItems.push({ title: "Static Data", href: FinalRouteName.ContentRoute.SidebarRoute.AssetRoute.StaticDataRoute.ListRoute })

  return [
    {
      title: "Main",
      items: mainItems
    },
    {
      title: "Administration",
      items: administrationItems
    },
    {
      title: "Setting",
      items: settingItems
    },
    {
      title: "Asset",
      items: assetItems
    },
  ]
}

const docsConfig = (ReduxUltimate) => ({
  mainNav: [
    {href: "sadsa", title: "One"},
    {href: "sadasdassa", title: "Two"},
    {href: "sqweadsa", title: "Three"},
  ],
  sidebarNav: ReduxUltimate.state.ReceivedObject?.ProfileRetrieve && items(ReduxUltimate)
})

function MobileLink({ href, onOpenChange, className, children, ...props }) {
  return (
    <Link
      to={href}
      onClick={() => {
        // router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}

const MobileNav = ({ ReduxUltimate }) => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <img src={brand().logo} alt="Logo" className="h-8 w-8" />
          <span className="sr-only">{brand().name}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <img src={brand().logo} alt="Logo" className="mr-2 h-8 w-8" />
          <span className="font-bold">{brand().name}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {docsConfig(ReduxUltimate)?.mainNav?.map(item => item.href && (
              <MobileLink
                key={item.href}
                href={item.href}
                onOpenChange={setOpen}
              >
                {item.title}
              </MobileLink>
            ) )}
          </div>
          <div className="flex flex-col space-y-2">
            {docsConfig(ReduxUltimate)?.sidebarNav?.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            href={item.href}
                            onOpenChange={setOpen}
                            className="text-muted-foreground"
                          >
                            {item.title}
                            {item.label && (
                              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav