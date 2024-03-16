import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import React from 'react'
import { Link } from 'react-router-dom';
import Image1 from '@/love/hAsset/wallpaper/lady.jpeg'
import { Separator } from '@/components/ui/separator';


const AuthFormComponent2 = ({ Data, Redux, ReduxUltimate }) => {
  // JSX
  return (
    <React.Fragment>
      <div className="container relative h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center" >
            <img src={Image1} alt="hero image" />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {Data.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                {Data.subtitle}
              </p>
            </div>
            <div className={cn("grid gap-6")}>
              <form>
                <div className="grid gap-2">
                  {ReduxUltimate.state.RequiredObject?.Loading ? "Loading..." :
                    <React.Fragment>
                      {Data.inputs.map((each, index) => {
                        return (
                          <React.Fragment key={index} >
                            <div className="grid gap-2">
                              <Label htmlFor={each.name}>{each.label}</Label>
                              <Input type={each.type} name={each.name} id={each.name} placeholder={each.placeholder} onChange={each.onChange} />
                              <p className="-mt-1 text-sm text-red-500 text-muted-foreground">{Redux.state.FormObject.FormError?.[each.name]}</p>
                            </div>
                          </React.Fragment>
                        )
                      })}

                      {Data.buttons.map((each, index) =>  {
                        return (
                          <React.Fragment key={index}>
                            <Button onClick={each.onClick}>{each.label}</Button>
                          </React.Fragment>
                        )
                      })}
                    </React.Fragment>
                  }
                </div>
              </form>
              <Separator />
            </div>
            {Data.links.map((each, index) => {
              return (
                <React.Fragment key={index}>
                  <p className="px-8 text-center text-sm text-muted-foreground">
                    {each?.note}{" "}
                    <Link to={each.route}  className="underline underline-offset-4 hover:text-primary" >
                      {each.label}
                    </Link>.
                  </p>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AuthFormComponent2