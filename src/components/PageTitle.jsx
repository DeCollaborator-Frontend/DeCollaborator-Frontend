function PageTitle({ title = "", subTitle = "", children }) {
  return (
    <div className="mb-12 text-center">
      {title && <h1 className="text-4xl font-light text-white">{title}</h1>}
      {subTitle && <p className="mt-2 text-sm text-gray-500">{subTitle}</p>}

      {!title && !subTitle && children}
    </div>
  );
}

export default PageTitle;
