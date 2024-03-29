import React from 'react'
import moment from 'moment'
import { Link } from "react-router-dom"
import { Badge } from "./index"
import { useDispatch } from 'react-redux'
import { skillsArr } from "../utils/data"
import { showModal, updateJobs } from '../store/jobSlice'
import {
    ClockIcon,
    TrashIcon,
    PencilIcon,
    CalendarIcon,
    BriefcaseIcon,
    LocationMarkerIcon,
} from '@heroicons/react/solid'

const JobCard = ({ _id: id, status, company, position, jobLocation: location, createdAt, avatarColor, skills }) => {
    const dispatch = useDispatch()
    const date = moment(createdAt).format("MMM Do, YYYY")

    return (
        <>
            <figure className='max-w-2xl p-5 mt-5 mb-5 bg-white rounded-lg shadow-md dark:bg-eerie-black dark:shadow-xl flex flex-col justify-between'>
                <div className='flex flex-wrap items-center justify-between gap-y-6 '>
                    <div className='flex items-center w-full gap-5 py-3 border-b border-b-slate-100 md:border-none md:max-w-max'>
                        <div style={{ backgroundColor: avatarColor }} className="flex items-center justify-center flex-shrink-0 w-12 h-12 font-semibold text-white capitalize rounded-full self-baseline">{company.charAt(0)}</div>
                        <h3 className='text-lg font-semibold capitalize md:text-xl dark:text-jet'>{company}</h3>
                    </div>

                    <div className='flex gap-2'>
                        <button onClick={() => dispatch(showModal(id))} className='p-3 border border-red-600 rounded-full'>
                            <TrashIcon className='w-4 h-4 text-red-600 ' />
                        </button>
                        <Link to="/add-job">
                            <button onClick={() => dispatch(updateJobs({ editId: id, company, position, location, status }))} className='p-3 border border-blue-600 rounded-full'>
                                <PencilIcon className='w-4 h-4 text-blue-600 ' />
                            </button>
                        </Link>
                    </div>

                </div>


                <div className='flex flex-wrap gap-1 mt-2 text-sm font-semibold'>
                    {skillsArr.filter((item) => skills.includes(item.name)).map((skill) => <Badge src={skill.icon} />)}
                </div>


                <div className='flex flex-wrap items-center justify-between mt-8 gap-x-2 gap-y-4'>
                    <span className='flex items-center gap-2'>
                        <BriefcaseIcon className='w-6 h-6 text-gray-400 dark:text-greyish' />
                        <h5 className='font-semibold dark:text-jet capitalize'>{position}</h5>
                    </span>
                    <span className='flex items-center gap-2'>
                        <LocationMarkerIcon className='w-6 h-6 text-gray-400 dark:text-greyish' />
                        <h5 className='font-semibold dark:text-jet capitalize'>{location}</h5>
                    </span>
                    <span className='flex items-center gap-2'>
                        <ClockIcon className='w-6 h-6 text-gray-400 dark:text-greyish' />
                        <h5 className='font-semibold dark:text-jet capitalize'>{status}</h5>
                    </span>
                    <span className='flex items-center gap-2'>
                        <CalendarIcon className='w-6 h-6 text-gray-400 dark:text-greyish' />
                        <h5 className='font-semibold dark:text-jet capitalize'>{date}</h5>
                    </span>
                </div>
            </figure>
        </>
    )
}

export default JobCard