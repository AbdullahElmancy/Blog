"use client";
import React from "react";
import Image from "next/image";
import style from "./write.module.css";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";

const WritePage = () => {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  //can not complete
  const [resource, setResource] = useState<string | CloudinaryUploadWidgetInfo | undefined>();
  
  const [file, setFile] = useState<File | undefined | null>(null);
  const router = useRouter();

  const sendPost = async () => {

    if (typeof resource !== "object") {
        await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({ desc, title,slug:catSlug || "travel",catSlug:catSlug || "travel"}),
          });
      } else if (resource && typeof resource === 'object') {
        await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({ desc, title ,img:resource.secure_url.split("/").at(-1),slug:catSlug || "travel",catSlug:catSlug || "travel"}),
          });
      }
      router.push("/")

  };

  if (status === "loading") {
    return (
      <div className={style.loading}>
        <h1 className={style.titleLoding}>this page loadin</h1>
        <p className={style.ploadin}> please wait for loading</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/home");
  }
  return (
    <div className={style.container}>
      <input
        type={`text`}
        id={`title`}
        name={`title`}
        className={style.title}
        placeholder="Title"
        onChange={(ev) => setTitle(ev.target.value)}
      />
       <select className={style.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={style.editor}>
        <button className={style.button} onClick={() => setOpen(!open)}>
          <Image
            src={`/plus.webp`}
            alt={`add some thing`}
            width={16}
            height={16}
            loading="lazy"
          />
        </button>
        {open && (
          // this will not work becuse thee is no firebase free
          <div className={style.add}>
            {/* <input type={"file"} id={"fileUp"} name={"fileUp"} style={{display:"none"}}   onChange={e=>setFile(e.target.files?.[0])}/> */}
            <CldUploadWidget
              options={{ sources: ["local", "url", "unsplash"] }}
              signatureEndpoint="/api/imageCloud"
              onSuccess={(result, { widget }) => {
                setResource(result?.info); // { public_id, secure_url, etc }
              }}
              onQueuesEnd={(result, { widget }) => {
                widget.close();
              }}
            >
              {({ open }) => {
                return (
                  <button className={style.addButton} onClick={() => open()}>
                    <label htmlFor={"fileUp"}>
                      <Image
                        src={`/image.webp`}
                        alt={`add some thing`}
                        width={16}
                        height={16}
                        loading="lazy"
                      />
                    </label>
                  </button>
                );
              }}
            </CldUploadWidget>

            {/* <button className={style.addButton}>
              <label htmlFor={"fileUp"}>
                <Image
                  src={`/external.webp`}
                  alt={`add some thing`}
                  width={16}
                  height={16}
                  loading="lazy"
                />
              </label>
            </button>
            <button className={style.addButton}>
              <label htmlFor={"fileUp"}>
                <Image
                  src={`/video.webp`}
                  alt={`add some thing`}
                  width={16}
                  height={16}
                  loading="lazy"
                />
              </label>
            </button> */}
          </div>
        )}
        <textarea
          className={style.textarea}
          name="post"
          id="post"
          placeholder="tell your story..."
          onChange={(ev) => setDesc(ev.target.value)}
        ></textarea>
      </div>
      <button className={style.publish} onClick={sendPost}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;