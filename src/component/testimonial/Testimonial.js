import React from 'react';


const TestimonialItem = ({colSize, itemShow, testimonialData, layoutStyle}) => {
    return (
        <>
            {testimonialData.slice(0, itemShow).map((data, index) => (
                <div className={`${colSize}`} key={index}>
                <div className={`testimonial-grid ${layoutStyle ? layoutStyle : ""}`}>
                    {/* <span className="social-media">{data.fromtext}</span> */}
                    <h4 className="frase" >{data.description}</h4>
                    <div className="author-info">
                        <div className="content">
                            <span className="name">{data.authorname}</span>
                        </div>
                    </div>
                </div>
                </div>
            ))}
        </>
    )
}

export default TestimonialItem;