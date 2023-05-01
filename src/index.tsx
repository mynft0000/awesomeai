import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { css, Global } from '@emotion/react';
import list, { type Category } from './list';



const WIDTH = 200;
const PADDING = 16;
const MARGIN = 8;
const percent = 0.8;

function getList() {
  const columns = Math.max(1, Math.floor(window.innerWidth * percent / (WIDTH + MARGIN * 2 + PADDING * 2)));
  const columnsList: Category[][] = [];
  const heightList = [];
  for(let i=0;i<columns;i++) {
    heightList.push(0);
    columnsList.push([]);
  }
  list.forEach((item, i) => {
    let index = 0;
    let current = Infinity;
    heightList.forEach((height, heightIndex) => {
      if (height < current) {
        current = height;
        index = heightIndex;
      }
    });
    columnsList[index].push(item);
    heightList[index] += 30 * (item.list.length +1) + 40;
  });
  return columnsList;
}

let timer: number;

const App = () => {
  const [list, setList] = useState(getList());

  useEffect(() => {
    window.addEventListener('resize', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setList(getList());
      }, 100);
    });
  }, []);

  return <>
    <Global styles={css`
      a {
        text-decoration: none;
        color: #333;
        &:hover {
          text-decoration: underline;
        }
      }
    `} />
    <div css={css`
      padding: 12px 0 8px;
      color: #333;
      font-weight: bold;
      font-size: 30px;
      text-align: center;
      font-style: italic;
      text-decoration: underline;
    `}>
      <a href="/">awesomeai.website</a>
    </div>
    <div css={css`
      display: flex;
      justify-content: center;
    `}>
      <div css={css`
        display: flex;
      `}>
        {
          list.map((categoryList, index) => <div key={index}>
            {
              categoryList.map(obj => <div css={css`
                width: ${WIDTH}px;
                background: #eee;
                margin: 16px ${MARGIN}px;
                padding: 12px ${PADDING}px;
                border-radius: 4px;
                box-shadow: rgba(0,0,0,0.2) 10px 10px 20px;
                transition: all 0.5s;
                &:hover {
                  box-shadow: rgba(0,0,0,0.2) 10px 10px 40px;
                }
              `} key={obj.category}>
                <div css={css`
                  font-size: 22px;
                  text-align: center;
                `}>{obj.category}</div>
                <ul css={css`
                  list-style: none;
                  margin: 4px 0 0;
                  padding: 0;
                `}>
                {
                  obj.list.map(item => <li css={css`
                    height: 30px;
                    line-height: 30px;
                    flex: 0 0 140px;
                  `} key={item.url}>
                    <a css={css`
                      background: url(${item.logo}) left center no-repeat;
                      background-size: 16px 16px;
                      padding-left: 22px;
                    `} href={item.url} target="_blank">{item.title}</a>
                  </li>)
                }
                </ul>
              </div>)
            }
          </div>)
        }
      </div>
    </div>
    <div css={css`
      text-align: center;
      margin: 60px 0 30px;
    `}>
      <a css={css`
        background: url(https://cdn.you.com/img/images/footer/logo_round_twitter.svg) left center no-repeat;
        background-size: 16px 16px;
        padding-left: 22px;
        margin-right: 8px;
      `} href="" target="_blank">twitter</a>
      <a css={css`
        background: url(https://cdn.you.com/img/images/footer/logo_round_twitter.svg) left center no-repeat;
        background-size: 16px 16px;
        padding-left: 22px;
        margin-right: 8px;
      `} href="" target="_blank">about</a>
    </div>
  </>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
