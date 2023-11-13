import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import front_img1 from '/public/image/LogoMinho_noBack_wide.png'
import front_img2 from '/public/image/workingRst_1.png'
import front_img3 from '/public/image/workingRst_2.png'
import navi_icon_1 from '/public/image/item_02.png'
import navi_icon_2 from '/public/image/item_02.png'
import navi_icon_3 from '/public/image/item_03.png'
import navi_icon_4 from '/public/image/item_01.png'
import kakao from '/public/image/kakao.png'



export default function Index() {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
     { src: front_img1, alt: "frontImg_1" },
     { src: front_img2, alt: "frontImg_2" },
     { src: front_img3, alt: "frontImg_3" },
  ];

  // <p className="text-green-400">$ minho install all</p>
  // <p className="text-white">+ minho@23.11.13</p>
  // <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
  // <p className="text-green-400">$ input every thing</p>
  const textsConsole = [
    { text : "$ minho install all" },
    { text : "+ minho@23.11.13"},
    { text : "added 1 package, and audited 2 packages in 3s"},
    { text : "$ input every thing" },
  ]

  function moveIndexImg(){
    if(currentImage==0){
       window.location.href='/board/introduce/Ceo';
    }
 }

 function openKakao(){
  // window.location.href=process.env.NEXT_PUBLIC_REACT_APP_OPEN_KAKAO;
  window.open(process.env.NEXT_PUBLIC_REACT_APP_OPEN_KAKAO, '_blank', 'noopener,noreferrer');
 }

  useEffect(()=>{

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  

  },);


   return (
     <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
       <div className="container px-4 md:px-6">
         <div className="grid gap-6 items-center">
           <div className="flex flex-col justify-center space-y-8 text-center">
             <div className="space-y-2">
               <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
               Turn dreams into reality
               </h1>
               <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                 사이트, 쇼핑몰, 전산, 프로그램<br/>
                 자동화 로직 , 프로그램 연계 자동화, 카카오톡 송신<br/>
                 원하는 모든 것을 제작해드립니다. ( 디자인 제외 )
               </p>
             </div>
             <div 
                style={{ position: 'relative', width: '100%', height: '50vh', border: '1px solid #ffffff' }}
                onClick={()=>moveIndexImg()}>
                  <Image 
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  layout="fill"
                  objectFit="contain"
                  />
             </div>
             <div className="w-full max-w-full space-y-4 mx-auto">
               <div className="grid grid-cols-3 gap-8">
                 <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                   <Image src={navi_icon_1} alt='개발자 이력 소개' style={{width: '40%', height: '40%'}}/>
                   <h2 className="text-xl font-bold text-white">개발자 이력 소개</h2>
                   <p className="text-zinc-200 dark:text-zinc-100">
                     개발자의 작업 경험과 간단한 이력사항 보유 기술을 보여드립니다.
                   </p>
                 </div>
                 <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                   <Image src={navi_icon_3} alt='즐길거리' style={{width: '40%', height: '40%'}}/>
                   <h2 className="text-xl font-bold text-white">즐길거리</h2>
                   <p className="text-zinc-200 dark:text-zinc-100">
                     간단한 즐길거리, 정보 공유를 하는 곳입니다.<br/>
                     ( 현재 준비중 )
                   </p>
                 </div>
                 <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                   <Image src={navi_icon_4} alt='문의/제안/의뢰' style={{width: '40%', height: '40%'}}/>
                   <h2 className="text-xl font-bold text-white">문의 및 제안</h2>
                   <p className="text-zinc-200 dark:text-zinc-100">
                     원하시는 문의/제안/의뢰 어떤 것도 환영합니다.<br/>
                     지속적이고 건강한 관계를 위해 정확하게 말씀드리고 제안드립니다.
                   </p>
                 </div>
                 
                 {/* <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                   <div className="p-2 bg-black bg-opacity-50 rounded-full">
                     <svg
                       className=" text-white h-6 w-6 mb-2 opacity-75"
                       fill="none"
                       height="24"
                       stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                       viewBox="0 0 24 24"
                       width="24"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path d="m8 6 4-4 4 4" />
                       <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
                       <path d="m20 22-5-5" />
                     </svg>
                   </div>
                   <h2 className="text-xl font-bold text-white">Easy Collaboration</h2>
                   <p className="text-zinc-200 dark:text-zinc-100">
                     Easy Collaboration allows you to share and edit documents with your team in real time.
                   </p>
                 </div> */}
               </div>
             </div>

             <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono" style={{width: '100%'}}>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <p className="text-sm">bash</p>
              </div>
              <div className="mt-4">
                <p className="text-green-400">$ minho install all</p>
                <p className="text-white">+ minho@23.11.13</p>
                <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
                <p className="text-green-400">$ input every thing</p>
              </div>
             </aside>

           </div>
         </div>
       </div>
     </section>
   )
 }
