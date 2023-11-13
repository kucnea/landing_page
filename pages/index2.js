import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import front_img1 from '/public/image/LogoMinho_noBack_wide.png'
import front_img2 from '/public/image/workingRst_1.png'
import front_img3 from '/public/image/workingRst_2.png'
import navi_icon_1 from '/public/image/item_01.png'
import navi_icon_2 from '/public/image/item_02.png'
import navi_icon_3 from '/public/image/item_01.png'
import navi_icon_4 from '/public/image/item_01.png'
import navi_icon_5 from '/public/image/item_01.png'
import navi_icon_6 from '/public/image/item_01.png'
import navi_icon_7 from '/public/image/item_01.png'
import kakao from '/public/image/kakao.png'

export function Index2() {

   const [currentImage, setCurrentImage] = useState(0);
   const images = [
      { src: front_img1, alt: "frontImg_1" },
      { src: front_img2, alt: "frontImg_2" },
      { src: front_img3, alt: "frontImg_3" },
   ];

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
      <>
      <div id="index" className='page'>
          <div id="index_wrap" className='page_wrap'>
              <div id="index_in" className='page_in'>
                 <div id="index_animate_img" 
                      className='borderLine' 
                      style={{ position: 'relative', width: '100%', height: '50vh' }}
                      onClick={()=>moveIndexImg()}>
                     <Image 
                     src={images[currentImage].src}
                     alt={images[currentImage].alt}
                     layout="fill"
                     objectFit="contain"
                     />
                 </div>
                 <div id="index_add_msg">
                     <ul id='index_detail_1' className='nolist justify_end'>
                        <li style={{fontSize:"1.2em"}}>
                           <span>
                              ㆍ {process.env.NEXT_PUBLIC_REACT_APP_STORE_NAME}는 <b>각종 웹사이트, 소프트웨어, 자동화 프로그램 들의 기획, 설계, 개발</b>을 제공합니다.
                           </span>
                        </li>
                        <li>
                           <span>
                              <Link href={"/"}>작업 이력 보러가기</Link>
                           </span>
                        </li>
                     </ul>
                 </div>
                 <div id="index_navi_icon_pack">
                     <div className='index_navi_icon'>
                        <Image src={navi_icon_1} alt='개발자 이력 소개' style={{width: '70%', height: '30%'}}/>
                        <div className='index_navi_label'>개발자 이력 소개</div> 
                     </div>
                     <div className='index_navi_icon'>
                        <Image src={navi_icon_2} alt='작업 이력 소개' style={{width: '70%', height: '30%'}}/>
                        <div className='index_navi_label'>작업 이력 소개</div> 
                     </div>
                     <div className='index_navi_icon'>
                        <Image src={navi_icon_3} alt='심심풀이' style={{width: '70%', height: '30%'}}/>
                        <div className='index_navi_label'>심심풀이</div>
                     </div>
                     <div className='index_navi_icon'>
                        <Image src={navi_icon_4} alt='문의 및 제안' style={{width: '70%', height: '30%'}}/>
                        <div className='index_navi_label'>문의 및 제안</div> 
                     </div>
                 </div>
                 
                 
                 <div id="index_info_pack w100">
                     <div className='index_info w100'>
                           <div id='contact_pack' className='contact_pack'>
                              <div id='contact_box' className='w60' style={{display:'flex'}}>
                                 <span style={{textAlign:'left', marginLeft:'2%'}}>
                                    <b style={{fontSize:'2em'}}>상담/문의<br/></b>
                                    <hr style={{color:'#e5e5e5', width:'100%', display:'block'}}/>
                                    연락주시면 친절히 상담해드립니다.<br/>
                                    온라인 상으로 오픈카톡으로 먼저 공개하는 점 양해바랍니다.<br/>
                                    진행 중 연락처 및 계약서 작성가능합니다.<br/><br/>
                                    <a style={{color:'#000000', fontSize:'1.2em'}}>* 본 센터는 예약제로 운영됩니다.</a><br/>
                                    <div style={{display:'flex', alignItems:'center'}} onClick={()=>openKakao()}>
                                       <Image src={kakao} alt='카카오톡' style={{width: '20%', height: '5%'}}/>
                                       <b style={{fontSize:'2em'}}>{process.env.NEXT_PUBLIC_REACT_APP_OPEN_KAKAO}</b>
                                    </div>
                                 </span>
                              </div>
                           </div>
                     </div>
                 </div>
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default Index2
