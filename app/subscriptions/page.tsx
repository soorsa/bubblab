import SubscriptionPlans from "@/components/landing/SubscriptionPlans";
import SubscriptionSteps from "@/components/landing/SubscriptionSteps";
import { Info } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 items-center">
        <div className="space-y-2 px-4 pt-4">
          <div className="">
            <div className="text-3xl font-bold capitalize">
              Select your preferred plan below to{" "}
              <b className="bg-clip-text bg-linear-to-r from-indigo-600 to-primary text-transparent">
                book
              </b>{" "}
              a{" "}
              <b className="bg-clip-text bg-linear-to-r from-primary to-secondary text-transparent">
                Free Pickup
              </b>{" "}
              now
            </div>
          </div>
          <div className="">
            Bubblab picks up your dirty clothes <b>every week</b>,
            professionally washes and irons them, then delivers them back to
            your doorstep.
          </div>
          <div className="flex gap-3 bg-primary/10 border border-primary/30 rounded-xl p-2">
            <Info size={28} />
            <div className="flex-1 space-y-0.5">
              <p className="font-bold">No upfront payment on this website.</p>
              <p className="text-sm">
                You are only to pay when our rider arrives at your address to
                pick up your clothes.
              </p>
            </div>
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
      <SubscriptionSteps />
      <SubscriptionPlans />
    </div>
  );
};

export default page;
