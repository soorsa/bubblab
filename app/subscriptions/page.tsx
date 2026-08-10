import SubscriptionPlans from "@/components/landing/SubscriptionPlans";
import Image from "next/image";

const page = () => {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 items-center">
        <div className="space-y-2 px-4 pt-4">
          <div className="">
            <div className="text-3xl font-bold ">
              Tired of spending your weekends{" "}
              <b className="bg-clip-text bg-linear-to-r from-primary to-indigo-600 text-transparent">
                washing
              </b>{" "}
              and{" "}
              <b className="bg-clip-text bg-linear-to-r from-primary to-secondary text-transparent">
                ironing
              </b>{" "}
              clothes?
            </div>
          </div>
          <div className="">
            For just ₦35,000/month, Bubblab picks up your dirty clothes every
            week, professionally washes and irons them, then delivers them back
            to your doorstep.
          </div>
        </div>

        <div className="w-full h-80 relative">
          <Image
            src={`/icons/laundry-and-dry cleaning-pana.svg`}
            fill
            alt="Laundry"
            className=""
          />
        </div>
      </div>
      <SubscriptionPlans />
    </div>
  );
};

export default page;
