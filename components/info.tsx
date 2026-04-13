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
                <Image src="file.svg" alt="info" layout="fill"/>
            </div>
            <div className={style.text}>
                
                <p style={{marginTop: '0.5vh',marginBottom: '0px',marginLeft: '0.5vh',fontSize: '2.5vh'}}>{profile.userinformation["user-name"]}</p>
                <p style={{marginTop: '0px',marginBottom: '0px',marginLeft: '1vh',fontSize: '1.5vh',color: '#7F7F7F'}}>{profile.userinformation["oneword"]}</p>
            </div>
        </div>
    </div>
  );
}