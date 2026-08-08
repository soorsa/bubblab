"use client";

import InputField from "@/components/form/InputField";
import Button from "@/components/global/Button";
import { PLANS } from "@/data/constants";
// import { usePaystackPayment } from "@/hooks/payment/usePaystack";
import { formatPrice } from "@/utils/format.utils";
import { Form, Formik } from "formik";
import { CheckCircle2 } from "lucide-react";
import React from "react";
import * as Yup from "yup";
interface Prop {
  plan: (typeof PLANS)[0];
}
const JoinPlanModal: React.FC<Prop> = ({ plan }) => {
  // const paystack = usePaystackPayment();
  const initialValues = {
    email: "",
    address: "",
    phone: "",
    first_name: "",
    last_name: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    phone: Yup.mixed().required(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    address: Yup.string().required(),
  });
  const submit = (values: typeof initialValues) => {
    // paystack({
    //   email: values.email,
    //   lastName: values.last_name,
    //   firstName: values.first_name,
    //   phoneNumber: values.phone,
    //   amount: plan.price,
    //   reference: "",
    //   onSuccess: () => {},
    //   onClose: () => {},
    // });
  };
  return (
    <div className="p-2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount
        onSubmit={submit}
      >
        {({ isValid }) => (
          <Form className="grid sm:grid-cols-2 gap-2 ">
            <div className="p-8 divide-y divide-indigo-300/50 bg-linear-to-r from-primary/10 to-secondary/10 rounded-lg">
              <div className="text-center pb-5">
                <div className="font-bold">{plan.name} plan</div>
                <div className="flex items-center justify-center">
                  <div className="text-2xl font-bold">
                    {formatPrice(plan.price)}/
                  </div>
                  <div className="text-sm">monthly</div>
                </div>
              </div>
              <div className="text-sm w-fit mx-auto pt-5">
                {plan.features.map((item, i) => (
                  <div className="flex items-center gap-2" key={i}>
                    <CheckCircle2 size={14} />
                    <div className="">{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3 flex flex-col">
              <div className="space-y-2 flex-1">
                <div className="grid grid-cols-2 gap-1">
                  <InputField
                    name="first_name"
                    placeholder="First name"
                    // label="First name"
                  />
                  <InputField name="last_name" placeholder="Last name" />
                </div>
                <InputField name="email" placeholder="Email" />
                <InputField name="phone" placeholder="Phone No." />
                <InputField name="address" placeholder="Address" />
              </div>
              <div className="">
                <Button
                  type="submit"
                  label={`Subscribe`}
                  disabled={!isValid}
                  className="bg-linear-to-r from-secondary to-primary text-white"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JoinPlanModal;
