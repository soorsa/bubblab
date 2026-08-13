"use client";
import Button from "@/components/global/Button";
import LeadIntroForm from "@/components/landing/LeadIntroForm";
import { AVAILABLE_ZONES } from "@/data/constants";
import { useSendLeadToMail } from "@/hooks/leads/useSendLeads";
import { Form, Formik } from "formik";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import * as Yup from "yup";

export const initialValues = {
  fullname: "",
  whatsapp_phone: "",
  state: "Lagos",
  city: "",
  address: "",
  plan: "",
};
const LeadForm = () => {
  const [loading, setloading] = useState(false);
  const validationSchema = Yup.object().shape({
    whatsapp_phone: Yup.mixed().required("required"),
    fullname: Yup.string().required("required"),
    address: Yup.string().required("required"),
    state: Yup.string().required("required"),
    city: Yup.string().required("required"),
  });
  const states = AVAILABLE_ZONES.map((state) => ({
    value: state.state,
    label: state.state,
  }));
  const sendLead = useSendLeadToMail();

  const submit = (values: typeof initialValues) => {
    sendLead({
      values: values,
      setIsLoading: (isLoading) => setloading(isLoading),
    });
  };
  return (
    <div>
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
            <Form>
              <div className="">
                <LeadIntroForm
                  values={values}
                  states={states}
                  cities={cities}
                />
              </div>
              {isValid && (
                <div className="px-4">
                  <Button
                    label="Done"
                    disabled={!isValid || loading}
                    isLoading={loading}
                    loadingLabel="Processing"
                    type="submit"
                    className="font-bold! text-lg bg-primary! text-white rounded-lg"
                    rightIcon={<ArrowRight />}
                  />
                </div>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LeadForm;
