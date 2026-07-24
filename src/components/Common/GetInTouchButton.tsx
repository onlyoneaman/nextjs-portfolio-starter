import {Button} from "@/components/ui/button";
import Link from "next/link";
import {CommonButtonProps} from "@/types";
import {getStyles} from "@/helpers/styleFunctions.ts";

const GetInTouchButton = (
  {
    variant = "secondary"
  }: CommonButtonProps
) => {

  return(
    <Link
      className="text-white hover:text-oldsilver"
      href={'/contact'}
    >
      <Button
        className={getStyles(variant)}
      >
        Get in Touch
      </Button>
    </Link>
  )
};

export default GetInTouchButton;
