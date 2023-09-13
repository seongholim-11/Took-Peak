export default function Password({
    setPasswordValue,
    setIsValidPassword,
    setConfirmPasswordValue,
    isValidConfirmPassword,
    setIsValidConfirmPassword,
    passwordValue,
    isValidPassword,
}) {
    // 입력값이 변경될 때 호출되는 이벤트 핸들러
    const handlePasswordChange = (e) => {
        const value = e.target.value;

        // 정규식을 사용하여 이메일 주소 유효성 검사
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/;
        const isValid = passwordRegex.test(value);

        setPasswordValue(value); // 입력값 업데이트
        setIsValidPassword(isValid); // 이메일 유효성 상태 업데이트
    };

    // 입력값이 변경될 때 호출되는 이벤트 핸들러
    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;

        if (passwordValue === value) {
            setConfirmPasswordValue(value); // 입력값 업데이트
            setIsValidConfirmPassword(true); // 이메일 유효성 상태 업데이트
        } else {
            setIsValidConfirmPassword(false); // 이메일 유효성 상태 업데이트
        }
    };
    return (
        <>
            {" "}
            <label htmlFor="password">
                Password{" "}
                {isValidPassword ? (
                    <span
                        style={{
                            color: "blue",
                            marginLeft: "10px",
                            fontSize: "0.5rem",
                        }}
                    >
                        알맞은 비밀번호입니다.
                    </span>
                ) : (
                    <span
                        style={{
                            color: "red",
                            marginLeft: "10px",
                            fontSize: "0.5rem",
                        }}
                    >
                        영어,숫자, 특수문자를 포함하여 6자 이상 입력해주세요.
                    </span>
                )}
            </label>
            <input
                name="password"
                id="password"
                type="password"
                placeholder="password"
                onChange={handlePasswordChange}
            />
            <label htmlFor="Confirmpassword">
            Confirm Password{" "}
                {isValidConfirmPassword && isValidPassword ? (
                    <span
                        style={{
                            color: "blue",
                            marginLeft: "10px",
                            fontSize: "0.5rem",
                        }}
                    >
                        비밀번호가 일치합니다.
                    </span>
                ) : passwordValue.length > 0 ? (
                    <span
                        style={{
                            color: "red",
                            marginLeft: "10px",
                            fontSize: "0.5rem",
                        }}
                    >
                        비밀번호가 불일치합니다.
                    </span>
                ) : (
                    ""
                )}
            </label>
            <input
                name="password"
                id="Confirmpassword"
                type="password"
                placeholder="confirm password"
                onChange={handleConfirmPasswordChange}
            />
        </>
    );
}
