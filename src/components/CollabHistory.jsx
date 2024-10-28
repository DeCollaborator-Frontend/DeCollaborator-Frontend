import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import styles from "./CollabHistory.module.css";
import Button from "./Button";
import ButtonMenu from "./ButtonMenu";
import Badge from "./Badge";

function CollabHistory() {
  return (
    <>
      <h2 className="mb-4 text-lg font-bold">Collab history</h2>

      {/* Large screens */}
      <div className="bg-neutral-800 rounded-md">
        <Table className={`hidden lg:block ${styles.table}`}>
          <TableHeader>
            <TableRow className="h-10 border-neutral-700 py-10 text-lg">
              <TableHead className="h-16 whitespace-nowrap font-bold">
                From
              </TableHead>
              <TableHead className="h-16 whitespace-nowrap font-bold">
                To
              </TableHead>
              <TableHead className="h-16 whitespace-nowrap font-bold">
                Sender
              </TableHead>
              <TableHead className="h-16 whitespace-nowrap font-bold">
                Receiver
              </TableHead>
              <TableHead className="h-16 whitespace-nowrap font-bold">
                Collab Title
              </TableHead>
              <TableHead className="h-16 whitespace-nowrap font-bold">
                Collab Type
              </TableHead>
              <TableHead className="h-16 whitespace-nowrap font-bold">
                Status
              </TableHead>
              <TableHead className="h-16 whitespace-nowrap font-bold">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 3 }, (_, i) => (
              <TableRow
                key={i}
                className={`mx-4 border-b-0 border-neutral-600 ${styles.tr}`}
              >
                <TableCell className={styles.td}>
                  <Button
                    variant="outline"
                    className="border-2 border-green-400 text-sm text-neutral-400"
                    text="8bitguys"
                  />
                </TableCell>
                <TableCell className={styles.td}>
                  <Button
                    variant="outline"
                    className="border-2 border-cyan-400 text-sm text-neutral-400"
                    text="8bitguys"
                  />
                </TableCell>
                <TableCell className={styles.td}>Demitchy</TableCell>
                <TableCell className={styles.td}>Hovers</TableCell>
                <TableCell className={styles.td}>Web3 empo...</TableCell>
                <TableCell className={styles.td}>Sponsorship</TableCell>
                <TableCell className={styles.td}>Completed</TableCell>
                <TableCell className={styles.td}>1/30/2023</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Mobile screens */}
      <div className="space-y-3 rounded-lg bg-neutral-800 px-3 py-8 lg:hidden">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            className="flex justify-between rounded-lg border border-neutral-600 px-6 py-4"
            key={i}
          >
            <div className="space-y-2 text-neutral-300">
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-3 rounded-xl bg-[#463e23] p-2 font-semibold leading-4 text-yellow-500">
                  <span>Okay bears</span>
                  <span className="aspect-square w-5 rounded-full bg-yellow-400"></span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-[#463e23] p-2 font-semibold leading-4 text-yellow-500">
                  <span>8bitguy</span>
                  <span className="aspect-square w-5 rounded-full bg-yellow-400"></span>
                </div>
              </div>
              <div>
                <span>Sender:</span> <span>Demitchy</span>
              </div>
              <div>
                <span>Receiver:</span> <span>Havers</span>
              </div>
              <div>
                <span>Collab Title:</span> <span>Web3 empowerment</span>
              </div>
              <div>
                <span>Collab Type:</span> <span>Sponsorship</span>
              </div>
              <div>
                <span>Status:</span> <span>Completed</span>
              </div>
              <div>
                <span>Date:</span> <span>1/30/2023</span>
              </div>
            </div>
            <ButtonMenu />
          </div>
        ))}
      </div>

      {/* All screens */}
      <div className="mt-5 flex w-full flex-col gap-5 lg:flex-row">
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
    </>
  );
}

export default CollabHistory;
