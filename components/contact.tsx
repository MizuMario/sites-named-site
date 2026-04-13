import style from "./css/contact.module.css";
import Image from "next/image";


//SNSのURLを記載するコンポーネント
export function Contact()
{
  return (
    <div className={style.contact}>
        <div className={style.background}>
            <div className={style.icon}>
                <Image src="file.svg" alt="info" layout="fill" />
            </div>
            <div className={style.text}>
                <h2 style={{marginTop: '1vh',marginBottom: '0px',marginLeft: '1vh'}}>Title</h2>
                <p style={{marginTop: '0px',marginBottom: '0px',marginLeft: '1vh'}}>aaaaaaaaaaaa</p>
            </div>
        </div>
    </div>
  );
}