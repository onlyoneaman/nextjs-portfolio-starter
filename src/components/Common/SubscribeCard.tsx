import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";

const SubscribeCard = () => {
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch(form.action, {
      method: form.method,
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      form.reset();
      setSuccess(true);
    }
  }

  return (
    <div
      className="p-3 border-[#393939] border rounded-md space-y-3"
    >
      <div
        className="space-y-1"
      >
        <h3
          className="text-md font-bold text-primary"
        >
          {"Stay up to date"}
        </h3>
        <p
          className="text-sm"
        >
          {"Keep me updated with the latest that pops up."}
        </p>
      </div>
      {
        success ? (
          <div>
            <span
              className="text-white"
            >
              {"Thank you for subscribing!"}
            </span>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/xeojoqnd"
            className="flex gap-2"
            method="post"
            onSubmit={onSubmit}
          >
            <Input
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
            <Button
              type="submit"
            >
              {"Subscribe"}
            </Button>
          </form>
        )
      }
    </div>
  )
};

export default SubscribeCard;
