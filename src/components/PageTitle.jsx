function PageTitle({ title = "", subTitle = "" }) {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl font-light text-white">Analytics Page</h1>
      <p className="mt-2 text-sm text-gray-500">Check activity on your pages</p>
    </div>
  );
}

export default PageTitle;
