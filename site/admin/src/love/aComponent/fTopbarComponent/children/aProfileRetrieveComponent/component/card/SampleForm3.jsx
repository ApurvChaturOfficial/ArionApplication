import { GitHubLogoIcon } from "@radix-ui/react-icons"
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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


const SampleForm3 = () => {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Basic Information</CardTitle>
        <CardDescription>
          Enter the basic info like title, subtitle, status, etc.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="picture">Name</Label>
          <p id="picture" className="text-lg text-muted-foreground">Shraddha Kapoor</p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Avatar>
            <AvatarImage src="{Redux.state.ReceivedObject?.ProfileRetrieve?.eImage?.url}" />
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>        
        </div>
        <div className="grid gap-2">
          <Label htmlFor="subtitle">Subtitle</Label>
          <Input id="subtitle" type="text" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="status">Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Status</SelectLabel>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>        
        </div>
        <div className="grid gap-2">
          <Label htmlFor="text">Description</Label>
          <Textarea id="description" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="text">Detail</Label>
          <Textarea id="detail" />
        </div>
      </CardContent>
    </Card>
  )
}

export default SampleForm3