import style from "./css/info.module.css";
import profile from "../profile.json";
import Image from "next/image";


//SNSのURLを記載するコンポーネント
export function Info()
{
  return (
    <div className={style.info}>
        <div className={style.background}>
            <div className={style.icon}>
                <Image src="file.svg" alt="info" layout="fill" />
            </div>
            <div className={style.text}>
                <h2 style={{marginTop: '1vh',marginBottom: '0px',marginLeft: '1vh'}}>{profile.userinformation["user-name"]}</h2>
                <p style={{marginTop: '0px',marginBottom: '0px',marginLeft: '1vh'}}>{profile.userinformation["oneword"]}</p>
            </div>
        </div>
    </div>
  );
}