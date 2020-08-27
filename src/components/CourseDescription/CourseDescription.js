import React from 'react';
import './CourseDescription.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart, faShare, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const CourseDescription = (props) => {

    const {name, price, totalVideos, totalQuizzes, totalStudents, courseType, courseRating, courseImage, instructorName, instructorImage, instructorStudents, instructorRating, instructorExpert} = props.course;

    return (
        
        <div className="main-description">
           
            <div className="row">
                <div className=" col-12 col-lg-12 col-md-12 col-sm-12">
                    <h3 className="text-center"> Course -- {name} </h3>
                    <hr/>
                </div>
            </div>

            <div className = "course-description row">
                <div className ='course-side col-12 col-sm-12 col-md-12 col-lg-6'>
                    <div>
                        <img className="course-img ml-3" src={courseImage} alt=""/>
                    </div>
                    <div className="course-price">
                        <p>Course Price : ${price}</p>
                        <p>Course Rating : {courseRating} </p>
                        <p>Total Students : {totalStudents} </p>
                        <p>Total Quizzes : {totalQuizzes} </p>
                        <p>Total Video : {totalVideos}</p>                 
                    </div>              
                </div>

            
                <div className="instructor-side col-12 col-sm-12 col-md-12 col-lg-6">
                    <div>
                        <img className='instructor-img ml-3' src= {instructorImage} alt=""/>
                    </div>
                    <div>
                        <h5>Instructor Details</h5>
                        <hr/>
                        <p>Name : {instructorName} </p>
                        <p>He is Expert On :  {instructorExpert}</p>
                        <p>Students : {instructorStudents} </p>
                        <p>Rating : {instructorRating}</p>

                        
                    </div>
                
                </div>
                
            </div>

            <div className="text-center mb-3">

                <Button variant="warning" size="md"> <FontAwesomeIcon icon={faHeart} /> Wishlist</Button>{' '}

                <Button variant="danger" size="md"> <FontAwesomeIcon icon={faShare} /> Share</Button>{' '}

                <Button variant="primary" size="md" onClick={ () => props.handleCourse(props.course)} > <FontAwesomeIcon icon={faCartPlus} /> Enroll</Button>{' '}
            </div>
        </div>
    );
};

export default CourseDescription;