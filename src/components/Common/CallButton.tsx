import { cn } from "@/lib/utils";
import {CommonButtonProps} from "@/types";
import { getCalApi } from "@calcom/embed-react";
import { Phone } from "lucide-react";
import {useEffect} from "react";
import { siteConfig } from "@/config/site.config";

const CallButton = (
  {
    className,
    variant = 'primary'
  }: CommonButtonProps
) => {

  useEffect(() => {
    if (!siteConfig.calLink) return;
    (async function () {
      const cal = await getCalApi();
      cal("ui", {});
    })();
  }, []);

  if (!siteConfig.calLink) return null;

  return (
    <button
      className={
        cn(
          `
      text-white bg-primary hover:bg-gray-500 hover:text-white

      px-3 py-1 rounded-lg shadow-md w-fit
      flex items-center gap-2
      `, className
        )
      }
      data-cal-link={siteConfig.calLink}
    >
      <Phone className="w-4 h-4" />
      <span className="text-sm">
        Book a call
      </span>
    </button>
  )
};

export default CallButton;
