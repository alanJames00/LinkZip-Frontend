import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export default function ShortenUrlForm() {

    const [url, setUrl] = useState("");
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        console.log(e);
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
            
            <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
            </div>

            </form>
        </div>

    );
}