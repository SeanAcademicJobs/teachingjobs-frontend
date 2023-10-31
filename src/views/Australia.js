import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults';
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Australia = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs Australia</title>
        <meta name="description" content="Browse through hundreds of opportunities in higher education and research across various disciplines and institutions in Australia today." />
        <meta name="keywords" content="Academic Jobs Australia. university jobs Australia, Uni jobs Australia" />
      </Helmet>
      <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-australia-min.png"
          alt="AcademicJobs Logo"
          className=" w-[20rem] mb-[1rem] "
        /></div>
      <SearchBox />
     

      <div className=" mt-[10rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li className=""><Link to="/Australia/lecturer/" >	Lecturer</Link></li>
            <li className=""><Link to="https://www.academicjobs.com/Australia/research/" >	Research </Link></li>
            <li className=" "><Link to="https://www.academicjobs.com/Australia/professor/" >	Professor</Link></li>
          </ul>
          <li><Link to="https://www.academicjobs.com/Australia/executive/" >	Executive</Link></li>
          <li><Link to="https://www.academicjobs.com/Australia/admin/" >Admin</Link></li>
          <li><Link to="https://www.academicjobs.com/Australia/hr/" >	HR</Link></li>
          <li><Link to="https://www.academicjobs.com/Australia/student/" >	Student</Link></li>
        </ul>
      </div>
      <div className=" mt-4 " >
        <ul className=" flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
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
        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl shadow-xl ">Academic Jobs Australia</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7 pb-8">Australia's #1 University Job Website. Find the best Academic Jobs Australia has to offer. Whether you are a researcher, lecturer, professor, or administrator, you can find the latest opportunities in the Australian higher education sector on this page. Australian universities offer a range of disciplines and research areas, from arts and humanities to science and technology. Explore opportunities across all university jobs</p>
          <p className="font-semibold"></p>
          
          <div className="  " >
        <ul className=" flex flex-wrap gap-4 px-7 pb-4  text-[#f4a10c] ">
          <li><Link to="https://www.academicjobs.com/melbourne/" >	Melboune </Link></li>
          <li><Link to="https://www.academicjobs.com/sydney/" >	Sydney</Link></li>
          <li><Link to="https://www.academicjobs.com/brisbane/" >Brisbane</Link></li>
          <li><Link to="https://www.academicjobs.com/gold-coast/" >	Gold Coast</Link></li>
          <li><Link to="https://www.academicjobs.com/canberra/" >	Canberra</Link></li>
          <li><Link to="https://www.academicjobs.com/perth/" >	Perth</Link></li> 
          <li><Link to="https://www.academicjobs.com/adelaide/" >	Adelaide</Link></li> 
         
        </ul>
      </div>
          <div className="  px-7 pb-8 text-gray-400" >
            <Link to="/Australia/faq/" >	Aus FAQ</Link> </div>
        </div>
      </div>

     

      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1">
          <div>
            <h2 className="text-1xl font-bold py-3 px-7 border-[#f4a10c] border-2  text-[#f4a10c] rounded-3xl shadow-md">Academic Jobs Australia: All University Jobs</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
              <ul>
                <li className='mb-1 '><Link to="/jobs/act/" className='text-[#f4a10c] font-bold'>ACT</Link></li>
                <li><Link to="/employers/australian-national-university/3739/">Australian National
                  University</Link></li>
                <li><Link to="/employers/university-of-canberra/3821/">University of Canberra</Link>
                </li>
                <li className='mb-1 '><Link to="/jobs/new-south-wales/" className='text-[#f4a10c] font-bold'>New South Wales</Link></li>
                <li><Link to="/employers/the-university-of-sydney/3171/">The
                  University of Sydney</Link></li>
                <li><Link to="/employers/university-of-new-south-wales/3738/">University of New
                  South Wales</Link></li>
                <li><Link to="/employers/charles-sturt-university/3855/">Charles Sturt University</Link>
                </li>
                <li><Link to="/employers/australian-catholic-university/3853/" >Australian Catholic
                  University</Link></li>
                <li><Link to="/employers/southern-cross-university/3862/">Southern Cross
                  University</Link></li>
                <li><Link to="/employers/university-of-technology-sydney/3864/">University of
                  Technology, Sydney</Link></li>
                <li><Link to="/employers/macquarie-university/3881/">Macquarie
                  University</Link>
                </li>
                <li><Link to="/employers/university-of-new-england/3209/">University of New England
                  </Link></li>
                <li><Link to="/employers/university-of-newcastle/3863/">University of Newcastle</Link>
                </li>
                <li><Link to="/employers/university-of-western-sydney/3865/">University of Western
                  Sydney</Link></li>
                <li><Link to="/employers/university-of-wollongong/3866/">University of Wollongong</Link>
                </li>
              </ul>
              <ul>
                <li className='mb-1 '><Link to="/jobs/victoria/" className='text-[#f4a10c] font-bold'>Victoria</Link></li>
                <li><Link to="/employers/university-of-melbourne/3170/
                                        ">The University of Melbourne</Link>
                </li>
                <li><Link to="/employers/monash-university/3182/
                                        ">Monash University</Link>
                </li>
                <li><Link to="/employers/victoria-university/3871/
                                    ">Victoria University</Link>
                </li>
                <li><Link to="/employers/university-of-divinity/3872/
                                    ">University of Divinity</Link>
                </li>
                <li><Link to="/employers/swimburne-university-of-technology/10541/
                                    ">Swinburne University of Technology</Link>
                </li>
                <li><Link to="/employers/rmit-university/3869/
                                    ">RMIT University</Link>
                </li>
                <li><Link to="/employers/la-trobe-university/3868/
                                    ">La Trobe University</Link>
                </li>
                <li><Link to="/employers/deakin-university/3856/
                                    ">Deakin University</Link>
                </li>
                <li><Link to="/employers/federation-university/3787/
                                    ">Federation University Australia</Link></li>
                <li className='mb-1 '><Link to="/jobs/tasmania/" className='text-[#f4a10c] font-bold'>Tasmania</Link></li>
                <li><Link to="h/employers/university-of-tasmania/3867/
                                    ">The University of Tasmania</Link>
                </li>
              </ul>
              <ul>
                <li className='mb-1 '><Link to="/jobs/queensland/" className='text-[#f4a10c] font-bold'>Queensland</Link></li>
                <li className='text-[#003463] '><Link to="/employers/queensland-university-of-technology/3786/">Queensland
                  University of Technology (QUT)</Link>
                </li>
                <li className='text-[#f1b821] '><Link to="/employers/bond-university/3785/
                                    ">Bond University</Link></li>
                <li><Link to="/employers/university-of-queensland/3172/">The
                  University of Queensland</Link></li>
                <li><Link to="/employers/cquniversity/3854/">CQUniversity</Link>
                </li>
                <li><Link to="/employers/griffith-university/3860/">Griffith
                  University</Link>
                </li>
                <li><Link to="/employers/james-cook-university/3857/">James
                  Cook University</Link>
                </li>
                <li><Link to="/employers/university-of-southern-queensland/3861/">University of
                  Southern Queensland</Link>
                </li>
                <li><Link to="/employers/university-of-sunshine-coast/3859/">University of Sunshine
                  Coast</Link></li>
                <li className='mb-1 '><Link to="/jobs/northern-territory/" className='text-[#f4a10c] font-bold'>Northern
                  Territory</Link></li>
                <li><Link to="/employers/charles-darwin-university/3880/">Charles Darwin
                  University</Link>
                </li>
              </ul>
              <ul>
                <li className='mb-1 '><Link to="/jobs/south-australia/" className='text-[#f4a10c] font-bold'>South
                  Australia</Link></li>
                <li><Link to="/employers/the-university-of-adelaide/3737/">The
                  University of Adelaide</Link>
                </li>
                <li><Link to="/employers/carnegie-mellon-university/3146/">Carnegie Mellon
                  University</Link> </li>
                <li><Link to="/employers/torrens-university-australia/3875/">Torrens University
                  Australia</Link></li>
                <li><Link to="/employers/university-of-south-australia/3874/">University of South
                  Australia</Link></li>
                <li><Link to="/employers/flinders-university/3873/">Flinders
                  University</Link>
                </li>
                <li className='mb-1 '><Link to="/jobs/western-australia/" className='text-[#f4a10c] font-bold'>Western
                  Australia</Link></li>
                <li><Link to="/employers/university-of-western-australia/3173/">The University of
                  Western Australia</Link></li>
                <li><Link to="/employers/university-of-notre-dame/3879/">University of Notre Dame</Link>
                </li>
                <li><Link to="/employers/murdoch-university/3878/">Murdoch
                  University</Link>
                </li>
                <li><Link to="/employers/edith-cowan-university/3877/">Edith
                  Cowan University</Link>
                </li>
                <li><Link to="/employers/curtin-university/3876/">Curtin
                  University</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        
    </div>
    
  )
}
export default Australia