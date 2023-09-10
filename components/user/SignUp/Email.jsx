export default function Email({
    isValidEmail,
    setEmailValue,
    setIsValidEmail,
    emailValue,
}) {
    let isValid = false
    // 입력값이 변경될 때 호출되는 이벤트 핸들러
    const handleEmailChange = (e) => {
        let value = e.target.value;

        // 정규식을 사용하여 이메일 주소 유효성 검사
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        isValid = emailRegex.test(value);

        setEmailValue(value); // 입력값 업데이트
        // setIsValidEmail(isValid); // 이메일 유효성 상태 업데이트
    };
    // form 입력 값들 서버에 전송 및 요청
    const emailCheck = async () => {
        if (emailValue) {
            // fetch를 사용하여 데이터 서버로 전송
            const response = await fetch("/api/auth/emailcheck", {
                method: "POST",
                body: emailValue,
            });
            
            if (response.ok) {
                // 성공적으로 서버에 전송됨
                // 필요한 처리를 수행
                const successMessage = await response.json();
                setIsValidEmail(isValid); // 이메일 유효성 상태 업데이트
                alert(successMessage);
            } else {
                // 서버로부터 오류 응답을 받음
                const errorResponse = await response.json();
                setIsValidEmail(isValid); // 이메일 유효성 상태 업데이트
                setEmailValue("");
                alert(errorResponse);
                // 오류 처리
            }
        }else{
            alert("입력한 이메일을 확인해주세요.")
        }
    };
    return (
        <>
            <label htmlFor="email">
                E-mail{" "}
                {isValidEmail ? (
                    <span
                        style={{
                            color: "blue",
                            marginLeft: "10px",
                            fontSize: "0.5rem",
                        }}
                    >
                        알맞은 Email 형식입니다.
                    </span>
                ) : (
                    <span
                        style={{
                            color: "red",
                            marginLeft: "10px",
                            fontSize: "0.5rem",
                        }}
                    >
                        알맞은 Email 형식으로 입력해주세요.
                    </span>
                )}
            </label>
            <div className="emailInput">
                <input
                    name="email"
                    id="email"
                    type="text"
                    placeholder="example@email.com"
                    value={emailValue || ""}
                    onChange={handleEmailChange}
                />
                <button type="button" onClick={emailCheck}>
                    check
                </button>
            </div>
        </>
    );
}
