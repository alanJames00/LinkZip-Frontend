
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


export function ResultCard() {
  return (
    <div>

    <Card className="  -mx-40">
      <CardHeader>
        <CardTitle>Here's the ShortURL</CardTitle>
        <CardDescription>Share it with people</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Shortened URL</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Original URL</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
           
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Close</Button>
      </CardFooter>
    </Card>


        

    <div>

    </div>

    </div>

  )
}
