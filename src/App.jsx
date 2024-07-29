import './App.css';
import Card from './component/Card';
import Nav from './component/Nav';
import cardData from './component/cardData';

function App() {
  const getCardData = cardData.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <>
      <Nav />
      {getCardData}
    </>
  );
}

export default App;
