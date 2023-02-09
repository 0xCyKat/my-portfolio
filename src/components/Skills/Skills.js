import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Skills.scss";
import { programmingPortfolio, PentestingPortfolio, WebDevPortfolio } from "../../data"

export default function Skills() {

  const [selected, setSelected] = useState("programming");
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'programming',
      title: 'Programming'
    },

    {
      id: 'pentesting',
      title: 'Pentesting',
    },

    {
      id: 'web',
      title: 'Web Development',
    },

  ];

  useEffect(
    () => {

      switch (selected) {
        case "programming": setData(programmingPortfolio);
          break;
  
        case "pentesting": setData(PentestingPortfolio);
          break;
  
        case "web": setData(WebDevPortfolio);
          break;
  
        default:
          setData(programmingPortfolio);
  
      }
  
    }, [selected]
  );

  return (
    <>
      <div className="skills" id="skills">
      <h1>Skills</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
          );
        })}
      </ul>
      <div className="container">
        {data.map((d) => {
          return (
            <div className="item">
              <img src= {d.img} alt="" />
              <h3><a href={d.link}>{d.title}</a></h3>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
