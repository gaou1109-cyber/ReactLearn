import { useRouter } from "next/router";
import { useState } from 'react';

// 結果を発表する

const AnnounceResult = () => {
    const router = useRouter();
    const [wolf] = useState(router.query.wolf);
    const [wolfWord] = useState(router.query.wolfWord);
    return (
        <>
            <p>今回の人狼はプレイヤー「{wolf}」で、ワードは「{wolfWord}」です！</p>
            <button onClick={tryAgain}>もう一度プレーをする</button>
        </>
    )

    function tryAgain(){
        router.push('./input');
    }
}
export default AnnounceResult;