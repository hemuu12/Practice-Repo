function createarr(n) {
    return new Array(n).fill(0);
  }
  export default function Pagination({ totalpage, current, onChange }) {
    let pages = createarr(totalpage).map((a, i) => (
      <button style={{border:"2px solid black",padding:"5px",marginLeft:"5px"}} disabled={current === i + 1} onClick={() => onChange(i + 1)} key={i}>
        {i + 1}
      </button>
    ));
  
    return <div style={{padding:"5px",textAlign:"center",marginTop:"10px"}}>{pages}</div>;
  }
  