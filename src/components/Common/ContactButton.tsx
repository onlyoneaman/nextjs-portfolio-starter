import {Button} from "@/components/ui/button.tsx";
import Link from "next/link";
import {getStyles} from "@/helpers/styleFunctions.ts";

type ContactButtonProps = {
  variant?: 'primary' | 'secondary'
}

const ContactButton = (
  {
    variant = 'primary'
  }: ContactButtonProps
) => {

  return (
    <Link
      href={'/contact'}
    >
      <Button
        className={getStyles(variant)}
      >
        Contact
      </Button>
    </Link>
  )
};

export default ContactButton;
