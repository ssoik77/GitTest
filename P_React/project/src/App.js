import styles from './App.css';
import './register/Register.js';

const App = () => {
  const openPopup = () => {
    const popupFeatures = "width=800,height=700,top=100,left=550,resizable=no,scrollbars=no"; // 팝업창 크기와 옵션 설정
    window.open(
      "../Register", // 새창에서 띄울 URL 또는 경로
      "회원가입", // 창 이름
      popupFeatures
    );
  };

  return (
    <div id='loginpop'>
    <div className={styles.App}>
      {/* 타이틀 */}
      <header className="App-header">
        <h1 id='postUnderdog'>Post Underdog</h1>
      </header>

      {/* 로그인 폼 */}
      {/* id:영문 대소문자+숫자 pw:영문 대소문자+숫자+특수문자(1개이상)+8~16자리 */}
      <form id='loginUi'>
        <table>
          <tr><input id="id" placeholder="아이디" size="10" pattern="^[a-zA-Z0-9]+$" required /></tr>
          <br/>
          <tr><input id="pw" placeholder="비밀번호" size="10" type="password" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$" required /></tr>
          <tr><button id="loginButton" className={styles.button} type="submit">로그인</button></tr>
        </table>
      </form>

      {/* 회원가입 팝업 */}
      <button id="regiButton" onClick={openPopup} className={styles.button}>회원가입</button>
      
      {/* ID/PW 찾기 버튼 */}
      <button id="findIdPwButton" className={styles.button}>ID/PW 찾기</button>
    </div>
    </div>
  );
};

export default App;
