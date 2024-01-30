let win=window.innerWidth;
// console.log(win);
let menushka=document.createElement('lol');
document.querySelector('body > main').prepend(menushka);

const box={
  menu:"document.querySelector('#menu')",
  countClick:+0
};
// box.menu=`${}`;
// box.countClick=+0;
box.menu!=null;
// console.log(box);
if(innerWidth<477){
  // document.querySelector('nav').style.cssText=`display:none`;
  if(typeof box.menu==undefined){
    // console.log('typeof not undefined');

  }else{
    // console.log('else');
    let menu=document.createElement('p');
    menu.setAttribute('id','menu');
    menu.style.cssText=`display:flex;justify-content:center;align-items:center;top:10px;flex-direction:column;left:37px;width:70px;height:70px;z-index:99;`;
    document.querySelector('nav').append(menu);
    let line=document.createElement('span');
    line.style.cssText=`
    width:37px;
    height:3px;
    background:green;
    display:block;
    transition: all 1s ease-out;
    `;
    document.querySelector('nav > p').append(line);
    let linee=document.createElement('span');
    linee.style.cssText=`
    width:37px;
    height:3px;
    background:green;
    display:block;
    margin-top:17%;
    margin-bottom:17%;
    transition: all 1s ease-out;
    `;
    document.querySelector('nav > p').append(linee);
    let lin=document.createElement('span');
    lin.style.cssText=`
    width:37px;
    height:3px;
    background:green;
    display:block;
    transition: all 1s ease-out;
    `;
    document.querySelector('nav > p').append(lin);
  }
};//innerWidth
// console.log(typeof box.menu);
// console.log(box.menu);
if(document.querySelector('#menu')!=undefined){
  // console.log('click - else');
  document.querySelector('#menu').addEventListener('click',()=>{
    box.countClick++;
    document.querySelector('#menu > span:nth-child(2)').style.cssText=`display:none`;
    document.querySelector('#menu > span:nth-child(1)').style.cssText=`
      transform:rotate(45deg);
      width:37px;
      height:3px;
      background:green;
      display:block;
      transition: all 1s ease-out;
    `;
    document.querySelector('#menu > span:nth-child(3)').style.cssText=`
    transform:rotate(-45deg);
    width:37px;
    height:3px;
    background:green;
    display:block;
    transition: all 1s ease-out;
    `;
    document.querySelector('lol').style.cssText=`
      display:flex;
      justify-content:space-around;
      align-items:center;
      position:fixed;
      flex-direction:column;
      top:0;
      width:100%;
      height:100vh;
      background:black;
      font-size:30px;
      transition:all 1s ease-out;
    `;
    function closeMenuOk(){
      document.querySelector('#menu > span:nth-child(2)').style.cssText=`
      width:37px;
      height:3px;
      background:green;
      display:block;
      margin-top:17%;
      margin-bottom:17%;
      transition: all 1s ease-out;
      `;
      document.querySelector('#menu > span:nth-child(1)').style.cssText=`
      transform:rotate(0deg);
      width:37px;
      height:3px;
      background:green;
      display:block;
      transition: all 1s ease-out;
      `;
      document.querySelector('#menu > span:nth-child(3)').style.cssText=`
      transform:rotate(0deg);
      width:37px;
      height:3px;
      background:green;
      display:block;
      transition: all 1s ease-out;
      `;
      document.querySelector('lol').innerHTML='';// closed menu

      document.querySelector('lol').style.cssText=`
      background:rgba(0,0,0,0);
      transition:all 1s ease-out;
      `;
      box.countClick=0;
    }
    // console.log(document.querySelector('nav > ul').innerHTML);
    document.querySelector('lol').innerHTML=document.querySelector('nav > ul').innerHTML;
    function clickFunction(){
      document.querySelector('lol').addEventListener('click',()=>{
        closeMenuOk();
        return box.countClick==2;
      });
    }
    clickFunction();
    if(box.countClick>=2){
      // console.log(box.countClick);
      closeMenuOk();
    }
  });
}else{
  // console.log('box.menu==undefined');

}

function toHome(){
  window.location.href='/';
}
