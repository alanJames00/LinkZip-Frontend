import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 justify-items-center">
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
          href={siteConfig.mainNav[1].href}
          className={buttonVariants({ variant: "outline", size:"lg" })}
        >
          <span className=" text-xl">Shorten Links</span>
        </a>

        <a
          href={siteConfig.mainNav[2].href}
          className={buttonVariants({ variant: "outline" , size:"lg" })}
        >
          <span className=" text-xl">Make Link Trees</span>
        </a>
      </div>
    </section>
    </div>
  )
}
