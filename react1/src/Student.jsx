const Student = ({student}) => {
  return (
    <div>
      <li>
        <h3>Students</h3>
        {student.map((student, index) => (
          <ul>
            <li key={index}>Name :{student.name}</li>
          </ul>
        ))}
      </li>
    </div>
  );
};

export default Student;
