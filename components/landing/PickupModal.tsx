"use client";

import DateInput from "@/components/form/DateInput";
import InputField from "@/components/form/InputField";
import Button from "@/components/global/Button";
import { Form, Formik } from "formik";

const PickupModal = () => {
  const initialValues = {
    pickup_date: "",
    email: "",
    phone_number: "",
    first_name: "",
    last_name: "",
  };
  const submit = () => {};
  return (
    <div className="p-2">
      <Formik initialValues={initialValues} validateOnMount onSubmit={submit}>
        {() => (
          <Form>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-1">
                <InputField name="first_name" label="First name" />
                <InputField name="first_name" label="Last name" />
              </div>
              <InputField name="email" label="Email" />
              <InputField name="phone_number" label="Phone No." />
              <DateInput name="pickup_date" label="Pickup date" />
            </div>
            <div className="">
              <Button
                type="submit"
                label="Submit"
                className="border text-primary hover:bg-primary border-primary hover:text-white"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PickupModal;
