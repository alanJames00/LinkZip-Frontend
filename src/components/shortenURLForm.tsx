import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export default function ShortenUrlForm() {

    const [url, setUrl] = useState("");
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        console.log(e);
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
            
            <div className="w-full max-w-sm items-center space-x-24">
            <Input type="text" placeholder="Enter the URL To Shorten" className=" px-20"/>
            <Button type="submit" className=" my-10 px-16">Shorten</Button>
            </div>

            </form>
        </div>

    );
}