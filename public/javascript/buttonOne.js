// console.log('oK');
document.querySelector('#buttonOne').addEventListener('click',()=>{

  // removeLink(event);

  createButtonOne();
});
function addLink(){
  history.pushState(null, null, '?buttonOne');

  // window.location.search='buttonOne';
  // event.preventDefault();
}//addLink
function createButtonOne(){
  // event.preventDefault();
  // window.location.search='buttonOne';

  let buttonOne=document.createElement('div');
  buttonOne.style.cssText=`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:100vh;
    flex-direction:column;
    position: fixed;
    bottom: 0;
    top: 1;
    background:darkgreen;
    `;
  buttonOne.setAttribute('id','buttonOne');
  buttonOne.innerHTML=`<h3>Landing page for figma layaut</h3><img src="https://qucu.ru/theBestLanding/static/media/img3.3ef64f86.png" alt="order langing page"><p style='margin:1%;'>Landing page for any ready-made figma layout. A figma model can be found completely free of charge from those already made. Make adjustments, small corrections to the text, your entire landing page based on the figma layout is ready.</p><h3 style="font-size:47px;color:red;" id="closeButtonOne">close</h3>`;
  document.querySelector('body').append(buttonOne);
  removeButtonOne();
  addLink();

}//createButtonOne
function removeButtonOne(){
  document.querySelector('#closeButtonOne').addEventListener('click',()=>{
    // event.preventDefault();
    document.querySelector('body > div').remove();
    history.pushState(null, null, '/');
    // window.location.search='';
  });
};
window.addEventListener('DOMContentLoaded',()=>{
  // window.location.search='buttonOne';
  if(window.location.search=='?buttonOne'){
    createButtonOne();

  }
  // console.log('DOMContentLoaded');
});
