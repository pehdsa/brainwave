import React from 'react';
import Section from './Section';
import Heading from './Heading';
import Tagline from './Tagline';
import Button from './Button';
import { grid, check2, loading1 } from '../assets';
import { roadmap } from '../constants';

import { Gradient } from './design/Roadmap';

function Roadmap() {
    return (
        <Section className="overflow-hidden" id='roadmap'>
            <div className='container relative md:pb-10'>
                
                <Heading 
                    className="text-center" 
                    title="What we’re working on" 
                    tag="READY TO GET STARTED" 
                />

                <div className='grid relative gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]'>
                    { roadmap.map((item, i) => {
                        const status = item.status === 'done' ? "Done" : 'In Progress';                        
                        return (
                            <div 
                                key={ item.id }
                                className={` md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${ item.colorful ? 'bg-conic-gradient' : 'bg-n-6' }`}
                            >
                                <div className='relative p-8 bg-n-8 rounded-[2.5rem] overflow-hidden xl:p-15'>
                                    <div className='absolute top-0 left-0 max-w-full'>
                                        <img 
                                            src={ grid } 
                                            alt='grid' 
                                            width={550}
                                            height={550}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className='relative z-1'>
                                        <div className='flex items-center justify-between max-w-[27rem] mx-auto mb-8 md:mb-20'>
                                            <Tagline>{ item.date }</Tagline>
                                            <div className='flex items-center px-4 bg-n-1 rounded text-n-8 py-1'>
                                                <img src={ item.status === 'done' ? check2 : loading1 } width={16} height={16} alt='status' className='mr-2.5' />
                                                <div className='tagLine'>{ status }</div>
                                            </div>                                            
                                        </div>
                                        <div className='mb-10'>
                                            <img src={ item.imageUrl } className='w-full' width={630} height={420} alt={ item.title } />
                                        </div>
                                        <h4 className='h4 mb-4'>{ item.title }</h4>
                                        <p className='body-2 text-n-4'>{ item.text }</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }) }
                    <Gradient />
                </div>

                <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                    <Button href="/roadmap">Our roadmap</Button>
                </div>

            </div>
        </Section>
    )
}

export default Roadmap