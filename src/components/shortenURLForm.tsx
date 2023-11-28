import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ResultCard } from "./shortUrlResult"

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
export default function ShortenUrlForm() {

    const [url, setUrl] = useState("");
    const [isCustomUrl, setIsCustomUrl ] = useState(false);
    const [customUrl, setCustomUrl] = useState("");
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // disable button while submitting
        // validate url on client side
        // call fetch
        console.log(url); 

        
        console.log(e);
    }

    return (
        <div className=" ml-[35%]">

            <form onSubmit={handleSubmit}>
            
            <div className="w-full max-w-sm items-center space-x-24">
            <Input type="text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter the URL To Shorten" 
            className=" w-[100%] my-2"/>
            
            
            <div className="flex items-center space-x-2 mb-10 my-3" >
              <Switch id="airplane-mode"
              onClick={() => setIsCustomUrl(!isCustomUrl)} 
              />
               <Label htmlFor="airplane-mode">Use Custom ShortURL</Label>
             </div >
            
            <Input type="text" 
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="Enter the custom URL" 
            className=" w-[100%] my-6"
            style={{marginLeft:0}}
            disabled={!isCustomUrl}
            />
     
        
            <Button
            type="submit" 
            className=" px-[20%] mb-10"
            >Shorten</Button>

        

            <ResultCard /> 

            </div>

            </form>

    </div>

    );
}