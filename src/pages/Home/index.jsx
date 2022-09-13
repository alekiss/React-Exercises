import React from 'react'
import "./styles.css"
import Cards from '../../components/Cards';
import { TbSearch, TbPlus, TbList, TbChecks, TbLogin, TbApi, TbApiApp} from "react-icons/tb"
import {GiAccordion} from "react-icons/gi"
import {AiOutlineSliders} from "react-icons/ai"

const Home = () => {
    const data = [
        {
          "image": <TbSearch />,
          "title": "Search Filter",
          "route": "search-filter"
        },
        {
          "image": <TbPlus />,
          "title": "Simple Counter",
          "route": "simple-counter"
        },
        {
          "image": <TbList />,
          "title": "List",
          "route": "list"
        },
        {
          "image": <GiAccordion />,
          "title": "Accordion",
          "route": "accordion"
        },
        {
          "image": <AiOutlineSliders />,
          "title": "Image Slider",
          "route": "image-slider"
        },
        {
          "image": <TbChecks />,
          "title": "Checklist",
          "route": "checklist"

        },
        {
          "image": <TbLogin />,
          "title": "Login Form",
          "route": "login"
        },
        {
          "image": <TbApiApp />,
          "title": "Data from REST API",
          "route": "data-api"
        },
        {
          "image": <TbApi />,
          "title": "Context API",
          "route": "context-api"
        },
      ];
    
      return (
        <div className="home">
          <div className="home_content">
            {data.map((item, index) => (
              <div className="cards" key={index}>
                <Cards 
                  image={item.image}
                  title={item.title}
                  route={item.route}     
                />
              </div>
            ))}
          </div>
        </div>
      );
}

export default Home