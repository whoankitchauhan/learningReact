function User({ givingAlert,name}) {
  return (
    <div>
      <button onClick={() => givingAlert(name)}>Click</button>
    </div>
  );
}

export default User;
