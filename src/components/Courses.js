import React from 'react';
import {
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import CourseContainer from "./courses/CourseContainer";

import { HTMLCourses, CSSCourses, JSCourses } from "../data/courses";
const Courses = (props) => {
  const { match } = props;
  return (
    <div className="main-content courses">
      <div className="course-header group">
        <h2>{props.title}</h2>
        <ul className="course-nav">
          <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
          <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
          <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
        </ul>
      </div>

      {/* Write routes here... */}
      <Route exact path={`${match.path}`} render={() => <Redirect to={`${match.path}/html`} />} />
      <Route path={`${match.path}/html`} render={() => <CourseContainer courses={HTMLCourses} />} />
      <Route path={`${match.path}/css`} render={() => <CourseContainer courses={CSSCourses} />} />
      <Route path={`${match.path}/javascript`} render={() => <CourseContainer courses={JSCourses} />} />

    </div>
  )
};

export default Courses;