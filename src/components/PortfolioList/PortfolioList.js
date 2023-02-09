import "./PortfolioList.scss"

export default function PortfolioList(props) {
  return (
    <div className="skills">
      <li className={props.active ? "portfoliolist active" : "portfoliolist"}
        onClick={() => {
          props.setSelected(props.id)
        }}>
        {props.title}
      </li>
    </div>
  );
}
