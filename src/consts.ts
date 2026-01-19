import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
	TITLE: "Posh Guru",
	DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
	AUTHOR: "Justin Grote",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
	TITLE: "Blog",
	DESCRIPTION: "",
}

// Projects Page
export const PROJECTS: Page = {
	TITLE: "Projects",
	DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
	{
		TEXT: "Home",
		HREF: "/",
	},
	{
		TEXT: "Blog",
		HREF: "/blog",
	},
]

// Socials
export const SOCIALS: Socials = [
	{
		NAME: "Github",
		ICON: "github",
		TEXT: "JustinGrote",
		HREF: "https://github.com/JustinGrote",
	},
	{
		NAME: "BlueSky",
		ICON: "bluesky",
		TEXT: "@posh.guru",
		HREF: "https://bsky.app/profile/posh.guru",
	},
]

