import {wordArrays} from "./word"
import { useRouter } from "next/router";
import React, { useState } from 'react';


// 表示する画面
function Display(){
const [count, currentPlayer] = useState(1);
const router = useRouter();
const [playerNumber] = useState(router.query.playerNumber);
const [wolf] = useState(Math.floor( Math.random() * (Number(playerNumber)+1) ))

//人狼のワードを決定
const [wordNumber] = useState(Math.floor( Math.random() * (Number(wordArrays.length)+1) ))
const wordArray = wordArrays[wordNumber]

var [checked,changeChecked] = useState(false);
var sampleWord = count == wolf ? wordArray.minor : wordArray.majar

    // プレイヤー1を確認する
    function DisplayConfirmPlayer(){
        return (
            <>
                <p>あなたはプレイヤー{count}ですか</p>
                <button onClick={checkWord}>はい</button>
                <button onClick={wrongPlayer}>いいえ</button>
                </>
        )
    }
    
    // プレイヤー1にワードを見せる
    function DisplayCheckWord(){
        return (
            <>
                    <p>あなたのワードは{sampleWord}です</p>
                    <button onClick={confirmWord}>確認した</button>
                </>
            )
    } 

    function DisplayTalk(){
        return (
            <>
                <p>全員にワードが行きわたりました。トークを開始してください</p>
                <button onClick={resultAnnounce}>結果発表</button>
            </>
        )
    }

    // 「Yes」ならプレイヤー1にワードを見せる
    function checkWord(){
        changeChecked(checked = true);
    } 

    //プレイヤーが違う場合
    function wrongPlayer(){
        alert('プレイヤーに'+count+'画面を見せてください')
    }

    //ワードを確認した場合
    function confirmWord(){
        currentPlayer(count + 1)
        changeChecked(checked = false);
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

    if(!checked && (Number(playerNumber) >= count)){
        return <DisplayConfirmPlayer />
    }else if(checked && (Number(playerNumber) >= count)){
        return <DisplayCheckWord />
    }else if(Number(playerNumber) < count){
        return <DisplayTalk />
    }
}

export default Display;