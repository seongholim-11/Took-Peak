import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import { BiArrowBack } from "react-icons/bi";

export default function Back() {
    const router = useRouter();
    function onBackClick() {
        router.back();
    }

    // 글쓴이와 현재 로그인된 유저 비교
    
    return (
        <div className="ped">
            {/* 뒤로가기 버튼을 누르면 해당 글의 카테고리 페이지로 이동 */}
            <div className="p">
                <Button variant="outline-primary" onClick={onBackClick}>
                    <BiArrowBack />
                </Button>
            </div>
            <div className="ed">
                <Button variant="outline-primary">Edit</Button>
                <Button variant="outline-danger">Delete</Button>
            </div>
        </div>
    );
}
