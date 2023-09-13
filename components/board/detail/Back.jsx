import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import { BiArrowBack } from "react-icons/bi";

export default function Back() {
    const router = useRouter();
    function onBackClick() {
        router.back();
    }
    return (
        <div className="prev">
            {/* 뒤로가기 버튼을 누르면 해당 글의 카테고리 페이지로 이동 */}
            <Button variant="outline-primary" onClick={onBackClick}>
                <BiArrowBack />
            </Button>
        </div>
    );
}
