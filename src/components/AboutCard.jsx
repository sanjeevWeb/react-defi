import React from 'react'

const AboutCard = (props) => {
    return (
        <>
            <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
                <div>
                    <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>{props.icon}</div>
                    <h3 className='text-2xl font-bold'>{props.heading}</h3>
                    <p>
                        {props.text}
                    </p>
                </div>

            </div>

        </>
    )
}

export default AboutCard
