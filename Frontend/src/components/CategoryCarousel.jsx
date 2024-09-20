import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "FullStack Developer",
    "QA Engineer",
    "Software Engineer"
]

const CategoryCarousel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }
    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-12">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                                <Button onClick={() => searchJobHandler(cat)} variant="outline" className="rounded-full bg-sky-300">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious variant="outline" className="rounded-full bg-blue-900 hover:bg-blue-800" />
                <CarouselNext variant="outline" className="rounded-full bg-blue-900 hover:bg-blue-800" />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel
