import React from 'react';
import './CourseCart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSave} from '@fortawesome/free-solid-svg-icons';

const CourseCart = (props) => {
    const selectCourse = props.selectCourse;

    const totalCourseCost = selectCourse.reduce( (sum, course) => sum + course.price, 0);

    return (
        <div>
            <h2 className='text-center'>Course Cart</h2>
            <h3>Total Enrolled Course : {selectCourse.length} </h3>
            <h3>Total Cost : ${totalCourseCost} </h3>
            <hr/>
           
            {
                selectCourse.map(course => 
                    <div className='course-cart-add'>
                        <p> {course.name} Course Added </p>
                        
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-8 col-lg-6 mb-2">
                                <img style={{height: '50px', width: '100px'}} src={course.courseImage} alt=""/>
                            </div>
                            <div className="col-6 col-sm-6 col-md-8 col-lg-6">
                                <Button variant="info" size="md"> <FontAwesomeIcon icon={faSave} /> Enrolled</Button>{' '}
                            </div>

                        </div>

                    </div>                       
                )
            }
        </div>
    );
};

export default CourseCart;