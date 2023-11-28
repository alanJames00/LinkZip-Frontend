import ShortenUrlForm from "./shortenURLForm"

export default function ShortenUrl() {

    return (
        <div>
            <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 justify-items-center">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        <br className="hidden sm:inline" />
          Shorten URL
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        Create short urls from here.
        </p>
      
      </div>
      <div className="flex gap-4">
      
      <ShortenUrlForm />  
        
      </div>
    </section>
        </div>
    )
}