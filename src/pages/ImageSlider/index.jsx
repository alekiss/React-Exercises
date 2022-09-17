import React, { useState } from 'react'
import {GrFormNext, GrFormPrevious} from "react-icons/gr"
import "./styles.css"

const ImageSlider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== imagens.length){
            setSlideIndex(slideIndex + 1)
        }
        else if(slideIndex === imagens.length){
            setSlideIndex(1)
        }
    }

    const previousSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1){
            setSlideIndex(imagens.length)
        }
    }

    const movDot = index => {
        setSlideIndex(index)
    }

    const imagens = [
        {
            "id": 1,
            "url": "https://apostas.gazetaesportiva.com/static/wp/2022/02/palmeiras-gz.webp",
        },
        {
            "id": 2,
            "url": "https://pbs.twimg.com/media/Ev6VSVzXIAMv1OU?format=jpg&name=medium"
            ,
        },
        {
            "id": 3,
            "url": "https://pbs.twimg.com/media/FYD_iASWIAA7TXT.jpg:large",
        },
        {
            "id": 4,
            "url": "https://www.minhatorcida.com.br/wp-content/uploads/2021/03/11402_capa-palmeiras.jpg",
        },
        {
            "id": 5,
            "url": "https://www.futbox.com/img/v1/53d/08f/80b/93f/a88155df88652b83507c.png",
        },
    ]

  return (
    <>
    <div className="container-slider">
        {imagens.map((obj, index) => (
            <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={obj.id}>
                <img src={obj.url}/>
            </div>
            )
        )}
        
        <button className="btn-slide prev" onClick={previousSlide}>
            <GrFormPrevious/>
        </button>
        <button className="btn-slide next" onClick={nextSlide}>
            <GrFormNext/>
        </button>

        <div className="container-dots">
            {Array.from({length: 5}).map((obj, index) => (
                <div onClick={() => movDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}>

                </div>
            ))}
        </div>
    </div></>
  )
}

export default ImageSlider