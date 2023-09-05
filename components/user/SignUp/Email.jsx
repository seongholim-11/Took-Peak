export default function Email({isValidEmail, setEmailValue, setIsValidEmail}) {
    // 입력값이 변경될 때 호출되는 이벤트 핸들러
    const handleEmailChange = (e) => {
        const value = e.target.value;

        // 정규식을 사용하여 이메일 주소 유효성 검사
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailRegex.test(value);

        setEmailValue(value); // 입력값 업데이트
        setIsValidEmail(isValid); // 이메일 유효성 상태 업데이트
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
            <input
                name="email"
                id="email"
                type="text"
                placeholder="example@email.com"
                onChange={handleEmailChange}
            />
        </>
    );
}
