import React, { useState } from 'react'
import "./styles.css"

const Accordion = () => {
  const [active, setActive] = useState(false)

  const AccordionToggle = () => {
    setActive(active => !active)
  }
  
  return (
    <div className="accordion-container">
        <div className="accordion">
          <div className="contentBx">
              <div className="label" onClick={AccordionToggle}>
                Accordion
                {active ? (<span className="accordion-icon">-</span>) : (<span className="accordion-icon">+</span>)}
              </div>
              {active ? (<div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid architecto facilis
                  odio impedit, ullam quis aut fuga ut sint autem nobis aliquam cum ducimus qui labore, error, 
                  eveniet consequatur reprehenderit veritatis. Dolores officia hic cupiditate tempora totam 
                  delectus cum autem rerum aspernatur voluptate adipisci, impedit provident voluptas earum 
                  exercitationem.
                </p>
              </div> ) : null}
          </div>
        </div>
    </div>
  )
}

export default Accordion