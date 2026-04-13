import{ Info } from '../components/info';
import{ Main } from '../components/main';
import{ Contact } from '../components/contact';
import{M_PLUS_Rounded_1c} from 'next/font/google';
import './globals.css';

// Google Fontsの設定
const mPlusRounded1c = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mPlusRounded1c',
});

//配列系の処理をかましたい

//レイアウトの構成
export default function HomePage() {
  // 必要に応じてサーバーで言語コードを取得
  const lang = 'ja';

  return (
    <html>
      <body className={`${mPlusRounded1c.variable}`}>
        <Info />
          <Main />
        <Contact />
      </body>
    </html>
  );
}