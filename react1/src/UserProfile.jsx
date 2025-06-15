import style from "./css/userProfile.module.css";

function UserProfile() {
  return (
    <div className={style.card}>
      <div>
        <img className="img" src="https://picsum.photos/200" alt="" />
      </div>
      <div>
        <h2>Ankit Chauhan</h2>
        <p>Software Developer</p>
      </div>
    </div>
  );
}

export default UserProfile;
