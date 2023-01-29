import React from 'react'
import CoursesCard from './CoursesCard'
import Back from "../common/back/Back"
import OnlineCourses from './OnlineCourses'

const CourseHome = () => {
  return (
    <>
        <Back title='Explore Courses' />
        <CoursesCard />
        <OnlineCourses />
    </>
  )
}

export default CourseHome
