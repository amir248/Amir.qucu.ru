// console.log('Three');
document.querySelector('#buttonThree').addEventListener('click',()=>{

  // removeLink(event);

  createButtonThree();
});
function addLinkThree(){
  history.pushState(null, null, '?buttonThree');

  // window.location.search='buttonOne';
  // event.preventDefault();
}//addLink
function createButtonThree(){
  // event.preventDefault();
  // window.location.search='buttonOne';

  let buttonThree=document.createElement('div');
  buttonThree.style.cssText=`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:100vh;
    flex-direction:column;
    position: fixed;
    bottom: 0;
    top: 1;
    background:black;
    `;
  buttonThree.setAttribute('id','buttonThree');
  buttonThree.innerHTML=`<h3>Advertising</h3><img src="https://qucu.ru/images/frontend-developer.JPG" alt="order langing page"><p style='margin:1%;'>Launch of contextual advertising. Taking into account ready-made SEO optimization, the launched site will begin to appear in search results even without keywords in the advertised page, as well as based on such important factors as geolocation and the demand for content in all known search engines.</p><h3 style="font-size:47px;color:red;" id="closeButtonThree">close</h3>`;
  document.querySelector('body').append(buttonThree);
  removeButtonThree();
  addLinkThree();

}//createButtonOne
function removeButtonThree(){
  document.querySelector('#closeButtonThree').addEventListener('click',()=>{
    // event.preventDefault();
    document.querySelector('body > div').remove();
    history.pushState(null, null, '/');
    // window.location.search='';
  });
};
window.addEventListener('DOMContentLoaded',()=>{
  // window.location.search='buttonOne';
  if(window.location.search=='?buttonThree'){
    createButtonThree();

  }
  // console.log('DOMContentLoaded');
});
