import { initialValues } from "@/components/landing/LeadForm";
import { PLANS } from "@/data/constants";
import * as FBPixel from "@/utils/FBPixel.utils";
interface Prop {
  setIsLoading: (isLoading: boolean) => void;
  values: typeof initialValues;
}
export const useSendLeadToMail = () => {
  const sendLead = async ({ values, setIsLoading }: Prop) => {
    try {
      setIsLoading(true);
      const plan = PLANS.find((i) => i.name === values.plan);
      const sendWhatsAppMsg = () => {
        const message =
          `Hello Bubblab, I want to book a new subscription: \n\n` +
          `*Name:* ${values.fullname} \n` +
          `*Phone:* ${values.whatsapp_phone} \n` +
          `*Selected Plan:* ${plan?.name} (#${plan?.price}/monthly) \n` +
          `*Area:* ${values.city}, ${values.state} \n` +
          `*Address:* ${values.address} \n`;
        const whatsappURL = `https://wa.me/2348163245032?text=${encodeURIComponent(
          message
        )}`;
        window.location.href = whatsappURL;
      };
      sendWhatsAppMsg();
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          plan_name: plan?.name,
          plan_price: plan?.price,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }
      FBPixel.event("Subscribe", {
        content_name: plan?.name,
        currency: "USD",
        value: 2,
      });
      //   modal.open({
      //     title: "🎉 Subscription Activated!",
      //     content: <SuccessModal action={sendWhatsAppMsg} />,
      //     size: "sm:w-sm",
      //   });
      sendWhatsAppMsg();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  return sendLead;
};
