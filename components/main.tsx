import style from "./css/main.module.css";
//Jsonファイルの読み込み用処理
import profile from "../profile.json";

const maindata = profile.texts;


export function Main()
{
  return (
    <div className={style.main}>
        {maindata.map((data, index) => (
            <div key={index} className={style.background}>
                <div className={style.title}>
                    <p style={{ marginTop: '1vh', marginLeft: '1vh', marginBottom: '0px', marginRight: '16px' }}>{profile.texts[index].title}</p>
                </div>
                <div className={style.content}>
                    {profile.texts[index].content.map((content, contentIndex) => (
                        <p key={contentIndex} style={{ marginTop: '1vh', marginLeft: '1vh', marginBottom: '1vh', marginRight: '1vh' }}>{content}</p>
                    ))}
                </div> 
            </div>
        ))}
    </div>
  );
}