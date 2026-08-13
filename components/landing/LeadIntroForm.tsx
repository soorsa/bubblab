import InputField from "@/components/form/InputField";
import Select from "@/components/form/Select";
import { initialValues } from "@/components/landing/LeadForm";
import { AVAILABLE_ZONES, PLANS } from "@/data/constants";
import { CheckCircle2, Info, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";
interface Prop {
  states: { value: string | number; label: string }[];
  cities: { value: string | number; label: string }[];
  values: typeof initialValues;
}
const LeadIntroForm: React.FC<Prop> = ({ states, cities, values }) => {
  const plan_options = PLANS.map((plan) => ({
    label: `${plan.name} Plan`,
    value: plan.name,
  }));
  const plan = PLANS.find((i) => i.name === values.plan);
  return (
    <div>
      <div className="relative min-h-[70vh] grid bg-white/50 rounded-lg mt-2">
        <Image
          src={`/icons/laundry-and-dry cleaning-pana.svg`}
          fill
          alt="Laundry"
          className="absolute inset-0 z-0 opacity-10"
        />

        <div className="space-y-6 p-4 relative z-10 h-full w-full ">
          <div className="space-y-2">
            {plan ? (
              <div
                className={`cursor-pointer flex flex-col p-6 rounded-3xl relative bg-primary/10`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-4 py-1 rounded-full flex items-center gap-1">
                    <Sparkles fill="white" size={13} />
                    <span>most popular</span>
                  </span>
                )}
                <div className="text-center w-fit mx-auto">
                  <h3 className="text-3xl font-bold mt-3 text-gray-800">
                    {plan.name} Plan
                  </h3>
                  <div className="text-xs text-gray-600">
                    {plan.description}
                  </div>
                </div>
                <ul className="mt-2 flex-1 space-y-2 text-sm text-gray-600 w-fit mx-auto border-t border-primary/40 pt-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 size={16} /> <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <div className="">
                  <div className="text-3xl font-bold capitalize">
                    Book a free pickup now{" "}
                  </div>
                </div>
                <div className="">
                  Bubblab picks up your dirty clothes <b>every week</b>,
                  professionally washes and irons them, then delivers them back
                  to your doorstep.
                </div>
                {/* <div className="flex gap-3 bg-primary/10 border border-primary/30 rounded-xl p-2">
            <Info size={28} />
            <div className="flex-1 space-y-0.5">
              <p className="font-bold">No upfront payment on this website.</p>
              <p className="text-sm">
                You are only to pay when our rider arrives at your address to
                pick up your clothes.
              </p>
            </div>
          </div> */}
                <div className="flex gap-3 bg-primary/10 border border-primary/30 rounded-xl p-2">
                  <Info size={20} />
                  <div className="flex-1 space-y-1 font-semibold">
                    <div className="text-base sm:text-sm">
                      Serving these{" "}
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
              </>
            )}
          </div>

          <div className="space-y-4">
            <InputField
              name="fullname"
              placeholder="Fullname"
              label="What's Your Fullname?"
            />

            <InputField
              name="whatsapp_phone"
              placeholder="WhatsApp Phone No."
              label="Your WhatsApp / Phone number:"
            />
            <div className=" ">
              <div className="font-semibold text-base mb-1">
                Address & Pickup Location:
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
                <div className="col-span-2">
                  <InputField name="address" placeholder="Street" />
                </div>
              </div>
            </div>

            <Select
              name="plan"
              label="Which Plan do You Like?"
              //   placeholder="Select"
              options={plan_options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadIntroForm;
