import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {
    console.log("Category:", props.category);
    console.log("Courses:", props.courses);

    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    //   let allCourse = [];

    // It Returns list of all courses received from the api Response

    // const getCourses = () => {
    //     Object.values(props.courses).forEach((courseCategory) => {
    //         courseCategory.forEach((course) => {
    //             allCourse.push(course);
    //         });
    //     });
    //     return allCourse;
    // };

    function getCourses() {
        if (!props.courses) return [];
        
        if (category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                if (Array.isArray(array)) {
                    array.forEach((courseData) => {
                        allCourses.push(courseData);
                    });
                }
            });
            return allCourses;
        } else {
            return props.courses[category] || [];
        }
    }

    const courses = getCourses();
    console.log("Filtered courses:", courses);

    //   console.log(allCourse);
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {courses.map((course) => (
                <Card 
                    course={course} 
                    key={course.id} 
                    likedCourses={likedCourses} 
                    setLikedCourses={setLikedCourses} 
                />
            ))}
        </div>
    );
};

export default Cards;
