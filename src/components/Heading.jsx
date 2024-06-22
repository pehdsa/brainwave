import React from 'react';
import TagLine from "./Tagline";

const Heading = ({ className, title, subtitle, tag }) => {
    return (
        <div
            className={` ${ className } max-w-[50rem] mx-auto mb-12 lg:mb-20`}
        >
            {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
            {title && <h2 className='h2'>{ title }</h2>}
            { subtitle && <p className='body-2 mt-4 text-n-4'>{ subtitle }</p>  }
        </div>
    )
}

export default Heading