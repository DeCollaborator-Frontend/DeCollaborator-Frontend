import Button from "@/components/Button";
import PageTitle from "@/components/PageTitle";

import EntityAboutSummary from "@/components/EntityAboutSummary";
import CollabHistory from "@/components/CollabHistory";

const data = [
  {
    entity: "team",
    parentBrand: "Decollaborators",
    createdAt: new Date(),
    permissions: [
      "Send messages",
      "Send collab proposals",
      "Receive collab proposals",
      "Edit collab settings",
      "Manage collab opportunities",
      "Manage products and services",
      "Manage team chats",
      "View all brand teams",
      "Manage all brand teams",
    ],
  },
  {
    entity: "collab",
    title: "Web3 product application",
    type: "Partnership",
    createdAt: new Date(),
    collaborators: [
      { title: "8bitzguys", profileImage: "" },
      { title: "Okay bears", profileImage: "" },
      { title: "Coca cola", profileImage: "" },
    ],
    status: "ongoing", // ongoing, rejected, completed, delivered
  },
];

function CollabDetails() {
  // {
  //   // collab: {
  //   //   title = "",
  //   //   type = "",
  //   //   initiatedAt = "",
  //   //   collaborators = "",
  //   //   status = "",
  //   //   description = "",
  //   //   agreement = "",
  //   // },
  // },
  return (
    <>
      <div className="container-custom pb-10">
        <PageTitle
          title="Collab Proposal details"
          subTitle="Please checkout collab proposal details"
        />
        <div className="space-y-10 rounded-3xl border-neutral-700 border-opacity-60 lg:border-[4px] lg:p-8">
          <div className="">
            <h2 className="mb-4 text-lg font-bold">Collab details</h2>
            <EntityAboutSummary />
            <div className="lg:grid-cols-0 mt-8 grid w-full grid-cols-2 justify-center gap-8 lg:flex">
              <Button
                variant="fill"
                text="Accept Proposal"
                className="lg:col-span-0 col-span-2"
              />
              <Button
                variant="outline"
                className="px-3 md:px-[1.65em]"
                text={
                  <>
                    <span className="md:hidden">
                      {"Review Agreement".slice(0, 10)}
                      {"Review Agreement".length > 10 && "..."}
                    </span>
                    <span className="hidden md:block">Review Agreement</span>
                  </>
                }
              />
              <Button
                variant="outline"
                className="px-3 md:px-[1.65em]"
                text={
                  <>
                    <span className="md:hidden">Reject Pro...</span>
                    <span className="hidden md:block">Reject Proposal</span>
                  </>
                }
              />
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Collab description</h2>
            <div className="rounded-md bg-neutral-800 p-4 text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              odio sit sed, eaque ea, voluptatum quae iusto ipsum, culpa qui
              iste animi repellat? Ipsum laudantium qui, consequuntur nemo iusto
              expedita laboriosam odit quo velit neque. Officiis vitae laborum
              dolore, dolorem maxime totam ea tempore nesciunt quo asperiores
              nisi!
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Collab agreement</h2>
            <div className="relative grid place-items-center rounded-md bg-neutral-800 p-4 py-24 lg:py-20">
              <span className="absolute left-4 top-4 text-lg font-bold leading-6">
                Terms and conditions of the agreement
              </span>
              <span className="text-3xl font-bold">No agreement yet</span>
            </div>
          </div>
          <div>
            <CollabHistory />
          </div>
        </div>
      </div>
    </>
  );
}

export default CollabDetails;
