import { Inter } from '@next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import TopNavBar from '../component/top-navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

class IntroObj {
  private _description: JSX.Element;
  private _avatar: string;
  private _logo: string;
  private _twitter: string;
  private _twitch: string;
  private _youtube: string;
  private _shop: string;

  constructor(
    description: JSX.Element,
    avatar: string,
    logo: string,
    twitch: string,
    twitter: string,
    youtube: string,
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
  public get twitch(): string {
    return this._twitch;
  }
  public get twitter(): string {
    return this._twitter;
  }
  public get youtube(): string {
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
          英文叫ziifish，中文：仔(ㄗˇ )魚 ,
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
        <div className="card my-3">
          <div className="row g-0 bg-transparent">
            <div className="col-sm-3">
              <img
                className="card-image-top img-thumbnail border-0"
                src={intro.avatar}
                width={300}
                height={300}
                alt=""
              />
            </div>
            <div className="col-sm-7 py-1">
              <div className="h-25">
                <img src={intro.logo} height={100} width={180} alt="" />
                <Link href={intro.twitch}>
                  <img className="ms-4 mx-2 align-bottom" src="/twitch.svg" height={50} width={50} alt="" />
                </Link>
                <Link href={intro.twitter}>
                  <img className="mx-2 align-bottom" src="/twitter.svg" height={50} width={50} alt="" />
                </Link>
                <Link href={intro.youtube}>
                  <img className="mx-2 align-bottom" src="/youtube.svg" height={50} width={50} alt="" />
                </Link>
              </div>
              <h3 className="h-75 lh-base d-flex align-items-center">{intro.description}</h3>
            </div>
            <div className="col-sm-2 mb-3 pe-3 d-flex align-items-end align-items-end justify-content-end">
              <button type="button" className="btn btn-lg btn-success">
                <i className="bi bi-bag-fill" /> 周邊商品
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
