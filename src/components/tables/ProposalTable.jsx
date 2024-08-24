import propsosaldata from "../../data/dummyData/proposalsdata.json";

const ProposalTable = () => {
  return (
    <>
      <table className="mt-10 w-full">
        <thead className="text-[14px] font-bold">
          <tr>
            <td className="px-6 py-3">From</td>
            <td className="px-6 py-3">To</td>
            <td className="px-6 py-3">Sender</td>
            <td className="px-6 py-3">Receiver</td>
            <td className="px-6 py-3">Collab Title</td>
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
          className={`mx-auto w-[120px] rounded-md border-2 p-2 ${category} text-center`}
        >
          {to}
        </p>
      </td>
      <td className="px-5 py-3">
        <p
          className={`mx-auto w-[120px] rounded-md border-2 p-2 ${category} text-center`}
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

export const MobileProposalsData = (props) => {
  const { to, from, sender, receiver, type, status, category, date, title } =
    props;
  return (
    <>
      <div className="relative w-fit rounded-xl border border-[gray] px-6 py-3">
        <div className="absolute right-3 top-4">
          <svg
            width="4"
            height="18"
            viewBox="0 0 4 18"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4C2.39556 4 2.78224 3.8827 3.11114 3.66294C3.44004 3.44318 3.69639 3.13082 3.84776 2.76537C3.99914 2.39992 4.03874 1.99778 3.96157 1.60982C3.8844 1.22186 3.69392 0.865492 3.41421 0.585787C3.13451 0.306082 2.77814 0.115601 2.39018 0.0384303C2.00222 -0.0387401 1.60009 0.000866562 1.23463 0.152242C0.869182 0.303617 0.556825 0.559962 0.337062 0.88886C0.117299 1.21776 1.07779e-06 1.60444 1.07779e-06 2C1.07779e-06 2.53043 0.210715 3.03914 0.585788 3.41421C0.960861 3.78929 1.46957 4 2 4ZM2 14C1.60444 14 1.21776 14.1173 0.888861 14.3371C0.559963 14.5568 0.303617 14.8692 0.152242 15.2346C0.000866562 15.6001 -0.0387401 16.0022 0.0384303 16.3902C0.115601 16.7781 0.306083 17.1345 0.585788 17.4142C0.865493 17.6939 1.22186 17.8844 1.60982 17.9616C1.99778 18.0387 2.39992 17.9991 2.76537 17.8478C3.13082 17.6964 3.44318 17.44 3.66294 17.1111C3.8827 16.7822 4 16.3956 4 16C4 15.4696 3.78929 14.9609 3.41421 14.5858C3.03914 14.2107 2.53043 14 2 14ZM2 7C1.60444 7 1.21776 7.1173 0.888861 7.33706C0.559963 7.55682 0.303617 7.86918 0.152242 8.23463C0.000866562 8.60009 -0.0387401 9.00222 0.0384303 9.39018C0.115601 9.77814 0.306083 10.1345 0.585788 10.4142C0.865493 10.6939 1.22186 10.8844 1.60982 10.9616C1.99778 11.0387 2.39992 10.9991 2.76537 10.8478C3.13082 10.6964 3.44318 10.44 3.66294 10.1111C3.8827 9.78224 4 9.39556 4 9C4 8.46957 3.78929 7.96086 3.41421 7.58579C3.03914 7.21071 2.53043 7 2 7Z"
              fill="gray"
            />
          </svg>
        </div>

        <div className="flex">
          <p className={`w-[120px] rounded-md p-1 b-${category} text-center`}>
            {to}
          </p>
          <p
            className={`mx-2 w-[120px] rounded-md p-1 b-${category} text-center`}
          >
            {from}
          </p>
        </div>
        <p>Sender: {sender}</p>
        <p>Receiver: {receiver}</p>
        <p>
          Collab Title:{" "}
          {title.length > 14 ? `${title.substring(0, 13)}...` : title}
        </p>
        <p>Collab Type: {type}</p>
        <p>Status: {status}</p>
        <p>Date: {date}</p>
      </div>
    </>
  );
};

export const MobileProposalsCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 place-items-center gap-4">
        {propsosaldata.proposals.map((proposal, id) => {
          return <MobileProposalsData key={id} {...proposal} />;
        })}
      </div>
    </div>
  );
};

export default ProposalTable;
