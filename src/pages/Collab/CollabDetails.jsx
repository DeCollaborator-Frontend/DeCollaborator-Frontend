import BrandProfileImgGroup from "@/components/BrandProfileImgGroup";
import Button from "@/components/Button";
import PageTitle from "@/components/PageTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <div className="space-y-10 rounded-3xl border-[4px] border-neutral-700 border-opacity-60 p-8">
          <div className="px-8">
            <h2 className="mb-4 text-lg font-bold">Collab details</h2>
            <div className="grid grid-cols-2 rounded-xl bg-neutral-800">
              <ul className="list-none p-0">
                <li className="grid grid-cols-4 items-start gap-10 rounded-tl-xl border-2 border-b-0 border-neutral-700 p-4">
                  <span className="col-span-1 font-light">Collab title:</span>
                  <span className="col-span-3 text-lg font-bold">
                    Web3 product application
                  </span>
                </li>
                <li className="grid grid-cols-4 items-start gap-10 border-2 border-b-0 border-neutral-700 p-4">
                  <span className="col-span-1 font-light">Collab type: </span>
                  <span className="col-span-3 text-lg font-bold">
                    Partnership
                  </span>
                </li>
                <li className="grid grid-cols-4 items-start gap-10 border-2 border-b-0 border-neutral-700 p-4">
                  <span className="col-span-1 font-light">
                    Date initiated:{" "}
                  </span>
                  <span className="col-span-3 text-lg font-bold">
                    29th August, 2023
                  </span>
                </li>
                <li className="grid grid-cols-4 items-start gap-10 border-2 border-b-0 border-neutral-700 p-4">
                  <span className="col-span-1 font-light">Collaborators: </span>
                  <div className="col-span-3 flex justify-between">
                    <div className="flex-1">
                      <div className="grid grid-cols-6">
                        <span className="col-span-1 mr-2">From</span>
                        <span className="col-span-5 text-lg font-bold">
                          8bitzguys
                        </span>
                      </div>
                      <div className="grid grid-cols-6">
                        <span className="col-span-1  mr-2">To</span>
                        <span className="col-span-5 text-lg font-bold">
                          Okay bears
                        </span>
                      </div>
                    </div>
                    <div className="p-4">Icon!</div>
                  </div>
                </li>
                <li className="grid grid-cols-4 items-start gap-10 rounded-bl-xl border-2 border-neutral-700 p-4">
                  <span className="col-span-1 font-light">Collaborators: </span>
                  <div className="col-span-3 flex justify-between">
                    <div className="flex-1">
                      <span className="text-lg font-bold text-yellow-400">
                        Delivered
                      </span>
                    </div>
                    <div className="p-4">Icon!</div>
                  </div>
                </li>
              </ul>
              <div className="grid place-items-center">
                <BrandProfileImgGroup />
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-8">
              <Button variant="fill" text="Accept Proposal" />
              <Button variant="outline" text="Review Agreement" />
              <Button variant="outline" text="Reject Proposal" />
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
            <div className="relative grid place-items-center rounded-md bg-neutral-800 p-4 py-20">
              <span className="absolute left-4 top-4 text-lg font-bold leading-none">
                Terms and conditions of the agreement
              </span>
              <span className="text-3xl font-bold">No agreement yet</span>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Collab history</h2>
            <div>
              <Table className="rounded-md bg-neutral-800">
                <TableHeader>
                  <TableRow className="border-neutral-600">
                    <TableHead className="">From</TableHead>
                    <TableHead className="">To</TableHead>
                    <TableHead className="">Sender</TableHead>
                    <TableHead className="">Receiver</TableHead>
                    <TableHead className="">Collab Title</TableHead>
                    <TableHead className="">Collab Type</TableHead>
                    <TableHead className="">Status</TableHead>
                    <TableHead className="">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-neutral-600">
                    <TableCell>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-neutral-400 text-sm text-neutral-400"
                        text="8bitguys"
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-neutral-400 text-sm text-neutral-400"
                        text="8bitguys"
                      />
                    </TableCell>

                    <TableCell>Demitchy</TableCell>
                    <TableCell>Hovers</TableCell>
                    <TableCell>Web3 empo...</TableCell>
                    <TableCell>Sponsorship</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell>1/30/2023</TableCell>
                  </TableRow>
                  <TableRow className="border-neutral-600">
                    <TableCell>
                      <Button
                        variant="outline"
                        className="w-full border-2 text-sm"
                        text="8bitguys"
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        className="w-full border-2 text-sm"
                        text="8bitguys"
                      />
                    </TableCell>
                    <TableCell>Demitchy</TableCell>
                    <TableCell>Hovers</TableCell>
                    <TableCell>Web3 empo...</TableCell>
                    <TableCell>Sponsorship</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell>1/30/2023</TableCell>
                  </TableRow>
                  <TableRow className="border-neutral-600">
                    <TableCell>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-green-700 text-sm text-green-700"
                        text="8bitguys"
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-green-700 text-sm text-green-700"
                        text="8bitguys"
                      />
                    </TableCell>
                    <TableCell>Demitchy</TableCell>
                    <TableCell>Hovers</TableCell>
                    <TableCell>Web3 empo...</TableCell>
                    <TableCell>Sponsorship</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell>1/30/2023</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-5 flex w-full gap-5">
                <div className="flex items-center">
                  <span className="mr-2 block aspect-square h-4 rounded-full bg-neutral-600"></span>
                  <span>Default</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 block aspect-square h-4 rounded-full bg-yellow-400"></span>
                  <span>New development</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 block aspect-square h-4 rounded-full bg-green-700"></span>
                  <span>Completed</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 block aspect-square h-4 rounded-full bg-red-500"></span>
                  <span>Proposal rejected</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 block aspect-square h-4 rounded-full bg-cyan-500"></span>
                  <span>Proposal accepted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollabDetails;
