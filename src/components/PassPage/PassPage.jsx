export default function PassPage({ prevPage, nextPage, setActualPage }) {
  function goNext() {
    console.log("NEXT", nextPage);
    setActualPage(nextPage);
  }

  function goPrev() {
    console.log("PREVIOUS", prevPage);
    setActualPage(prevPage);
  }

  return (
    <div>
      <button onClick={prevPage ? goPrev : null}>Previous</button>
      <button onClick={nextPage ? goNext : null}>Next</button>
    </div>
  );
}
