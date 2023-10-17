interface Card {
  title: string;
  text: string;
  value: string;
}

interface DashboardListProps {
  contentList: Card[];
}

const DashboardCard = (content: Card) => {
  return (
    <div className="card">
      <div>{content.title}</div>
      <div className="grid cols-3">
        <div className="card-icon"></div>
        <div className="gold-text">{content.value}</div>
        <div></div>
      </div>
      <div className="line-1">{content.text}</div>
    </div>
  );
};

const DashboardList = (props: DashboardListProps) => {
  return (
    <div className="project-props">
      {props?.contentList?.map((data: Card) => {
        return <DashboardCard key={data?.title} {...data} />;
      })}
    </div>
  );
};

export default DashboardList;
