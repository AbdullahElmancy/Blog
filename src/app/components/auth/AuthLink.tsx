"use client";
import Link from "next/link";
import style from "./auth.module.css";
import { useState } from "react";
import { signOut } from "next-auth/react";
const AuthLink = () => {
  let [open, setOpen] = useState(false);
  const status:string = "noAuth";
  return (
    <>
      {status === "notAuth" ? (
        <Link className={style.link} href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className={style.link} href="/write">
            Write
          </Link>
          <span className={style.link} onClick={()=>signOut()}>Logout</span>
        </>
      )}

      <div className={style.burger} onClick={() => setOpen(!open)}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      {open && (
        <div className={style.menu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contat">Contact</Link>
          {status === "notAuth" ? (
            <Link href="/login">
              Login
            </Link>
          ) : (
            <>
              <Link href="/write">
                Write
              </Link>
              <span className={style.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
