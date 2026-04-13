import "../globals.css";
import Image from "next/image";


export function Main()
{
  return (
    <body>
      <div className="banner">
        <Image
          src="globe.svg"
          alt="Banner Image"
          width={100}
          height={100}
        />
        <a>Banner</a>
      </div>
      <div className="main">
        <a>OverView</a>
      </div>
      <div className="contact">
        <a>contact</a>
        <ul>
          <li>項目</li>
          <li>項目</li>
          <li>項目</li>
          <li>項目</li>
        </ul>
      </div>
    </body>
  );
}