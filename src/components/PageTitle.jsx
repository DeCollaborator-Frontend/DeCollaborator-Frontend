function PageTitle({ title = "", subTitle = "", children, className }) {
  return (
    <div className={`py-12 text-center ${className}`}>
      {title && <h1 className="text-4xl font-bold text-white">{title}</h1>}
      {subTitle && <p className="mt-2 text-neutral-500">{subTitle}</p>}

      {!title && !subTitle && children}
    </div>
  );
}

export default PageTitle;
