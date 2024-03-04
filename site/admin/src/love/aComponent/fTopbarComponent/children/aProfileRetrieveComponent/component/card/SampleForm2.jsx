import { PlusIcon, MinusIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
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
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const SampleForm2 = () => {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">More Information</CardTitle>
        <CardDescription>
          Enter the more info like tags, cards, etc.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="tag">Tag</Label>
          <Input id="tag" type="text" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="type">Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Type</SelectLabel>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>        
        </div>

        <div className="grid gap-2">
          <div className="flex w-full items-center justify-between space-x-2">
            <Label htmlFor="tag">Web Links</Label>
            <Button variant="outline" size="icon">
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                <div className="flex w-full items-center justify-between space-x-2">
                  <Label htmlFor="tag">Link 1</Label>
                  <Button variant="outline" size="icon">
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="tag">Tag</Label>
                <Input id="tag" type="text" />
              </div>
              <div className="grid gap-2">
                <div className="flex w-full items-center justify-between space-x-2">
                  <Label htmlFor="tag">Title</Label>
                  <Button variant="outline" size="icon">
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      <div className="flex w-full items-center justify-between space-x-2">
                        <Label htmlFor="tag">Title 1</Label>
                        <Button variant="outline" size="icon">
                          <MinusIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="tag">Tag</Label>
                      <Input id="tag" type="text" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="type">Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select Type</SelectLabel>
                            <SelectItem value="frontend">Frontend</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>        
                    </div>
                  </CardContent>
                </Card>
        
              </div>
            </CardContent>
          </Card>
        </div>

      </CardContent>
    </Card>
  )
}

export default SampleForm2