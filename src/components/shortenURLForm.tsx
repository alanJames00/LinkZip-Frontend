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
    const [isSubmitting, setSubmitting] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [apiResponse, setApiResponse] = useState({});
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();


        // disable button while submitting
        setSubmitting(true);
        // validate url on client side
        // call fetch

        console.log(isCustomUrl);
        console.log(url);
        console.log(customUrl);

        try {
            const response = await fetch('http://localhost:3000/test', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ url, randomUrl:!isCustomUrl, shorturl:customUrl}),
            });
        
            if (response.ok) {
              // Handle successful response
              console.log('POST request successful');
              const respJson = await response.json();
              console.log(respJson);
              setApiResponse({success: true, respJson});
              setShowResult(true);
              
            } else {
              // Handle error response
              setApiResponse({success:false})
            }
          } catch (error) {
            // Handle network error
            console.log('An error occurred', error);
            setApiResponse({
                success:false,
                error,
            })
          } 
        
        // renable button after submission
        setSubmitting(false);
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
            disabled={isSubmitting}
            >Shorten</Button>

        
        {  showResult && <ResultCard result={apiResponse} /> }

            </div>

            </form>

    </div>

    );
}