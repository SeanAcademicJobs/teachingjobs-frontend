import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="py-4 px-7 md:mt-16 md:mb-10 bg-[#e39e39] rounded-b-3xl rounded-t-lg shadow-xl pb-4 border-4 " >
            <hr className="w-ful  mx-auto my-2 bg-white border-0 rounded md:my-2 md:mb-4 dark:bg-gray-700  "></hr>
            <div className=" text-white font-open-sans grid grid-cols-1 md:grid-cols-4 gap-4 pb-4">
          
               
              
             
                <div className=" text-white font-open-sans">
                    <ul>
                        <li className='text-white font-bold text-xl pb-1 '>Navigation</li>
                        {/* <li><a className="footer-nav__link" href="/">Home</a></li> */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/school-career-advice/">Career Advice</Link></li>                    
                        <li><Link to="/sitemap/">Site Map</Link></li>
                   
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className='text-white font-bold text-xl pb-1'>Job Seekers</li>
                        <li><Link to="/jobs/">Find Jobs</Link></li>
                        <li><Link to="/principal/">Princpal Jobs</Link></li>
                        <li><Link to="/employers/">Find Employers</Link></li>
                       
                       
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className='text-white font-bold text-xl pb-1 '>School</li>
                    
                        <li ><Link to="/about/">About TJ</Link></li>
                        <li target="_blank" ><a target="_blank"  className="footer-nav__link" href="https://www.postmyjob.online/school-pricing/">Post a Job</a></li>
                                             
                                             <li target="_blank" ><Link target="_blank"  to="/contact-us/">Contact Us</Link></li>
                                            
                       
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className='text-white font-bold text-xl pb-1 '>Socials</li>
                        {/* <li><a href="https://academicjobs.com/career-advice">Career Advice</a></li> */}
                        <li><a target="_blank"  className="footer-nav__link" href="https://www.facebook.com/TeachingJobsAUS" target="_blank" rel="noopener">Facebook</a></li>
                     
                        <li><a  target="_blank"  className="footer-nav__link" href="https://www.instagram.com/teachingjobs_aus/" target="_blank" rel="noopener">Instagram</a></li>
                        <li><a target="_blank"  href="https://www.linkedin.com/company/teachingjobs">Linkedin</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}
export default Footer
