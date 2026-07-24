import ContainerTitle from "@/components/Common/ContainerTitle.tsx";
import SEO from "@/components/SEO.tsx";
import EmailButton from "@/components/Common/EmailButton.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import SubscribeCard from "@/components/Common/SubscribeCard.tsx";
import Link from "next/link";
import XConnectCard from "@/components/Common/XConnectCard";
import { Boxes } from "@/components/ui/background-boxes";
import { siteConfig } from "@/config/site.config";

const Contact = () => {
  return (
    <>
      <SEO
        title={"Contact"}
        description={`Get in touch with ${siteConfig.name} for collaboration, ideas, or work.`}
        keywords={`Contact ${siteConfig.name}`}
        canonicalPath="/contact"
      />
      <div className="relative h-96 overflow-hidden space-y-3 md:space-y-6 max-w-5xl mx-auto">
        <div className="absolute inset-0 z-20 w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <ContainerTitle
          className="z-20 relative"
          title={"Contact"}
        />

        <h2 className="z-20 mb-6 relative">
          {"Have an idea, a question, or just want to say hi? Reach out below."}
        </h2>
        <div className="flex z-20 items-center space-x-4 relative">

          <XConnectCard />
        </div>

        {/* <SubscribeCard /> */}
      </div>
    </>
  );
};

export default Contact;
