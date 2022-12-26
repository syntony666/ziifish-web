const PageTitle = () => {
  const title = 'Laiko Studio';
  return (
    <>
      <div className="row py-3">
        <div className="col text-center text-reset text-decoration-none display-5">
          <a className="px-3 img-responsive pull-right" href="/">
            <img src="/logo.webp" width="300" height="120" alt="" />
          </a>
          {/* {title} */}
        </div>
      </div>
    </>
  );
};

export default PageTitle;
