import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full  h-1/12 text-center  bg-slate-200  flex flex-col justify-center items-center">
      <div >
        <p className="text-xs text-gray-500">Copyright Ⓒ 2025 All rights reserved. 请勿上传违反中国法律的图片，违者后果自负。 本程序基于Cloudflare Pages，开源于
          <Link 
          href="https://ziyuanxiong.cn/"
          className="text-blue-300  hover:text-red-900 ml-1"
          target="_blank"
          rel="noopener noreferrer"
          >资源熊</Link> </p>
      </div>
    </footer>
  );
}
