
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"


import { useState } from "react"

export function ResultCard(props: any) {

    const [shortUrl, setShortUrl] = useState(props.result.respJson.short_url);
    const [isSucess, setSuccess] = useState(props.result.success);
    console.log(isSucess);
      
    const handleCopy = () => {
        // Logic to copy the URL to the clipboard
        navigator.clipboard.writeText(shortUrl);
    };
  return (
    
    
    <div>
    { isSucess &&
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
              <code>{props.result.respJson.short_url}</code>
                <button type="button" onClick={handleCopy}>
                Copy
                </button>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Original URL</Label>
              <code>{props.result.respJson.original_url}</code>
            </div>
           
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Close</Button>
      </CardFooter>
    </Card>
    }

    { !isSucess && 
        <Card className="  -mx-40">
        <CardHeader>
          <CardTitle>An Error Occurred</CardTitle>
          {props.result.respJson.info=="the shortened url already exists, try new one" && <CardDescription>Custom Shortened URL Already exists, Try Another One</CardDescription>}
          {props.result.respJson.info=="network error" && <CardDescription>Network Error, ERR_INTERNET_DISCONNECTED</CardDescription>}

        </CardHeader>
        </Card>
    }
               
    <div>

    </div>

    </div>

  )
}
