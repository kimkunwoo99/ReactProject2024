import React from "react";
import Card from "./Card";

function ProfileCard(){
    return(
        <div>
        <Card title="Konumon" backgroundColor="#BCE55C">
            <p>안녕하세요 김건우입니다.</p>
            <p>리액트로 카드형 템플릿을 작성중입니다.</p>
        </Card>
        <Card title="JI HYEON" backgroundColor="#BCE55C">
            <p>안녕하세요 백지헌입니다.</p>
            <p>리액트로 카드형 템플릿을 작성중입니다.</p>
        </Card>
        <Card title="Ha young" backgroundColor="#BCE55C">
            <p>안녕하세요 송하영입니다.</p>
            <p>리액트로 카드형 템플릿을 작성중입니다.</p>
        </Card>
        </div>
    );
}


export default ProfileCard