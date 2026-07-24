import React, {useState, useEffect} from 'react';
import {Button} from "@/components/ui/button.tsx";
import {FiCopy} from "react-icons/fi";
import { siteConfig } from "@/config/site.config";

const EmailButton = () => {
  const [copyStatus, setCopyStatus] = useState(false);
  const email = siteConfig.email;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopyStatus(true);
  };

  useEffect(() => {
    if (copyStatus) {
      const timer = setTimeout(() => {
        setCopyStatus(false);
      }, 3000); // reset after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [copyStatus]);

  return (
    <Button
      className={copyStatus ? "text-white hover:text-green border-green-500 border-2" : "text-white hover:text-oldsilver"}
      onClick={copyEmail}
    >
      <span className="text-sm pr-2">
        <FiCopy className="m-0" size={12}/>
      </span>
      <span
        className={copyStatus ? "text-green" : ""}
        style={{
          transition: "all 0.3s ease",
        }}
      >
        {copyStatus ? "Copied!" : "E-Mail"}
      </span>
    </Button>
  )
};

export default EmailButton;
