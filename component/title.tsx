import Image from 'next/image';
import Link from 'next/link';

const PageTitle = () => {
  return (
    <>
      <div className="row py-3">
        <Link className="text-center img-responsive pull-right" href="/">
          <Image src="/logo.webp" width="300" height="120" alt="" />
        </Link>
      </div>
    </>
  );
};

export default PageTitle;
