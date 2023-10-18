const allData = Array.from({ length: 40 }, () =>
  Math.floor(Math.random() * 40)
);
function App() {
  const [currentList, setCurrentList] = React.useState(allData);
  const [originalList] = React.useState(allData);
  const [setSorting] = React.useState(false);
  const [setFiltering] = React.useState(false);

  const handleSortClick = () => {
    setSorting(true);
    setFiltering(false);
    const sortedList = [...currentList].sort((a, b) => a - b);
    setCurrentList(sortedList);
  };

  const handleFilterOddClick = () => {
    setSorting(false);
    setFiltering(true);
    const oddNumbers = originalList.filter((item) => item % 2 !== 0);
    setCurrentList(oddNumbers);
  };

  const handleResetClick = () => {
    setSorting(false);
    setFiltering(false);
    setCurrentList(originalList);
  };
  return (
    <>
      <div className="container">
        <button onClick={handleSortClick}>Sort</button>
        <button onClick={handleFilterOddClick}>Filter Odd Numbers</button>
        {/* added a reset button too, so as to not loose the numbers after
        getting odd numbers */}
        <button onClick={handleResetClick}>Reset</button>
      </div>
      {currentList.map((item, index) => (
        <div key={index}> {item.toString()} </div>
      ))}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("mydiv"));
root.render(<App />);
