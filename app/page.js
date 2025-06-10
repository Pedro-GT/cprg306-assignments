import Image from "next/image";
import Link from "next/link";

export default function Home() {

  let linkStyle = "text-red-500 hover:text-red-800  underline";

  return (
    <main className = "items-center justify-center flex flex-col h-screen">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li className={linkStyle}>< Link href={'./week-2'}>Week 2</Link></li>
        <li className={linkStyle}><Link href={'./week-3'}>Week 3</Link></li>
        <li className={linkStyle}><Link href={'./week-4'}>Week 4</Link></li>
        <li className={linkStyle}><Link href={'./week-5'}>Week 5</Link></li>
        <li className={linkStyle}><Link href={'./week-6'}>Week 6</Link></li>
      </ul>
    </main>
  );
}
