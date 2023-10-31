import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Canada = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs Canada</title>
        <meta name="description" content="Explore academic jobs in Canada and discover a range of opportunities in Canada university jobs such as teaching, research or administrative positions." />
        <meta name="keywords" content="academic jobs in Canada, Canada university jobs" />
      </Helmet>
      <div className="pt-[8rem] flex flex-col items-center justify-center" > 
      <img
           src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-canada-min.png"
          
            alt="AcademicJobs Canada"
            className=" w-[20rem] mb-[1rem] "
          /></div> 
      <SearchBox />

      <div className=" mt-[10rem] " > 
      <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
                <li><Link to="/Canada/lecturer/" >	Lecturer</Link></li>
                  <li><Link to="https://www.academicjobs.com/Canada/research/" >	Research </Link></li>
                  <li><Link to="https://www.academicjobs.com/Canada/professor/" >	Professor</Link></li>
                  </ul>
                  <li><Link to="https://www.academicjobs.com/Canada/executive/" >	Executive</Link></li>
                  <li><Link to="https://www.academicjobs.com/Canada/admin/" >Admin</Link></li>
                  <li><Link to="https://www.academicjobs.com/Canada/hr/" >	HR</Link></li>
                  <li><Link to="https://www.academicjobs.com/Canada/student/" >	Student</Link></li>
              
                </ul>
                </div>


                <div className=" mt-4 " > 
                <ul className="faculty-container flex  gap-4 items-center justify-center text-[#f4a10c] ">
                 
                  <li><Link to="https://www.academicjobs.com/online/" >	Online </Link></li>
                  <li><Link to="https://www.academicjobs.com/jobs/remote/" >	Remote</Link></li>
                
                  <li><Link to="https://www.academicjobs.com/jobs/full-time/" >Full-Time</Link></li>
                  <li><Link to="https://www.academicjobs.com/jobs/part-time/" >	Part-Time</Link></li>
                  <li><Link to="/jobs/casual/" >	Casual</Link></li>
                </ul>
                </div>
                

            
          
          <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" > 
      <a>▼</a></div> 

      <div className="blurb text-left py-8 pt-[30rem] ">
        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">ALL YOUR BEST CANADIAN UNIVERSITY JOBS</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7 pb-8">Academic jobs is more than just a listing of vacancies for canada. It is also a platform for networking, learning, and career development. Academic jobs is updated daily with new postings from universities, colleges, research institutes, and other organizations across Canada. You can browse by location, discipline, level, type, and keywords to find the best match for your qualifications and interests.</p>
          <p className="font-semibold"></p>
        </div>
      </div>
      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1">
          <div>
          <h2 className="text-1xl font-bold py-3 px-7 border-[#f4a10c] border-2  text-[#f4a10c] rounded-3xl shadow-md ">ALL HIGHER ED JOBS IN CANADA BY UNIVERSITY  </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 '><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Alberta</Link></li>
            <li><Link to="/employers/university-of-alberta/3837/">University of Alberta</Link></li>
            <li><Link to="/employers/university-of-calgary/12631/">University of Calgary</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Quebec</Link></li>
            <li><Link to="/employers/mcgill-university/3162/">McGill University</Link></li>
            <li><Link to="/employers/universite-de-montreal/3836/">Universite De
              Montreal</Link></li>
            <li><Link to="/employers/university-of-waterloo/3838/">University of
              Waterloo</Link></li>
            <li><Link to="/employers/laval-university/12443">Laval University</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Ontario</Link></li>
            <li><Link to="/employers/university-of-toronto//3134/">University of
              Toronto</Link></li>
            <li><Link to="/employers/university-of-british-columbia/3157/">University of
              British Columbia</Link></li>
            <li><Link to="/employers/simon-fraser-university/10280/">Simon Fraser University</Link></li>
            <li><Link to="/employers/mcmaster-university/3835/">McMaster University</Link></li>
          </ul>
          <ul>
            <Link to="/JobSearch/" className='text-[#f4a10c] font-bold'></Link>
            <Link to="/JobSearch/" className='text-[#f4a10c] font-bold'></Link>
            <Link to="/JobSearch/" className='text-[#f4a10c] font-bold'></Link>
            <li><Link to="/employers/university-of-ottawa/12910/">University of Ottawa</Link></li>
            <li><Link to="/employers/york-university/13421/">York University</Link></li>
            <li><Link to="/employers/queens-university/9836/">Queen's University</Link></li>
          </ul>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
export default Canada