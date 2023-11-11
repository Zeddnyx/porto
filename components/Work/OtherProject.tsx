import React from 'react'
import { FiGithub, FiFolder } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { mono } from "@/utils/fonts";

export interface OtherProjectProps {
  otherProject: {
    title: string;
    link: string;
    live: string;
    desc: string;
    tech: string[];
  }[]
}

export default function OtherProject({ otherProject }: OtherProjectProps) {
  return (
    <>
      {otherProject.map(item => (
        <div key={item.title} className="p-5 bg-mainBg2 grid gap-3 rounded">
          <div className="flex items-center justify-between">
            <i className="text-cyan">
              <FiFolder size="30" />
            </i>
            <div className="flex gap-4 items-center">
              <a className="hover:text-cyan" href={item.link}>
                <FiGithub size="20" />
              </a>
              <span className="hover:text-cyan">
                {!!item.live ? (
                  <a target="_blank" href={item.live}>
                    <BiLinkExternal size="20" />
                  </a>
                ) : (
                  ""
                )}
              </span>
            </div>
          </div>

          <a target="_blank" href={item.live ? item.live : item.link}>
            <h3 className="text-gray1 text-xl hover:text-cyan cursor-pointer">
              {item.title}
            </h3>
          </a>
          <p className="text-base">{item.desc}</p>
          <ul className={`${mono.className} ul-tech-tag`}>
            {item.tech.map((item, id) => (
              <li className="rounded-bg-cyan1" key={id}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
