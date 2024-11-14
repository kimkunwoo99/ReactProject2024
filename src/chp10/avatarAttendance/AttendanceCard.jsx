import React from "react";
import './AttendanceCard2.css'
import img1 from './imgs/1.jpg'

    const students = [
        {id:1, name:"윤이나", grade:2, major: "인공지능소프트웨어",avatar: img1},
        {id:2, name:"백지헌", grade:3, major: "전기",avatar:"https://randomuser.me/api/portraits/women/2.jpg"},
        {id:3, name:"송하영", grade:3, major: "그린에너지설비",avatar:"https://randomuser.me/api/portraits/women/3.jpg"},
        {id:4, name:"박지원", grade:4, major: "시각디자인",avatar:"https://randomuser.me/api/portraits/women/4.jpg"},
        {id:5, name:"카즈하", grade:3, major: "인공지능소프트웨어",avatar:"https://randomuser.me/api/portraits/women/5.jpg"},
        {id:6, name:"김채원", grade:4, major: "메타버스컨텐츠",avatar:"https://randomuser.me/api/portraits/women/6.jpg"},
        {id:7, name:"허윤진", grade:2, major: "그린에너지설비",avatar:"https://randomuser.me/api/portraits/women/7.jpg"},
        {id:8, name:"사쿠라", grade:2, major: "인공지능소프트웨어",avatar:"https://randomuser.me/api/portraits/women/8.jpg"},
        {id:9, name:"장원영", grade:2, major: "인공지능소프트웨어",avatar:"https://randomuser.me/api/portraits/women/9.jpg"},
        {id:10, name:"카리나", grade:2, major: "인공지능소프트웨어",avatar:"https://randomuser.me/api/portraits/women/10.jpg"}
    ];

function AttendanceCard(){
    return(
        <div className="attendance-domContainer">
            <h2 className="attendance-title">학생 사진 출석부</h2>
            <div className="card-container">
                {
                    students.map((student)=>(
                        <div className="student-card">
                            <img src={student.avatar} alt={student.name} className="student-avatar"/>
                            <div className="student-info">
                                <h3>{student.name}</h3>
                                <p>{student.grade}학년 | {student.major}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AttendanceCard;