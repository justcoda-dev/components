const HomePage = () => {
  return (
    <div>
      <div
        style={{ border: '1px solid #000' }}
        onClick={(e) => {
          console.log('click on wrapper');
        }}
      >
        wpapper
        <button
          disabled
          onClick={() => {
            console.log('click on button');
          }}
        >
          click
        </button>
      </div>
    </div>
  );
};
export default HomePage;
