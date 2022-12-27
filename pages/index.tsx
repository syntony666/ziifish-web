import { Inter } from '@next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Image from 'next/image';
import TopNavBar from '../component/top-navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

class IntroObj {
  private _description: JSX.Element;
  private _avatar: string;
  private _logo: string;
  private _twitter: string | null;
  private _twitch: string | null;
  private _youtube: string | null;
  private _shop: string;

  constructor(
    description: JSX.Element,
    avatar: string,
    logo: string,
    twitch: string | null,
    twitter: string | null,
    youtube: string | null,
    shop: string
  ) {
    this._description = description;
    this._avatar = avatar;
    this._logo = logo;
    this._twitch = twitch;
    this._twitter = twitter;
    this._youtube = youtube;
    this._shop = shop;
  }

  public get description(): JSX.Element {
    return this._description;
  }
  public get avatar(): string {
    return this._avatar;
  }
  public get logo(): string {
    return this._logo;
  }
  public get twitch(): string | null {
    return this._twitch;
  }
  public get twitter(): string | null {
    return this._twitter;
  }
  public get youtube(): string | null {
    return this._youtube;
  }
  public get shop(): string {
    return this._shop;
  }
}

export default function Home() {
  const title = '姊妹小舖';
  const introList = [
    new IntroObj(
      (
        <>
          HI~我是個人勢Vtuber,沒有任何公司經紀約
          <br />
          英文叫ziifish,中文:仔(ㄗˇ )魚 ,
        </>
      ),
      '/intro/ziifish-avatar.webp',
      '/intro/ziifish-logo.webp',
      'https://www.twitch.tv/ziifish',
      'https://twitter.com/linziifish',
      'https://www.youtube.com/@ziifish',
      '/shop/ziifish'
    ),
    new IntroObj(
      (
        <>
          大家好 我是若娜，也可以叫我娜娜!!
          <br />
          主要還是以TWITCH實況直播為主
        </>
      ),
      '/intro/zona-avatar.webp',
      '/intro/zona-logo.webp',
      'https://www.twitch.tv/zona181227',
      'https://twitter.com/ZonaHart13',
      'https://www.youtube.com/@zona7212',
      '/shop/zona'
    ),
    new IntroObj(
      <>團戰0貢獻 輸出全靠鞭 CS很強的台 但不會開CS 可以叫我海鹽</>,
      '/intro/doodoo-avatar.webp',
      '/intro/doodoo-logo.webp',
      'https://www.twitch.tv/doodooqvvq',
      '',
      '',
      '/shop/doodoo'
    ),
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      {introList.map((intro) => (
        <div className="card my-3 bg-light">
          <div className="row g-0 bg-transparent">
            <div className="col-sm-3">
              <Image
                className="card-image-top img-thumbnail border-0 bg-light"
                src={intro.avatar}
                width={300}
                height={300}
                alt=""
              />
            </div>
            <div className="col-lg-7 py-2 ps-3 border-start">
              <div className="row h-25">
                <div className="col-lg-3">
                  <Image src={intro.logo} height={100} width={180} alt="" />
                </div>
                <div className="col-lg-5 d-flex align-items-end">
                  {intro.twitch && (
                    <Link href={intro.twitch}>
                      <Image className="mx-2" src="/twitch.svg" height={50} width={50} alt="" />
                    </Link>
                  )}
                  {intro.twitter && (
                    <Link href={intro.twitter}>
                      <Image className="mx-2" src="/twitter.svg" height={50} width={50} alt="" />
                    </Link>
                  )}
                  {intro.youtube && (
                    <Link href={intro.youtube}>
                      <Image className="mx-2" src="/youtube.svg" height={50} width={50} alt="" />
                    </Link>
                  )}
                </div>
              </div>
              <h3 className="h-75 lh-base d-flex align-items-center">{intro.description}</h3>
            </div>
            <div className="col-sm-2 mb-3 pe-3 d-flex align-items-end justify-content-end">
              <Link href={intro.shop}>
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
