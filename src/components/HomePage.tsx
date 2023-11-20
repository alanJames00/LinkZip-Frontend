import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        LinkZip:<br className="hidden sm:inline" />
          Elevate Your Links, Minimize the Noise
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        Shorten URLs seamlessly, create elegant link trees—minimal effort, maximum impact for your online presence.
        </p>
      
      </div>
      <div className="flex gap-4">
      
        <a
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
