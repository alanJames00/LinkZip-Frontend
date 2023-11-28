
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

import { useState } from "react"

export function ResultCard(props: any) {

    const [url, setUrl] = useState('aaa');
        

    const handleCopy = () => {
        // Logic to copy the URL to the clipboard
        navigator.clipboard.writeText(url);
    };
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
              <code>{'https://lz.linkzip.co/shortened-url'}</code>
                {/* <button type="button" onClick={handleCopy}>
                Copy
                </button> */}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Original URL</Label>
              <code>{'https://lz.linkzip.co/shortened-url'}</code>
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
