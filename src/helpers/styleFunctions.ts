import {CommonButtonProps} from "@/types";

const getStyles = (variant: CommonButtonProps["variant"]) => {
  if (variant === 'primary') {
    return 'text-black bg-white hover:text-gray-500 hover:bg-gray-200'
  } else {
    return "text-white bg-black hover:text-black hover:bg-white"
  }
};

export {
  getStyles
}
