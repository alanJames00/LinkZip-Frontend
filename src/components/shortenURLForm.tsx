import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ResultCard } from "./shortUrlResult";
export default function ShortenUrlForm() {

    const [url, setUrl] = useState("");
    
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
            className=" w-[100%] my-10"/>

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