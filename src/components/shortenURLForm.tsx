
export default function ShortenUrlForm() {

    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        console.log(e);
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
            <input type="email" />

            </form>
        </div>

    );
}