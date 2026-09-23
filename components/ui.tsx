"use client";
import {useState} from "react";
export function Header({eyebrow,title,pill}:{eyebrow:string;title:string;pill?:string}){return <header className="header"><div><small>{eyebrow}</small><h1>{title}</h1></div>{pill&&<span className="pill">{pill}</span>}</header>}
export function Card({children,className=""}:{children:React.ReactNode;className?:string}){return <section className={"card "+className}>{children}</section>}
export function Field({label,children,full=false}:{label:string;children:React.ReactNode;full?:boolean}){return <label className={"field "+(full?"full":"")}>{label}{children}</label>}
export function toast(message:string){const el=document.getElementById("toast");if(!el)return;el.textContent=message;el.className="toast show";setTimeout(()=>el.className="toast",2500)}
export function useLocalStorage<T>(key:string,initial:T){const [value,setValue]=useState<T>(initial);return [value,setValue] as const}
export function readJSON<T>(key:string, fallback:T):T{try{const x=JSON.parse(localStorage.getItem(key)||"null");return x??fallback}catch{return fallback}}
export const fa=(n:number)=>n.toLocaleString("fa-IR",{maximumFractionDigits:2});
export const num=(v:string|number)=>{const x=String(v??"").replace(/[۰-۹]/g,d=>"۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()).replace(/[٬,]/g,"");const n=Number(x);return Number.isFinite(n)?n:0};