const select = e => document.querySelector(e);
const selectAll = e => Array.from(document.querySelectorAll(e));
window.addEventListener('load', () => {

  const linkElems = selectAll('.link')

  const linkEffectCon = select('.link-effect-con')
  const textCon = select('.link-effect-con .text-con')
  const linkNameElem = select('.link-effect-con .text-con h1.link-name')

    linkElems.map(link => {
      link.addEventListener('mouseenter', e => {
        linkNameElem.innerHTML = e.target.innerHTML
        linkEffectCon.style.display = 'flex'
      })
      link.addEventListener('mouseleave', e => {
        linkEffectCon.style.display = 'none';
      });
    });

});
