"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect,useState} from "react";

const links=[
  ["🏠","داشبورد","/"],
  ["🏢","معرفی شرکت / هلدینگ","/company"],
  ["🏭","شرکت‌های زیرمجموعه","/subsidiaries"],
  ["⚙️","ظرفیت‌های تولیدی","/capacity"],
  ["🧮","اقلام بودجه و منطق نیاز","/budget-items"],
  ["🎯","اهداف بودجه","/goals"],
  ["💰","بودجه فروش","#"],["🏗","برنامه تولید","#"],["📦","برنامه خرید","#"],["👥","نیروی انسانی","#"]
];

export function AppShell({children}:{children:React.ReactNode}){
 const path=usePathname(); const [open,setOpen]=useState(false); const [company,setCompany]=useState("شرکت انتخاب نشده");
 useEffect(()=>{try{const x=JSON.parse(localStorage.getItem("budgetOrg")||"null");setCompany(x?.name||"شرکت انتخاب نشده")}catch{}},[path]);
 return <div className="shell">
  <div className="mobile-top"><b>📊 نظام بودجه‌ریزی</b><button className="menu-btn" onClick={()=>setOpen(!open)}>☰</button></div>
  <aside className={"sidebar "+(open?"open":"")}><div className="brand">📊 <b>نظام بودجه‌ریزی</b></div>
   <nav>{links.map(([icon,title,href],i)=>i===1?<div key={title}><div className="nav-title">اطلاعات پایه</div><Nav href={href} icon={icon} title={title} path={path}/></div>:i===4?<div key={title}><div className="nav-title">بودجه‌ریزی</div><Nav href={href} icon={icon} title={title} path={path}/></div>:i>6&&i===7?<div key={title}><Nav href={href} icon={icon} title={title} path={path}/></div>:<Nav key={title} href={href} icon={icon} title={title} path={path}/>)}</nav>
  </aside>
  <main className="main">{children}<div id="toast" className="toast"/></main>
 </div>
}
function Nav({href,icon,title,path}:{href:string;icon:string;title:string;path:string}){
 const active=href!=="#"&&(href==="/" ? path==="/" : path.startsWith(href));
 return <Link className={"nav-link "+(active?"active":"")} href={href} onClick={()=>{}}>{icon} {title}</Link>
}