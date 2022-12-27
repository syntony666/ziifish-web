import { Head } from 'next/document';
import Image from 'next/image';
import Link from 'next/link';

const PageTitle = () => {
  return (
    <>
      <div className="row py-3">
        <div className="text-center img-responsive pull-right">
          <Link href="/">
            <Image src="/logo.webp" width="300" height="120" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
