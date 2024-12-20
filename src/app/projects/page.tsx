import React from "react";
import { ProjectsData } from "./project-data";
import CardItem from "@/components/Carditem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Here are some of the projects I've built",
  openGraph: {
    title: "Projects | Nikhar Savaliya",
    description: "Here are some of the projects I've built",
    url: "https://nikharsavaliya.me/projects",
    images: [`/api/og?title=${encodeURIComponent("Nikhar's Projects")}`],
  },
  twitter: {
    title: "Projects | Nikhar Savaliya",
    description: "Here are some of the projects I've built",
    images: [`/api/og?title=${encodeURIComponent("Nikhar's Projects")}`],
  },
};

const page = () => {
  return (
    <div className="mt-16 mb-8 mx-4 xl:mx-0">
      <h2 className="text-3xl font-bold uppercase flex items-center text-white mb-4 ">
        projects
        <span className="text-accent ml-1"> ˮ</span>
      </h2>
      <p className="text-muted-foreground mb-12 leading-7">
        Here are some of the projects I&apos;ve built.
      </p>
      <div className="flex flex-col gap-8">
        {ProjectsData.map((project, index) => (
          <CardItem {...project} key={project.link} index={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
