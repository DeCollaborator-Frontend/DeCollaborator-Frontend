import propsosaldata from "../../data/dummyData/proposalsdata.json";

const ProposalTable = () => {
  return (
    <>
      <table className="w-full mt-10">
        <thead className="text-lg font-normal">
          <tr>
            <td className="px-6 py-3">From</td>
            <td className="px-6 py-3">To</td>
            <td className="px-6 py-3">Sender</td>
            <td className="px-6 py-3">Receiver</td>
            <td className="px-6 py-3">Collab Tiitle</td>
            <td className="px-6 py-3">Collab Type</td>
            <td className="px-6 py-3">Status</td>
            <td className="px-6 py-3">Date</td>
          </tr>
        </thead>
        <tbody className="text-base">
          {propsosaldata.proposals.map((proposal, id) => {
            return <ProposalTableData key={id} {...proposal} />;
          })}
        </tbody>
      </table>
    </>
  );
};

const ProposalTableData = (props) => {
  const { to, from, sender, receiver, type, status, category, date, title } =
    props;
  return (
    <tr className="border-b-2 border-[#484849]">
      <td className="px-5 py-3">
        <p
          className={`border-2 rounded-md p-2 w-[120px] mx-auto ${category} text-center`}
        >
          {to}
        </p>
      </td>
      <td className="px-5 py-3">
        <p
          className={`border-2 rounded-md p-2 w-[120px] mx-auto ${category} text-center`}
        >
          {from}
        </p>
      </td>
      <td className="px-5 py-3">{sender}</td>
      <td className="px-5 py-3">{receiver}</td>
      <td className="px-5 py-3">
        {title.length > 14 ? `${title.substring(0, 13)}...` : title}
      </td>
      <td className="px-5 py-3">{type}</td>
      <td className="px-5 py-3">{status}</td>
      <td className="px-5 py-3">{date}</td>
    </tr>
  );
};

export default ProposalTable;
