import { useRef } from "react";
import "../styles.scss";
export default function InputVerifyCode() {
  const verifyCode = useRef();
  console.log(verifyCode);
  return (
    <span ref={verifyCode}>
      <input
        autoFocus
        className="verifyInput"
        type="text"
        maxLength="1"
        size="1"
        min="0"
        max="9"
        pattern="[0-9]{1}"
        required
      />
      <input
        className="verifyInput"
        type="text"
        maxLength="1"
        size="1"
        min="0"
        max="9"
        pattern="[0-9]{1}"
        required
      />
      <input
        className="verifyInput"
        type="text"
        maxLength="1"
        size="1"
        min="0"
        max="9"
        pattern="[0-9]{1}"
        required
      />
      <input
        className="verifyInput"
        type="text"
        maxLength="1"
        size="1"
        min="0"
        max="9"
        pattern="[0-9]{1}"
        required
      />
      <input
        className="verifyInput"
        type="text"
        maxLength="1"
        size="1"
        min="0"
        max="9"
        pattern="[0-9]{1}"
        required
      />
      <input
        className="verifyInput"
        type="text"
        maxLength="1"
        size="1"
        min="0"
        max="9"
        pattern="[0-9]{1}"
        required
      />
    </span>
  );
}
