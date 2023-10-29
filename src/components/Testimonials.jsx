import { useState } from 'react'
import Card from "../UI/Card"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from "../data"
const Testimonials = () => {

    const [index, setIndex] = useState(0)
    const {name, quote , job , avatar} = testimonials[index] 


    const prevTestimonialsHandler = () => {
        setIndex(prev => prev - 1);

        if ( index <= 0) {
            setIndex(testimonials.length - 1)
        }
    }
    const nextTestimonialsHandler = () => {
        setIndex(prev => prev + 1);

        if ( index >= testimonials.length - 1) {
            setIndex(0)
        }
    }
  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead className="testimonials__head" icon={<ImQuotesLeft/>} title ="Testimonials"/>
            <Card className='testimonial'>
                <div className="testimonials__avatar">
                    <img src={avatar} alt={name}/>
                </div>
                <p className='testimonials__quote'>{`"${quote}"`}</p>
                <h5>{name} </h5>
                <small className='testimonials__title'>{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={prevTestimonialsHandler}><IoIosArrowDropleftCircle/></button>
                <button className="testimonials__btn" onClick={nextTestimonialsHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials