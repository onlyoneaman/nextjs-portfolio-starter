import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type EcommerceCollabSectionProps = {
  className?: string;
};

export const EcommerceCollabSection: React.FC<EcommerceCollabSectionProps> = ({ className }) => (
  <section
    className={`w-full flex justify-center items-center py-6 px-2 ${className ?? ""}`}
    aria-label="Ecommerce Collaboration Invitation"
  >
    <Card className="w-full max-w-2xl shadow-md border border-gray-200 bg-white">
      <CardContent className="flex flex-col items-center gap-3 py-6">
        <h2 className="text-xl font-bold text-center text-gray-800">
          🚀 Let&apos;s Collaborate!
        </h2>
        <p className="text-center text-gray-600 text-base">
          With a proven track record in building and scaling Ecommerce solutions, I&apos;ve delivered impactful projects that drive results. If you&apos;re looking for a collaborator experienced in <span className="font-semibold">Ecommerce tech, product, or data</span>, let&apos;s connect!
        </p>
        <Link href="/contact">
          <Button variant="default" className="mt-2">Reach Out</Button>
        </Link>
      </CardContent>
    </Card>
  </section>
);

export default EcommerceCollabSection;
