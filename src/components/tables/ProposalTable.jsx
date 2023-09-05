import propsosaldata from "../../data/dummyData/proposalsdata.json";

const ProposalTable = () => {
  return (
    <>
      <table className="w-full text-center mt-10">
        <thead className="text-2xl font-normal">
          <tr>
            <td className="px-6 py-3">From</td>
            <td className="px-6 py-3">To</td>
            <td className="px-6 py-3">Sender</td>
            <td className="px-6 py-3">Receiver</td>
            <td className="px-6 py-3">Collab Type</td>
            <td className="px-6 py-3">Status</td>
          </tr>
        </thead>
        <tbody className="text-xl">
          {propsosaldata.proposals.map((proposal, id) => {
            return <ProposalTableData key={id} {...proposal} />;
          })}
        </tbody>
      </table>
    </>
  );
};

const ProposalTableData = (props) => {
  const { to, from, sender, receiver, type, status, category } = props;
  return (
    <tr className="border-b-2 border-[#484849]">
      <td className="px-5 py-3">
        <p className={`border-2 rounded-md p-2 w-[180px] mx-auto ${category}`}>
          {to}
        </p>
      </td>
      <td className="px-5 py-3">
        <p className={`border-2 rounded-md p-2 w-[180px] mx-auto ${category}`}>
          {from}
        </p>
      </td>
      <td className="px-5 py-3">{sender}</td>
      <td className="px-5 py-3">{receiver}</td>
      <td className="px-5 py-3">{type}</td>
      <td className="px-5 py-3">{category}</td>
    </tr>
  );
};

export default ProposalTable;
