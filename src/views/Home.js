import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import category from "../utils/category.json";
import position from "../utils/position.json";
import hr from "../utils/hr.json";
import research from "../utils/research.json";
import lecturer from "../utils/lecturer.json";
import professor from "../utils/professor.json";
import industry from "../utils/industry.json";
import executive from "../utils/executive.json";
import student from "../utils/student.json";
import admin from "../utils/admin.json";
import cities from "../utils/cities.json";
import careerAdvice from "../utils/careerAdvice";
import { Helmet } from "react-helmet";
import DispatchLink from '../components/DispatchLink'
const Home = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  const region = useSelector((state) => state.posts.region)
  console.log(region)
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (region !== "Global") {
      //a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
      //dispatch(setRegion(countryMappings[country.toLowerCase()]))
      //dispatch(setSearchJobCriteria(a))
      //navigate(`/jobs`)
      navigate("/jobs/", { state: { q: keyWordRef.current.value.trim(), l: countryMappings1[region].searchLocation } });
    } else {
      const fetchLocation1 = async () => {
        try {
          const response = await fetch("https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66");
          const result = await response.json();
          return result.country.name
        } catch (error) {
          return ""
        }
      }
      fetchLocation1()
        .then(country => {
          //sessionStorage.setItem("location", countryMappings[country.toLowerCase()]);
          //alert(countryMappings[country.toLowerCase()])
          //alert(countryMappings[country.toLowerCase()])
          dispatch(setRegion(countryMappings[country.toLowerCase()]))
          //a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
          //alert(region)
          //dispatch(setSearchJobCriteria(a)) 
          //alert(countryMappings1[sessionStorage.getItem("location")].searchLocation)
          navigate("/jobs/", { state: { q: keyWordRef.current.value.trim(), l: countryMappings1[countryMappings[country.toLowerCase()]].searchLocation } });
          //navigate(`/jobs/${countryMappings1[sessionStorage.getItem("location")].searchLocation}`);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  };
  return (
    <div className='px-7'>
      <div className="bg-white min-h-screen flex flex-col items-center  justify-center ">
        <div className='h-[25vh] flex flex-col items-end justify-end'>
          <Helmet>
            <title>Academic Jobs: Academic, research and science positions locally and globally.</title>
            <meta name="description" content="Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily." />
            <meta name="keywords" content="Academic Jobs. Higher Ed Jobs, Academic positions, University Jobs, College Jobs" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Academic Jobs",
                    "url": "https://www.academicjobs.com/",
                    "description": "Find online and remote university jobs at AcademicJobs.  Browse the largest number of academic jobs online in your country and worldwide."
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Find Academic Jobs",
                    "url": "https://www.academicjobs.com/jobs/",
                    "description":"Browse thousands of faculty, lecturer, research, and science positions in various disciplines and locations. Apply online and get hired today."
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Academic Jobs Online",
                    "url": "https://www.academicjobs.com/online/",
                    "description":"Academic jobs online allow students, graduates, or professionals with the opportunity to earn income, gain valuable work experience, develop employability skills."
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "HR Jobs",
                    "url": "https://www.academicjobs.com/hr/",
                    "description": "The largest number of university HR jobs online.Find your next HR role at a top university"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Research Jobs",
                    "url": "https://www.academicjobs.com/research/",
                    "description": "Seek and find all academic research opportunities today. Search for jobs by salary, location, and more on Academic Jobs"
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Executive Jobs",
                    "url": "https://www.academicjobs.com/executive/",
                    "description": "Find President, Dean, Chancellor, Dept Head and Provost jobs"
                  },
                  {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "Lecturing Jobs",
                    "url": "https://www.academicjobs.com/lecturer/",
                    "description": "Lecture anywhere in the world in your academic specialty"
                  }
                  ,
                  {
                    "@type": "ListItem",
                    "position": 8,
                    "name": "Student Jobs on Campus",
                    "url": "https://www.academicjobs.com/student/",
                    "description": "Find student jobs here.  Sign up for job alerts today"
                  },
                  {
                    "@type": "ListItem",
                    "position": 9,
                    "name": "Academic Happiness and university life hacks",
                    "url": "https://www.academicjobs.com/academic-happiness/",
                    "description": "Find the secret to academic happiness.  Subscribe and get tips on navigating university life, learning and career."
                  }
                  ,
                  {
                    "@type": "ListItem",
                    "position": 10,
                    "name": "Post A Job",
                    "url": "https://www.academicjobs.com/post-job/",
                    "description": "Easily post a job on Academic Jobs – attract top academic talent locally and globally."
                  },
                  {
                    "@type": "ListItem",
                    "position": 11,
                    "name": "Jobs in Australia",
                    "url": "https://www.academicjobs.com/Australia/",
                    "description": "Australia’s number one university job website.  All the jobs of all the universities in Australia"
                  },
                  {
                    "@type": "ListItem",
                    "position": 12,
                    "name": "Jobs in the United States",
                    "url": "https://www.academicjobs.com/USA/",
                    "description": "Harvard, MIT, UCLA, Yale and Stanford university jobs.University & Academic Jobs in the USA.Browse; Search; Apply"
                  },
                  {
                    "@type": "ListItem",
                    "position": 13,
                    "name": "Jobs in the UK",
                    "url": "https://www.academicjobs.com/UK/",
                    "description": "Oxford, Cambridge, UCL, LSE and Imperial, Leeds university jobs."
                  },
                  {
                    "@type": "ListItem",
                    "position": 14,
                    "name": "Join the Global Academic Talent Pool",
                    "url": "https://www.academicjobs.com/talent-pool/",
                    "description": "Get headhunted by top ranked universities.  Collaborated with award winning academics globally. Get academic job alerts"
                  }
                ]
              })}
            </script>
          </Helmet>
          <img
            // src="https://academicjobs.s3.amazonaws.com/img/_misc/academic-jobs-logo.png"
            src="academicJobsLogo.png"
            alt="AcademicJobs Logo"
            className="pl-4 w-[20rem] mb-[1rem] "
          />
        </div>
        <div className='w-full md:w-3/5 h-[60vh] flex flex-col items-top '>
          <form className=' flex flex-col gap-1 items-center md:items-end w-full' onSubmit={handleFormSubmit}>
            <div className="flex flex-col  gap-2 md:flex-row md:gap-0 mx-18 w-full  mt-5 md:border rounded-full p-2 md:shadow-md ">
              <input
                type="text"
                className="flex-grow px-4 py-2 focus:outline-none border rounded-full shadow-md md:border-none md:shadow-none"
                placeholder="Jobs Search"
                ref={keyWordRef}
              />
              <button className="px-4 py-2 bg-[#f4a10c] text-white rounded-full shadow-md hover:bg-orange-600 font-bold"
                type="submit"
              >
                Search In Your Country
              </button>
            </div>
            <button className='pr-6 text-[#f4a10c] underline font-bold '
              onClick={() => {
                const a = {}
                if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
                dispatch(setSearchJobCriteria(a))
                dispatch(setRegion('Global'))
                navigate(`/jobs/`)
              }}
            ><a>Or Search Globally</a></button>
          </form >

        

          <div className=" mt-[3rem] " >
          <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
              <li><Link to="/lecturer/" >	Lecturer</Link></li>
              <li><Link to="https://www.academicjobs.com/research/" >	Research </Link></li>
              <li><Link to="https://www.academicjobs.com/professor/" >	Professor</Link></li>
              </ul>
              <li><Link to="https://www.academicjobs.com/executive/" >	Executive</Link></li>
              <li><Link to="https://www.academicjobs.com/admin/" >Admin</Link></li>
              <li><Link to="https://www.academicjobs.com/hr/" >	HR</Link></li>
              <li><Link to="https://www.academicjobs.com/student/" >	Student</Link></li>
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
            <a >▼</a></div>
        </div>
      </div>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-3xl py-4 px-6 bg-[#f4a10c] text-white rounded-full mt-20 shadow-xl border-4">ACADEMIC JOBS: Academic, research and science positions locally and globally</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className=" px-7 ">Find the best academic positions and administrative jobs in higher ed. Search for academic jobs, college careers and faculty positions online. Seek and apply for lecturer, research, uni admin and senior academic jobs in every university in your country or globally. Whether you are a professor, researcher, lecturer, or administrator, you can find the latest opportunities in higher education on academic jobs online.</p>
          <p className=" px-7"></p>
          <p className=" px-7"></p>
        </div>
      </div>

      
      <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">Top Cities for Uni Jobs</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-2 grid md:grid-cols-4 gap-8 py-2 px-7">
            
          <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="/USA/" className='text-[#f4a10c] font-bold'>USA</Link></li>
                <ul className="innerUL">
                <li><Link to="/boston/" >Boston</Link></li>
                  <li><Link to="/new-york/" >New York</Link></li>
                  <li><Link to="/los-angeles/" >Los Angeles</Link></li>
                  <li><Link to="/san-francisco/" >San Francisco</Link></li>
                  <li><Link to="/chicago/" >Chicago</Link></li>
                  <li><Link to="/san-diego/" >San Diego</Link></li>
                  <li><Link to="/washington-dc/" >Washington DC</Link></li>
                  <li><Link to="/philadelphia/" >Philadelphia</Link></li>
                  <li><Link to="/atlanta/" >Atlanta</Link></li>
                  <li><Link to="/seattle/" >Seattle</Link></li>
                  <li><Link to="/pittsburgh/" >Pittsburgh</Link></li>
                  <li><Link to="/new-haven/" >New Haven</Link></li>
              
                </ul>
              </ul>
            </div>
        
           
            <div className="column">
              <ul className="">
              <li className='mb-1 mt-4'><Link to="/Australia/" className='text-[#f4a10c] font-bold'>Australia</Link></li>
                <ul className="innerUL">
                  <li><Link to="/melbourne/" >Melbourne</Link></li>
                  <li><Link to="/sydney/" >Sydney</Link></li>
                  <li><Link to="/brisbane/" >Brisbane</Link></li>
                  <li><Link to="/gold-coast/" >Gold Coast</Link></li>
                  <li><Link to="/canberra/" >Canberra</Link></li>
                  <li><Link to="/perth/" >Perth</Link></li>
                  <li><Link to="/adelaide/" >Adelaide</Link></li>


                </ul>
                <li className='mb-1 mt-4'><Link to="/UK/" className='text-[#f4a10c] font-bold'>UK</Link></li>
                <ul className="innerUL">
                  <li><Link to="/london/" >London</Link></li>
                  <li><Link to="/edinburgh/" >Edinburgh</Link></li>
              
                  <li><Link to="/manchester/" >Manchester</Link></li>
                
               
                </ul>
              </ul>
            </div>
          
            <div className="column">
              <ul className="">
              <li className='mb-1 mt-4'><Link to="/Canada/" className='text-[#f4a10c] font-bold'>Canada</Link></li>
                <ul className="innerUL">
                  <li><Link to="/toronto/" >Toronto</Link></li>
                  <li><Link to="/vancouver/" >Vancouver</Link></li>
                  <li><Link to="/montreal/" >Montreal</Link></li>
                </ul>
             

                <li className='mb-1 mt-4'><Link to="/Asia/" className='text-[#f4a10c] font-bold'>Asia</Link></li>
                <ul className="innerUL">
                <li><Link to="/hong-kong/" >Hong Kong</Link></li>
                  <li><Link to="/beijing/" >Beijing</Link></li>
                
                  <li><Link to="/tokyo/" >Tokyo</Link></li>
                  <li><Link to="/singapore/" >Singapore</Link></li>
                
                  
                
                </ul>
              
              </ul>
            </div>

            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="/Europe/" className='text-[#f4a10c] font-bold'>Europe</Link></li>
                <ul className="innerUL">
                
                  <li><Link to="/paris/" >Paris</Link></li>
                
                  <li><Link to="/zurich/" >Zurich</Link></li>
                  <li><Link to="/munich/" >Munich</Link></li>
                 
                
                  <li><Link to="/amsterdam/" >Amsterdam</Link></li>
                  <li><Link to="/copenhagen/" >Copenhagen</Link></li>
                  <li><Link to="/stockholm/" >Stockholm</Link></li>            
             
                  </ul>
               
              </ul>
            </div>
           
        


          </div>
        </div>
      </div>
    


      <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">Top Academic Jobs Today</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4 '><Link to="https://www.academicjobs.com/jobs/Assistant-Associate-Professor,-Fall-2024---Artificial-Intelligence-in-Aerospace-Engineering/70907" className='text-blue-500 font-bold'>Assistant/Associate Professor, Fall 2024 - Artificial Intelligence in Aerospace Engineering</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >The University of Texas at Austin</Link></li>
                  <li><Link to="" >Austin, TX, USA</Link></li>
                  <li><Link to="" >11 Dec, 2023</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/College-of-Veterinary-Medicine:-Open-Rank-Academic-(NTT-or-TT)---Equine-Emergency-Services/66803" className='text-blue-500 font-bold'>College of Veterinary Medicine: Open Rank Academic (NTT or TT) - Equine Emergency Services</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >University of Missouri - Columbia</Link></li>
                  <li><Link to="" >Columbia, MO, USA</Link></li>
                  <li><Link to="" >25 Nov, 2023</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/Assistant-Professor-in-Theatre-&-Dance-with-a-focus-on-Designing-Just-Futures/65517" className='text-blue-500 font-bold'>Assistant Professor in Theatre & Dance with a focus on Designing Just Futures</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >University of California San Diego</Link></li>
                  <li><Link to="" >La Jolla, San Diego, CA, USA</Link></li>
                  <li><Link to="" >19 Nov, 2023</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/Assistant-Director-for-Student-Programming-(71101)/66802" className='text-blue-500 font-bold'>Assistant Director for Student Programming (71101)</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >Pratt Institute</Link></li>
                  <li><Link to="" >NY, USA</Link></li>
                  <li><Link to="" >25 Nov, 2023</Link></li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/Oregon-Sea-Grant-Extension-Specialist-in-Human-Dimensions-of-Coastal-Systems/69048" className='text-blue-500 font-bold'>Oregon Sea Grant Extension Specialist in Human Dimensions of Coastal Systems</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >Oregon State University</Link></li>
                  <li><Link to="" >Corvallis, OR, USA</Link></li>
                  <li><Link to="" >04 Dec, 2023</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/dsps-accommodation-assistant/65518" className='text-blue-500 font-bold'>DSPS Accommodation Assistant</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >Cuesta College</Link></li>
                  <li><Link to="" >San Luis Obispo, CA, USA</Link></li>
                  <li><Link to="" >19 Nov, 2023</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/tenure-track-assistant-professor-of-machine-learning-in-biology/68725" className='text-blue-500 font-bold'>Tenure-track Assistant Professor of Machine Learning in Biology</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >University of Pennsylvania</Link></li>
                  <li><Link to="" >Philadelphia, PA, USA</Link></li>
                  <li><Link to="" >03 Dec, 2023</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/provost/69027" className='text-blue-500 font-bold'>Provost</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >American University of Armenia</Link></li>
                  <li><Link to="" >Yerevan, Armenia</Link></li>
                  <li><Link to="" >03 Dec, 2023</Link></li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/open-rank-in-school-counseling-psychology/64801" className='text-blue-500 font-bold'>Open Rank (Assistant, Associate, Full Professor) in School Counseling & Psychology</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >California State University Channel Islands</Link></li>
                  <li><Link to="" >Camarillo, CA, USA</Link></li>
                  <li><Link to="" >15 Nov, 2023</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/open-rank-t-tt-faculty-chancellors-faculty-excellence-program-translational-predictive-biology-cluster/63422" className='text-blue-500 font-bold'>Open Rank T/TT Faculty - Chancellor's Faculty Excellence Program (CFEP) - Translational Predictive Biology Cluster</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >North Carolina State University</Link></li>
                  <li><Link to="" >Raleigh, NC, USA</Link></li>
                  <li><Link to="" >10 Nov, 2023</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/executive-director-of-development-haas-school-of-business/61088" className='text-blue-500 font-bold'>Executive Director of Development, Haas School of Business (0465U) 57961</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >University of California Berkeley</Link></li>
                  <li><Link to="" >Berkeley, CA, USA</Link></li>
                  <li><Link to="" >29 Nov, 2023</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/deputy-cio/63764" className='text-blue-500 font-bold'>Deputy CIO</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >Bowling Green State University</Link></li>
                  <li><Link to="" >Bowling Green, OH, USA</Link></li>
                  <li><Link to="" >12 Nov, 2023</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/director-of-alumni-engagement/72223" className='text-blue-500 font-bold'>Director of Alumni Engagement</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >University of Pennsylvania</Link></li>
                  <li><Link to="" >Philadelphia, PA, USA</Link></li>
                  <li><Link to="" >16 Dec, 2023</Link></li>
                </ul>
              </ul>
            </div>
            
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/Executive-Officer---Full-time---Permanent---Robina---Gold-Coast/69249/" className='text-blue-500 font-bold'>Executive Officer - Full time - Permanent - Robina - Gold Coast</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >Bond University</Link></li>
                  <li><Link to="" >Gold Coast QLD, Australia</Link></li>
                  <li><Link to="" >26 Dec, 2023</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/jobs/Senior-Engineer,-Student-Systems-(2-positions-available)/71827/" className='text-blue-500 font-bold'>Senior Engineer, Student Systems (2 positions available)</Link></li>
                <ul className="innerUL">
                  <li><Link to="" >Queensland University of Technology</Link></li>
                  <li><Link to="" >Gardens Point Road, Brisbane City QLD, Australia</Link></li>
                  <li><Link to="" ></Link></li>
                </ul>
              </ul>
            </div>
           
            
          </div>
        </div>
      </div>
      <Link className='text-[#f4a10c] mt-4 mb-4 px-2' to='/jobs/'>← view more</Link>
      <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">Top Universities To Work For</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/employers/queensland-university-of-technology/3786/" className='text-[#003463] font-bold'>Queensland University of Technology (QUT)</Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobs/QUT-lecturer/" >QUT Lecturing Jobs</Link></li>
                  <li><Link to="/jobs/QUT-research/" >QUT Research Jobs</Link></li>
                  <li><Link to="/jobs/QUT-professor/" >QUT Professorial Jobs</Link></li>
                  <li><Link to="/jobs/QUT-Executive/" >QUT Executive</Link></li>
                  <li><Link to="/jobs/QUT-Administration/" >QUT Administration</Link></li>
                  <li><Link to="/jobs/QUT-Human-Resources/" >QUT Human Resources</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="/employers/bond-university/3785/" className='text-[#f1b821] font-bold'>Bond University</Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobs/bond-lecturer/" >Bond Lecturing Jobs</Link></li>
                  <li><Link to="/jobs/bond-research/" >Bond Research Jobs</Link></li>
                  <li><Link to="/jobs/bond-professor/" >Bond Professorial Jobs</Link></li>
                  <li><Link to="/jobs/bond-Executive/" >Bond Executive</Link></li>
                  <li><Link to="/jobs/bond-Administration/" >Bond Administration</Link></li>
                  <li><Link to="/jobs/bond-Human-Resources/" >Bond Human Resources</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="/employers/harvard-university/3100/" className='text-[#A51C30] font-bold'>Harvard University</Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobs/harvard-lecturer/" >Harvard Lecturing Jobs</Link></li>
                  <li><Link to="/jobs/harvard-research/" >Harvard Research Jobs</Link></li>
                  <li><Link to="/jobs/harvard-professor/" >Harvard Professorial Jobs</Link></li>
                  <li><Link to="/jobs/harvard-Executive/" >Harvard Executive</Link></li>
                  <li><Link to="/jobs/harvard-Administration/" >Harvard Administration</Link></li>
                  <li><Link to="/jobs/harvard-Human-Resources/" >Harvard Human Resources</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/employers/university-of-california-san-diego/3149/" className='text-[#192847] font-bold'>University of California San Diego</Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobs/UCSD-lecturer/" >UCSD Lecturing Jobs</Link></li>
                  <li><Link to="/jobs/UCSD-research/" >UCSD Research Jobs</Link></li>
                  <li><Link to="/jobs/UCSD-professor/" >UCSD Professorial Jobs</Link></li>
                  <li><Link to="/jobs/UCSD-Executive/" >UCSD Executive</Link></li>
                  <li><Link to="/jobs/UCSD-Administration/" >UCSD Administration</Link></li>
                  <li><Link to="/jobs/UCSD-Human-Resources/" >UCSD Human Resources</Link></li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md"><Link to="/the-university-rankings/" >The University Rankings/ Top Academic Careers</Link></h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
            <div className="column">
              <ul className="">
                <ul className="pb-4">
                  <li><Link to="/employers/harvard-university/3100/" >	Harvard University</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/stanford-university/3101/" >	Stanford University</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/university-of-cambridge/12635/" >	University of Cambridge</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/massachusetts-institute-of-technology/3103/" >MIT</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/university-of-california-berkeley/3105/" >	University of California, Berkeley</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li><Link to="https://www.academicjobs.com/employers/princeton-university/3104/" >	Princeton University</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/university-of-oxford/3099/" >	University of Oxford</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/columbia-university/3127/" >	Columbia University</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/caltech/3128/" >Caltech</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/University-of-Chicago/3126/" >	University of Chicago</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li><Link to="https://www.academicjobs.com/employers/yale-university/3125/" >	Yale University</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/Cornell-University/3138/" >Cornell University</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/university-of-california-los-angeles/3136/" >UCLA</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/university-of-pennsylvania/3131/" >UPenn</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/johns-hopkins-university/3130/" >Johns Hopkins University (JHU)</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li><Link to="https://www.academicjobs.com/employers/university-college-london/12527/" >University College London (UCL)</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/eth-zurich/3132/" >ETH Zurich</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/university-of-tokyo/3155/" >The University of Tokyo (UTokyo)</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/new-york-university-nyu/3144/" >New York University (NYU)</Link></li>
                  <li><Link to="https://www.academicjobs.com/employers/duke-university/3139/" >	Duke University (Duke)</Link></li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
      
      <div className="bg-white flex flex-col  ">
      <Link to="/job-type/" ><h2 className=" py-4 px-7 border-4 text-[#f4a10c] rounded-full mt-[7rem] hover:bg-[#f4a10c] hover:text-white shadow-md">→ Find Academic<span className="font-bold"> Job-Types</span> ( i.e. Professor, Fellow )</h2></Link>
        </div>
    
    
     
      <div className="bg-white flex flex-col  ">
      <Link to="/industry/"> <h2 className="  py-4 px-7 border-4 text-[#f4a10c] rounded-full mt-10 hover:bg-[#f4a10c] hover:text-white shadow-md">→ Find Academic Positions in<span className="font-bold"> Industry</span> ( i.e. laboratory technical services )</h2></Link>
       
      </div>
      <div className="bg-white flex flex-col  ">
      <Link to="/faculty/"><h2 className="  py-4 px-7 border-4 text-[#f4a10c] rounded-full mt-10 mb-[7rem] hover:bg-[#f4a10c] hover:text-white shadow-md">→ Search Jobs by<span className="font-bold"> Faculty, Department, Specialty </span>( i.e. Agriculture: Economics and Agribusiness )</h2></Link>
       
      </div>


  

    </div>
  )
}
export default Home