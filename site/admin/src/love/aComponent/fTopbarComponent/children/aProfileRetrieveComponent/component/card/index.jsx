import React from 'react'
import SampleForm from './SampleForm'
import { cn } from '@/lib/utils'
import SampleForm1 from './SampleForm1'
import SampleForm2 from './SampleForm2'
import SampleForm3 from './SampleForm3'

function DemoContainer({
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}


const CreateForm = () => {
  return (
    <div className="items-start justify-center gap-4 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-2">
      <div className="col-span-2 grid items-start gap-4 lg:col-span-1">
        <DemoContainer>
          <SampleForm3 />
        </DemoContainer>
        <DemoContainer>
          <SampleForm2 />
        </DemoContainer>
      </div>
      <div className="col-span-2 grid items-start gap-4 lg:col-span-1">
        <DemoContainer>
          <SampleForm1 />
        </DemoContainer>
        <DemoContainer>
          <SampleForm1 />
        </DemoContainer>
      </div>
      <div className="col-span-2 grid items-start gap-4 lg:col-span-1">
        <DemoContainer>
          <SampleForm1 />
        </DemoContainer>
      </div>
      {/* <div className="col-span-2 grid items-start gap-4 lg:col-span-1">
        <DemoContainer>
          <DemoTeamMembers />
        </DemoContainer>
        <DemoContainer>
          <DemoShareDocument />
        </DemoContainer>
        <DemoContainer>
          <DemoNotifications />
        </DemoContainer>
      </div>
      <div className="col-span-2 grid items-start gap-4 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
        <DemoContainer>
          <DemoReportAnIssue />
        </DemoContainer>
        <DemoContainer>
          <DemoGithub />
        </DemoContainer>
        <DemoContainer>
          <DemoCookieSettings />
        </DemoContainer>
      </div> */}
    </div>
  )
}

export default CreateForm