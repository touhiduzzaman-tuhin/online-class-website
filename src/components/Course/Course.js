import React from 'react';
import fakeData from '../../fakeData/Course';
import { useState } from 'react';
import CourseDescription from '../CourseDescription/CourseDescription';
import './Course.css';
import CourseCart from '../CourseCart/CourseCart';
import 'bootstrap/dist/css/bootstrap.min.css';

const Course = () => {

    const first15Course = fakeData.slice(0, 15);
    const [courses, setCourses] = useState(first15Course);

    const [selectCourse, setSelectCourse] = useState([]);
    const handleCourse = (course) => {
        const newCourse = [...selectCourse, course];
        setSelectCourse(newCourse);
    }

    return (
        <div className="course row">
            <div className="course-descriptions col-12 col-sm-12 col-md-9 col-lg-9">
                {
                    courses.map(course =>  <CourseDescription handleCourse={handleCourse} course = {course} key={course.courseId}></CourseDescription>)
                }
            </div>

            <div className="course-cart col-8 col-sm-6 col-md-3 col-lg-3">
               <CourseCart selectCourse={selectCourse}></CourseCart>
            </div>
        </div>
    );
};

export default Course;