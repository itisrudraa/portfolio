import { FloatingDockComponent } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconBook2,
  IconBrandLinkedin,
  IconBrandLeetcode,
} from "@tabler/icons-react";

function FloatingDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/itisrudraa",
    },
    {
      title: "Blogs",
      icon: (
        <IconBook2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://medium.com/@itisrudra",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/itisrudra/",
    },
    {
      title: "Leet Code",
      icon: (
        <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/u/itisrudra/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50" >
      <FloatingDockComponent items={links} />
    </div>
  );
}

export default FloatingDock;