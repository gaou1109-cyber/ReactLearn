import {wordArrays} from "./word"
import { useRouter } from "next/router";
import React, { ReactNode, useState } from 'react';

// 表示する画面
const Display = () =>{

    const [count, currentPlayer] = useState(1);
    const router = useRouter();
    const [playerNumber] = useState(router.query.playerNumber);
    const [wolf] = useState(Math.floor( Math.random() * (Number(playerNumber)) ) + 1)

    //人狼のワードを決定
    const [wordNumber] = useState(Math.floor( Math.random() * (Number(wordArrays.length)) ))
    const wordArray = wordArrays[wordNumber]

    var [checked,changeChecked] = useState(false);
    var sampleWord:string = count == wolf ? wordArray.minor : wordArray.majar

    // 「Yes」ならプレイヤー1にワードを見せる
    const checkWord = () =>{
        changeChecked(checked = true);
    } 
    
    //プレイヤーが違う場合
    const wrongPlayer = () =>{
        alert('プレイヤーに'+count+'画面を見せてください')
    }

    // 結果発表
    function resultAnnounce(){
        {
            router.push({
                pathname: "./resultsAnnounce",
                query: { wolf: wolf,wolfWord:wordArray.minor } // ココ
            });
        }
    }

    //ワードを確認した場合
        const confirmWord = () => {
            currentPlayer(count + 1)
            changeChecked(checked = false);
    }

    if(!checked && (Number(playerNumber) >= count)){
        return <DisplayConfirmPlayer count={count} checkWord={()=>checkWord()} wrongPlayer={()=>wrongPlayer()}/>
    }else if(checked && (Number(playerNumber) >= count)){
        return <DisplayCheckWord sampleWord={sampleWord} confirmWord={()=>confirmWord()}/>
    }else if(Number(playerNumber) < count){
        return <DisplayTalk resultAnnounce={()=>resultAnnounce()}/>
    }
}

type DisplayCheckWord = {
    sampleWord:String;
    confirmWord:React.MouseEventHandler<HTMLButtonElement>;
}

    // プレイヤー1にワードを見せる
    const DisplayCheckWord : React.FC<DisplayCheckWord>= ({sampleWord,confirmWord}) =>{
        return (
            <>
                    <p>あなたのワードは{sampleWord}です</p>
                    <button onClick={confirmWord}>確認した</button>
                </>
        )
    } 

    type DisplayConfirmPlayer = {
        count:ReactNode;
        checkWord:React.MouseEventHandler<HTMLButtonElement>;
        wrongPlayer:React.MouseEventHandler<HTMLButtonElement>;
    }

    // プレイヤー1を確認する
    const DisplayConfirmPlayer : React.FC<DisplayConfirmPlayer>= ({count,checkWord,wrongPlayer}) =>{
        return (
            <>
                <p>あなたはプレイヤー{count}ですか</p>
                <button onClick={checkWord}>はい</button>
                <button onClick={wrongPlayer}>いいえ</button>
                </>
        )
    }

    type DisplayTalk = {
        resultAnnounce:React.MouseEventHandler<HTMLButtonElement>;
    }

    const DisplayTalk: React.FC<DisplayTalk>= ({resultAnnounce})=>{
        return (
            <>
                <p>全員にワードが行きわたりました。トークを開始してください</p>
                <button onClick={resultAnnounce}>結果発表</button>
            </>
        )
    }

export default Display;