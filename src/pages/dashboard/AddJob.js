import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormField, SectionWrapper, FormSelect } from '../../components'
import { setSelection, clearValues, createJob } from '../../store/jobSlice'

const AddJob = () => {
    const {
        company,
        location,
        position,
        positionType,
        status,
        statusType,
        isEdit,
    } = useSelector(state => state.job)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createJob({ company, location, position, status }))
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        dispatch(setSelection({ name, value }))
    }
    return (
        <SectionWrapper title={`${ isEdit ? "Edit Job" : "Add Job" }`}>
            <form onSubmit={handleSubmit}>
                <div className="overflow-hidden shadow-md rounded-lg mt-5">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">

                            <div className="col-span-6 sm:col-span-3">
                                <FormField
                                    id="company"
                                    label="company"
                                    value={company}
                                    onChange={handleInputChange}
                                    name="company"
                                    type="text"
                                >
                                </FormField>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <FormField
                                    id="location"
                                    label="job location"
                                    value={location}
                                    onChange={handleInputChange}
                                    name="location"
                                    type="text"
                                >
                                </FormField>
                            </div>

                            <div className='col-span-6 sm:col-span-3 '>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className="col-span-1">
                                        <FormSelect
                                            id="status"
                                            label="status Type"
                                            value={status}
                                            list={statusType}
                                            onChange={handleInputChange}
                                            name="status"
                                        >
                                        </FormSelect>
                                    </div>

                                    <div className="col-span-1">
                                        <FormSelect
                                            id="position"
                                            label="position Type"
                                            value={position}
                                            list={positionType}
                                            onChange={handleInputChange}
                                            name="position"
                                        >
                                        </FormSelect>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex items-center gap-2 m-4 justify-end'>
                        <div className="bg-gray-50 text-right">
                            <button
                                onClick={() => dispatch(clearValues())}
                                type="button"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                clear
                            </button>

                        </div>
                        <div className="bg-gray-50 text-right">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                submit
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </SectionWrapper>
    )
}

export default AddJob