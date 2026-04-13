import style from "./css/main.module.css";

export function Main()
{
  return (
    <div className={style.main}>
        <div className={style.background}>
            <div className={style.title}>
                <p style={{ marginTop: '16px', marginLeft: '16px', marginBottom: '0px', marginRight: '16px' }}>Title</p>
            </div>
            <div className={style.content}>
                <p style={{ marginTop: '10px', marginLeft: '16px', marginBottom: '16px', marginRight: '16px' }}>Welcome to my app!</p>
            </div>
        </div>
    </div>
  );
}