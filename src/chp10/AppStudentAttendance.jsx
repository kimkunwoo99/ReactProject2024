import React from "react";
import StudentAttendance from "./StudentAttendance";

const students1 = [
    {id:1, name:"이나경", grade:2, major: "인공지능소프트웨어"},
    {id:2, name:"백지헌", grade:3, major: "전기"},
    {id:3, name:"송하영", grade:3, major: "그린에너지"},
    {id:4, name:"박지원", grade:4, major: "시각디자인"},
    {id:5, name:"김건우", grade:1, major: "인공지능소프트웨어"}
];

const students2 = [
    {id:1, name:"김채원", grade:2, major: "인공지능소프트웨어"},
    {id:2, name:"사쿠라", grade:3, major: "전기"},
    {id:3, name:"홍은채", grade:3, major: "그린에너지"},
    {id:4, name:"카즈하", grade:4, major: "시각디자인"},
    {id:5, name:"허윤진", grade:1, major: "인공지능소프트웨어"}
];

function AppStudentAttendance(){
    return(
        <div>
            <StudentAttendance students={students1}/>
            <hr/>
            <StudentAttendance students={students2}/>
        </div>
    );
}

export default AppStudentAttendance