import './main.scss'
import cellsModel from './cellsModel'
import './js/welcome_animation'
import './js/link-hover-effect'

window.addEventListener('load', () => document.querySelector('body').style.visibility = 'visible')

const select = e => document.querySelector(e),
      selectAll = e => Array.from(document.querySelectorAll(e));

const cellElement = (rowIndex, cellIndex, last) =>
  select(`.row:nth-child(${rowIndex}) .cell:nth-child(${cellIndex}) ${last}`);

const cellsModelkeys = Object.keys(cellsModel)

cellsModelkeys.map((key, n, keyArr) => {

  const ri = n < 2 ? 2 : 3, // 2 and 3 because of form before rows
        ci = n < 2 ? (n+1) : (n+1) - 2,
        nthKey = keyArr[n],
        titleBarTitle = cellElement(
          ri, ci,
          '.title-bar .title'
        ),
        linkConUl = cellElement(
          ri, ci,
          '.link-con ul'
        );

  titleBarTitle.innerHTML = nthKey

  cellsModel[key].map(({name, url}) => {
    linkConUl.innerHTML += `
      <li>
        <a href="${url}" class="link">${name}</a>
      </li>
    `;
  })

});
