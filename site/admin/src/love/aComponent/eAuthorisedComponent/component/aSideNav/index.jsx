import { cn } from '@/lib/utils'
import FinalRouteName from '@/love/gRoute/FinalRouteName'
import React from 'react'
import { Link, useLocation  } from 'react-router-dom'

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
    
          ) : 
          import.meta.env.VITE_APPLICATION === "BhagwadGitaApplication" ? ( 
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
    
          ) : 
          import.meta.env.VITE_APPLICATION === "InterviewQuestionApplication" ? ( 
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
        ) : null
      ) :
      import.meta.env.VITE_ENTERPRISE === "CapellaEnterprise" ? ("") : null
    ) : null
  ) : null 

  let administrationItems = []

  // ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'User')[0]?.access?.list &&
    administrationItems.push({ title: "User", href: FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.ListRoute })

  // ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Role')[0]?.access?.list &&
    administrationItems.push({ title: "Role", href: FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.ListRoute })

  // ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Menu')[0]?.access?.list &&
    administrationItems.push({ title: "Menu", href: FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.ListRoute })

  let settingItems = []

  ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Base')[0]?.access?.list &&
    settingItems.push({ title: "Base", href: FinalRouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.ListRoute })

  ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Admin Hero')[0]?.access?.list &&
    settingItems.push({ title: "Admin Hero", href: FinalRouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.ListRoute })
  
  let assetItems = []

  ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Static Data')[0]?.access?.list &&
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

const SideNav = ({ ReduxUltimate }) => {
  let { pathname } = useLocation();

  return items(ReduxUltimate).length ? (
    <div className="w-full">
      {ReduxUltimate.state.RequiredObject?.Loading ? null :
        ReduxUltimate.state.ReceivedObject?.ProfileRetrieve && (
          items(ReduxUltimate).map((item, index) => (
            item?.items?.length ?
            <div key={index} className={cn("pb-4")}>
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                {item.title}
              </h4>
              {item?.items?.length && (
                <DocsSidebarNavItems items={item.items} pathname={pathname} />
              )}
            </div> : null
          ))
        )
      }
    </div>
  ) : null
}

export default SideNav

export function DocsSidebarNavItems({ items, pathname }) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            to={item.href}
            className={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null
}