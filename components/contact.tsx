import style from "./css/contact.module.css";
import Image from "next/image";
import profile from "../profile.json";

//SNSのURLを記載するコンポーネント
export function Contact()
{
  return (
    <div className={style.contact}>
        {profile.links.map((data, index) => (
        <div key={index} className={style.background}>
            <div className={style.icon}>
                <Image src="file.svg" alt="info" layout="fill" />
            </div>
            <div className={style.text}>
                <h2 style={{marginTop: '1vh',marginBottom: '0px',marginLeft: '1vh'}}>{profile.links[index].id}</h2>
                <p style={{marginTop: '0px',marginBottom: '0px',marginLeft: '1vh'}}>{profile.links[index].content}</p>
            </div>
        </div> 
        ))}
    </div>
  );
}