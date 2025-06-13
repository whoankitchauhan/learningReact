import Student from "./Student";

const College = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px",
        borderBottom: "2px solid black",
      }}
    >
      <h1>{data.name}</h1>
      <ul>
        <li>
          <h3>City:{data.location}</h3>
        </li>
        <li>
          <h3>Package:{data.package}</h3>
        </li>
        <Student student={data.student} />
      </ul>
    </div>
  );
};

export default College;
