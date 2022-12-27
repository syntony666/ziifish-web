import Link from 'next/link';
import { introData } from '../data/intro.data';
import Image from 'next/image';

export default function Introduce() {
  const introList = introData;
  return (
    <>
      {introList.map((intro) => (
        <div className="card my-3" style={{ backgroundColor: '#95adc7' }}>
          <div className="row g-0 bg-transparent">
            <div className="col-lg-3">
              <Image
                className="card-image-top img-thumbnail border-0 bg-transparent"
                src={`/intro/${intro.id}-avatar.webp`}
                width={300}
                height={300}
                alt=""
              />
            </div>
            <div className="col-lg-7 py-2 border-start border-secondary">
              <div className="row">
                <div className="col-sm-auto ms-3">
                  <Image src={`/intro/${intro.id}-logo.webp`} height={100} width={180} alt="" />
                </div>
                <div className="col-sm-8 mt-3 d-flex align-items-end">
                  {intro.twitchUrl && (
                    <Link href={intro.twitchUrl}>
                      <Image className="mx-2 img-fluid" src="/sns-icon/twitch.svg" height={50} width={50} alt="" />
                    </Link>
                  )}
                  {intro.twitterUrl && (
                    <Link href={intro.twitterUrl}>
                      <Image className="mx-2 img-fluid" src="/sns-icon/twitter.svg" height={50} width={50} alt="" />
                    </Link>
                  )}
                  {intro.youtubeUrl && (
                    <Link href={intro.youtubeUrl}>
                      <Image className="mx-2 img-fluid" src="/sns-icon/youtube.svg" height={50} width={50} alt="" />
                    </Link>
                  )}
                  {intro.facebookUrl && (
                    <Link href={intro.facebookUrl}>
                      <Image className="mx-2 img-fluid" src="/sns-icon/facebook.svg" height={50} width={50} alt="" />
                    </Link>
                  )}
                  {intro.instagramUrl && (
                    <Link href={intro.instagramUrl}>
                      <Image className="mx-2" src="/sns-icon/instagram.svg" height={50} width={50} alt="" />
                    </Link>
                  )}
                </div>
              </div>
              <h3 className="row mx-2 mt-3 lh-base">{intro.description}</h3>
            </div>
            <div className="col-lg-2 mb-3 pe-3 d-flex align-items-end justify-content-end">
              <Link href={`/shop/${intro.id}`}>
                <button type="button" className="btn btn-lg btn-success">
                  <i className="bi bi-bag-fill" /> 周邊商品
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
