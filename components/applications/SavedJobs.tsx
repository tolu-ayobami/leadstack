import React from 'react'
import Image from 'next/image'

const SavedJobs = () => {
    return (
        <div>

            <div className="text-center py-16 bg-white rounded-xl border m-auto border-gray-200">
                <div className="text-gray-400 mb-4">
                    <Image src="/images/22.png" alt="22" width={200} height={200} className='flex m-auto justify-center'/>
                </div>
                <p className="text-gray-600 text-lg font-semibold mb-2">No jobs saved yet</p>
                <p className="text-gray-500 text-sm mb-4">Get started by saving any job on from the job pool</p>
            </div>


        </div >
    )
}

export default SavedJobs