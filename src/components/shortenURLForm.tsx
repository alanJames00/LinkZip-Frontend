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
            


            </form>
        </div>

    );
}