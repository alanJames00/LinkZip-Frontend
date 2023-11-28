import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 justify-items-center">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        About Me<br className="hidden sm:inline" />
    
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        Created My Alan James
        License: MIT (OpenSource)
        </p>
      
      </div>
      <div className="flex gap-4">
      
        <a
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size:"lg" })}
        >
          <span className=" text-xl">My GitHub</span>
        </a>
      </div>
    </section>
    </div>
  )
}
