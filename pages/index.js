import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Ceo from './board/introduce/Ceo'
import InputForm from './board/offer/InputForm'
import front_img1 from '/public/image/LogoMinho_noBack_wide.png'
import front_img2 from '/public/image/workingRst_1.png'
import front_img3 from '/public/image/workingRst_2.png'
import navi_icon_1 from '/public/image/item_02.png'
import navi_icon_2 from '/public/image/item_02.png'
import navi_icon_3 from '/public/image/item_03.png'
import navi_icon_4 from '/public/image/item_01.png'
import kakao from '/public/image/kakao.png'
import MHVideoPlayer from './layouts/MHVideoPlayer'
import { YoutubeOutlined } from '@ant-design/icons';
import YoutubeIcon from '@icon/youtube.png';
import Ticktok from '@icon/ticktok.png';



export default function Index() {

  const [isMobile,setIsMobile] = useState(false);
  const mobileWidth = 768;
  const [currentImage, setCurrentImage] = useState(0);
  const [currentComponent, setCurrentComponent] = useState(0);
  const [isCeoStart,setIsCeoStart] = useState(false);

  const images = [
     { src: front_img1, alt: "frontImg_1" },
     { src: front_img2, alt: "frontImg_2" },
     { src: front_img3, alt: "frontImg_3" },
  ];
  const components = [
    { comp : <Ceo isStart={isCeoStart}/> },
    { comp : <Ceo/> },
    { comp : <InputForm/> },
  ]

  function clickMenu(i){
    if( i == 0 )
      setIsCeoStart(true);
    else if( i == 1)
      window.location.href = '/board/funThings/DashBoard'
    
    setCurrentComponent(i);
  }

  function SelectComponent(){
    if( currentComponent >= 0 && currentComponent <= components.length )
      return components[currentComponent].comp;
    else 
      return null;
  }

  function moveIndexImg(){
    if(currentImage==0){
       window.location.href='/board/introduce/Ceo';
    }
 }
 
 const [styleMenus,setStyleMenus] = useState([
      {color: 'red',backGround:''},
      {color: 'green', backGround:''},
      {color: 'blue', backGround:''},
    ]);
 const degreeMenuBackColor = 6;
 const prefixMenuBackColor = 'linear-gradient(45deg,';
 const baseMenuBackColor = 'black';
 const surfixMenuBackColor = ')';

 useEffect(()=>{
  const createGradation = (order) =>{

    // console.log("[index.js] createGradation is it run? "+order);
    for( var j = 0 ; j < styleMenus.length ; j++ ){
      var rslt = prefixMenuBackColor;
  
      for( var i = 1 ; i <= degreeMenuBackColor ; i++ ){

        if( order == i )
          ((index) => {
            rslt += styleMenus[index].color;
          })(j);

        else
          rslt += baseMenuBackColor;
    
        if( i != degreeMenuBackColor )
          rslt += ',';

      }
    
      rslt += surfixMenuBackColor;
      // console.log("[index.js] rslt css : "+rslt);

      ((index, currentRslt) => {

        setStyleMenus((prevStyleMenus) => {
          const newStyleMenus = [...prevStyleMenus];
          newStyleMenus[index].backGround = currentRslt;
          return newStyleMenus;
        });

      })(j, rslt);
    
      
    }
    
  
  }

  
  // createGradation(1);
  let numGradation = -1;

  const intervalGradation = setInterval(() => {
    numGradation = ( (numGradation + 1) % degreeMenuBackColor );
    createGradation(numGradation + 1);
    // console.log("[index.js] numGradation : "+ ( numGradation + 1 ) );
  }, 100);

  return () => clearInterval(intervalGradation);

  // console.log("[index.js] \n1 : "+styleMenus[0].backGround
  // +", \n2 : "+styleMenus[1].backGround
  // +", \n3 : "+styleMenus[2].backGround);

 },[]);

 function sendTestMsg(msg){
    console.log("[index.js] msg : "+msg);
 };

 function openKakao(){
  window.open(process.env.NEXT_PUBLIC_REACT_APP_OPEN_KAKAO, '_blank', 'noopener,noreferrer');
 };

function openJiHyeYoutube(){
  window.open('https://www.youtube.com/@jihye_88', '_blank', 'noopener,noreferrer');
}

  useEffect(()=>{

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  

  },[]);

  useEffect(()=>{
    const handleResize = () => {

      setIsMobile(window.innerWidth <= mobileWidth);

    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);


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
                 채팅, 게임<br/>
                 경험있습니다. ( 디자인 제외 )
               </p>
             </div>
             <div 
                style={{ position: 'relative', width: '100%', height: '50vh', border: '1px solid #ffffff' }}
                onClick={()=>moveIndexImg()}>
                  <Image 
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    // layout="fill"
                    // objectFit="contain"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
             </div>

             <MHVideoPlayer filePathVideo='/video/minho-minhoSiteVideo.mp4' boolAutoPlay = {true} boolMute = {true} boolAutoReplay = {true} boolBusiness={false} vWidth={'50%'} vHeight={'30%'}/>
             <a className='text-white flex items-center justify-center'>
              * 해당 영상은 이지혜 님께서 제작해 주셨습니다. &nbsp;&nbsp;
              {/* <YoutubeOutlined  onClick={openJiHyeYoutube} /> */}
              <Image 
                    src={YoutubeIcon}
                    alt='Youtube Icon'
                    // layout="fill"
                    // objectFit="contain"
                    onClick={openJiHyeYoutube}
                    style={{ objectFit: 'cover', width: '3%', height: '3%' }}
                    
              />
              &nbsp;
              <Image 
                    src={Ticktok}
                    alt='ticktok Icon'
                    // layout="fill"
                    // objectFit="contain"
                    onClick={openJiHyeYoutube}
                    style={{ objectFit: 'cover', width: '3%', height: '3%' }}
                    
              />
            </a>
            <a className='text-white flex items-center justify-center'>
              * 재생하는 플레이어는 자체제작한 플레이어 입니다.<br/>
              재사용시 출처를 남겨주세요.
            </a>
            

             { !isMobile ? 
              <div className="w-full max-w-full space-y-4 mx-auto">
                <div className="grid grid-cols-3 gap-8">
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                        onClick={()=>clickMenu(0)}>
                    <Image src={navi_icon_1} alt='개발자 이력 소개' style={{width: '40%', height: '40%'}}/>
                    <h2 className="text-xl font-bold text-white">개발자 이력 소개</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      개발자의 작업 경험과 간단한 이력사항 보유 기술을 보여드립니다.
                    </p>
                  </div>                 
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                        onClick={()=>clickMenu(1)}>
                    <Image src={navi_icon_3} alt='즐길거리' style={{width: '40%', height: '40%'}}/>
                    <h2 className="text-xl font-bold text-white">즐길거리</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      간단한 즐길거리, 정보 공유를 하는 곳입니다.<br/>
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                        onClick={()=>openKakao()}>
                    <Image src={navi_icon_4} alt='문의/제안/의뢰' style={{width: '40%', height: '40%'}}/>
                    <h2 className="text-xl font-bold text-white">문의 및 제안</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      원하시는 문의/제안/의뢰 어떤 것도 환영합니다.<br/>
                      지속적이고 건강한 관계를 위해 정확하게 말씀드리고 제안드립니다.
                    </p>
                  </div>
                </div>
              </div>
             :
              <div>
                <div className='text-gray-100 mb-2' 
                      onClick={()=>clickMenu(0)}
                      style={{background: styleMenus[0].backGround}}>
                  <a>
                    개발자 이력 소개
                  </a>
                </div>
                <div className='text-gray-100 mb-2'
                      style={{background: styleMenus[1].backGround}}
                      onClick={()=>clickMenu(1)}>
                  <a>
                    즐길거리
                  </a>
                </div>
                <div className='text-gray-100 mb-2'
                      style={{background: styleMenus[2].backGround}}
                      onClick={()=>openKakao()}>
                  <a>
                    문의 및 제안
                  </a>
                </div>
              </div>
             }
             {/* <div className="w-full max-w-full space-y-4 mx-auto">
               <div className="grid grid-cols-3 gap-8">
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                      onClick={()=>clickMenu(0)}>
                  <Image src={navi_icon_1} alt='개발자 이력 소개' style={{width: '40%', height: '40%'}}/>
                  <h2 className="text-xl font-bold text-white">개발자 이력 소개</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    개발자의 작업 경험과 간단한 이력사항 보유 기술을 보여드립니다.
                  </p>
                </div>                 
                 <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                      onClick={()=>clickMenu(1)}>
                   <Image src={navi_icon_3} alt='즐길거리' style={{width: '40%', height: '40%'}}/>
                   <h2 className="text-xl font-bold text-white">즐길거리</h2>
                   <p className="text-zinc-200 dark:text-zinc-100">
                     간단한 즐길거리, 정보 공유를 하는 곳입니다.<br/>
                     ( 현재 준비중 )
                   </p>
                 </div>
                 <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                      onClick={()=>openKakao()}>
                   <Image src={navi_icon_4} alt='문의/제안/의뢰' style={{width: '40%', height: '40%'}}/>
                   <h2 className="text-xl font-bold text-white">문의 및 제안</h2>
                   <p className="text-zinc-200 dark:text-zinc-100">
                     원하시는 문의/제안/의뢰 어떤 것도 환영합니다.<br/>
                     지속적이고 건강한 관계를 위해 정확하게 말씀드리고 제안드립니다.
                   </p>
                 </div>
               </div>
             </div> */}

             { isCeoStart ? 
              <div style={{display:'flex',justifyContent:'center'}}>
                  <Ceo isStart={isCeoStart}/>
              </div>
             :
              <div/>
             }
             {/* <div style={{display:'flex',justifyContent:'center'}}>
              <SelectComponent/>
             </div> */}




           </div>
         </div>
       </div>
     </section>
   )
 }
