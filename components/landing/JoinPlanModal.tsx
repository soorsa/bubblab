"use client";

import InputField from "@/components/form/InputField";
import Select from "@/components/form/Select";
import Button from "@/components/global/Button";
import SuccessModal from "@/components/landing/SubscriptionSuccess";
import { useModal } from "@/context/modal.state";
import { AVAILABLE_ZONES, PLANS } from "@/data/constants";
import * as FBPixel from "@/utils/FBPixel.utils";
import { formatPrice } from "@/utils/format.utils";
import { Form, Formik } from "formik";
import { CheckCircle2, Info, MapPin } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import * as Yup from "yup";
interface Prop {
  plan: (typeof PLANS)[0];
}
const JoinPlanModal: React.FC<Prop> = ({ plan }) => {
  const modal = useModal();
  const [loading, setloading] = useState(false);
  const states = AVAILABLE_ZONES.map((state) => ({
    value: state.state,
    label: state.state,
  }));
  const initialValues = {
    email: "",
    address: "",
    state: "Lagos",
    city: "",
    whatsapp_phone: "",
    phone: "",
    first_name: "",
    last_name: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    whatsapp_phone: Yup.mixed().required("required"),
    phone: Yup.mixed().required("required"),
    first_name: Yup.string().required("required"),
    last_name: Yup.string().required("required"),
    address: Yup.string().required("required"),
    state: Yup.string().required("required"),
    city: Yup.string().required("required"),
  });
  const submit = async (values: typeof initialValues) => {
    const sendWhatsAppMsg = () => {
      const message =
        `Hello Bubblab, I want to book a new subscription: \n\n` +
        `*Name:* ${values.first_name} ${values.last_name} \n` +
        `*Phone:* ${values.whatsapp_phone}, ${values.phone} \n` +
        `*Selected Plan:* ${plan.name} (#${plan.price}/monthly) \n` +
        `*Area:* ${values.city}, ${values.state} \n` +
        `*Address:* ${values.address} \n`;
      const whatsappURL = `https://wa.me/2348163245032?text=${encodeURIComponent(
        message
      )}`;
      window.location.href = whatsappURL;
    };

    const sendmail = async () => {
      try {
        setloading(true);
        const response = await fetch("/api/send-mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            plan_name: plan.name,
            plan_price: plan.price,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit order");
        }
        FBPixel.event("Subscribe", {
          content_name: plan.name,
          currency: "USD",
          value: 2,
        });
        modal.open({
          title: "🎉 Subscription Activated!",
          content: <SuccessModal action={sendWhatsAppMsg} />,
          size: "sm:w-sm",
        });
        sendWhatsAppMsg();
        setloading(false);
      } catch (error) {
        console.error(error);
        setloading(false);
      }
    };
    sendmail();
  };
  return (
    <div className="p-2 relative">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount
        onSubmit={submit}
      >
        {({ isValid, values }) => {
          const state = AVAILABLE_ZONES.find((i) => i.state === values.state);
          const cities =
            state?.cities.map((city) => ({
              value: city,
              label: city,
            })) || [];

          return (
            <Form className="grid sm:grid-cols-2 gap-5 sm:gap-2 ">
              <div className="space-y-2">
                <div className="flex items-start gap-2 bg-linear-to-r from-gray-200 to-gray-100 p-2 rounded-lg">
                  <Info size={20} />
                  <div className="flex-1 space-y-1 font-semibold">
                    <div className="text-base sm:text-sm">
                      Only avaliable for these{" "}
                      <b className="underline underline-offset-2">
                        {states.map((state) => `${state.label}`)}
                      </b>{" "}
                      zones:
                    </div>
                    <div className="flex gap-x-2 gap-y-1 text-xs flex-wrap">
                      {AVAILABLE_ZONES[0].cities.map((zone, i) => (
                        <li
                          className="flex items-center gap-0.5 bg-green-600 text-white py-0.5 font-bold px-2 rounded-md"
                          key={i}
                        >
                          <MapPin size={10} color="white" />
                          {zone}
                        </li>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-8 sm:divide-y divide-indigo-300/50 bg-linear-to-r from-primary/10 to-secondary/10 rounded-lg">
                  <div className="text-center sm:pb-5">
                    <div className="font-bold">{plan.name} plan</div>
                    <div className="flex items-center justify-center">
                      <div className="text-2xl font-bold">
                        {formatPrice(plan.price)}/
                      </div>
                      <div className="text-sm">monthly</div>
                    </div>
                  </div>
                  <div className="text-sm w-fit mx-auto pt-5 hidden sm:block">
                    {plan.features.map((item, i) => (
                      <div className="flex items-center gap-2" key={i}>
                        <CheckCircle2 size={14} />
                        <div className="">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-3 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div className="space-y-2 border px-1 pt-6 pb-1 border-gray-200 rounded-lg relative">
                    <div className="absolute -top-3 left-2 px-1.5 font-bold bg-white text-sm">
                      Contact:
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <InputField
                        name="first_name"
                        placeholder="First name"
                        // label="First name"
                      />
                      <InputField name="last_name" placeholder="Last name" />
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <InputField
                        name="whatsapp_phone"
                        placeholder="WhatsApp Phone No."
                      />
                      {/* <PhoneInputWithCountry
                        name="whatsapp_phone"
                        placeholder="WhatsApp Phone No."
                        label="WhatsApp Number"
                        required
                        defaultCountry="234"
                      /> */}
                      <InputField name="phone" placeholder="Phone No." />
                    </div>
                    <InputField name="email" placeholder="Email Address" />
                  </div>
                  <div className="space-y-2 border px-1 pt-6 pb-1 border-gray-200 rounded-lg relative">
                    <div className="absolute -top-3 left-2 px-1.5 font-bold bg-white text-sm">
                      Address:
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <Select
                        options={states}
                        name="state"
                        placeholder="Select State"
                      />
                      <Select
                        options={cities}
                        name="city"
                        placeholder="Select City"
                      />
                      {/* <InputField name="city" placeholder="Ikotun, Egbeda" /> */}
                    </div>
                    <InputField name="address" placeholder="Street" />
                  </div>
                </div>
                <div className="sticky bottom-0 bg-white pt-2 space-y-1">
                  <Button
                    type="submit"
                    label={`Book Free Pickup`}
                    disabled={!isValid || loading}
                    isLoading={loading}
                    loadingLabel="Sending request"
                    className="bg-linear-to-r from-secondary to-primary text-white rounded-xl"
                  />
                  <Button
                    link="https://wa.me/2348163245032"
                    type="link"
                    disabled={!isValid}
                    label="Book on WhatsApp"
                    className="hidden bg-linear-to-r from-green-500 to-secondary text-white rounded-xl"
                    icon={
                      <div className="relative h-5 w-5">
                        <Image src={`/icons/whatsapp-app.svg`} alt="" fill />
                      </div>
                    }
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default JoinPlanModal;
