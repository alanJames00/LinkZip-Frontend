export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "LinkZip",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Shorten",
      href: "/#/shorten",
    },
    {
      title: "Link Trees",
      href: "/#/createTree",
    },
    {
      title: "About",
      href: '/#/aboutMe'
    }
  ],
  links: {
    github: "https://github.com/alanjames00",
  },
}