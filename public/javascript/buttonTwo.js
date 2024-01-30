// console.log('Two');
document.querySelector('#buttonTwo').addEventListener('click',()=>{

  // removeLink(event);

  createButtonTwo();
});
function addLinkTwo(){
  history.pushState(null, null, '?buttonTwo');

  // window.location.search='buttonOne';
  // event.preventDefault();
}//addLink
function createButtonTwo(){
  // event.preventDefault();
  // window.location.search='buttonOne';

  let buttonTwo=document.createElement('div');
  buttonTwo.style.cssText=`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:100vh;
    flex-direction:column;
    position: fixed;
    bottom: 0;
    top: 1;
    background:darkviolet;
    `;
  buttonTwo.setAttribute('id','buttonTwo');
  buttonTwo.innerHTML=`<h3>SEO optimization</h3><img src="https://qucu.ru/blozhik/img/DSC_7000.JPG" alt="order SEO"><p style='margin:1%;'>SEO site optimization using structured data markup, JSON ld, semantic tags, high-quality images, semantic tags.</p><h3 style="font-size:47px;color:red;" id="closeButtonTwo">close</h3>`;
  document.querySelector('body').append(buttonTwo);
  removeButtonTwo();
  addLinkTwo();

}//createButtonOne
function removeButtonTwo(){
  document.querySelector('#closeButtonTwo').addEventListener('click',()=>{
    // event.preventDefault();
    document.querySelector('body > div').remove();
    history.pushState(null, null, '/');
    // window.location.search='';
  });
};
window.addEventListener('DOMContentLoaded',()=>{
  // window.location.search='buttonOne';
  if(window.location.search=='?buttonTwo'){
    createButtonTwo();

  }
  // console.log('DOMContentLoaded');
});
