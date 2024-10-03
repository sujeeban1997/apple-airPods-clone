import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody, CButton, CCardText, CCardTitle, CCardBody, CCard} from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SampleImg  from "./assets/sample-img.jpg";

function App() {

      const [scrolled, setScrolled] = useState(0);
     
      useEffect(() => {
            window.addEventListener("scroll", scrollProgress);
            return () => window.removeEventListener("scroll", scrollProgress);
      }, [])

      const scrollProgress = () => {
            const scrollpx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.
            documentElement.clientHeight;

            const scrollLen = Math.ceil(scrollpx / winHeightPx * 100 / 1.59)

            setScrolled(scrollLen)
      }

      return (
            <div className="App">
                  <div className='scroll-watcher'></div>
                  <div className='scroll-animation'>
                        <img className='apple-image' src={`https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/${scrolled.toString().padStart(4, '0')}.png`} alt='apple-site' />
                  </div>

                  <div>
                        <CAccordion activeItemKey={2}>
                              <CAccordionItem itemKey={1}>
                                    <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                                    <CAccordionBody>
                                          <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
                                          collapse plugin adds the appropriate classes that we use to style each element. These classes
                                          control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                          modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                          that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                          does limit overflow.
                                    </CAccordionBody>
                              </CAccordionItem>
                              <CAccordionItem itemKey={2}>
                                    <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                                    <CAccordionBody>
                                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                          collapse plugin adds the appropriate classes that we use to style each element. These classes
                                          control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                          modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                          that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                          does limit overflow.
                                    </CAccordionBody>
                              </CAccordionItem>
                              <CAccordionItem itemKey={3}>
                                    <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                                    <CAccordionBody>
                                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                          collapse plugin adds the appropriate classes that we use to style each element. These classes
                                          control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                          modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                          that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                          does limit overflow.
                                    </CAccordionBody>
                              </CAccordionItem>
                        </CAccordion>
                  </div>


                  <div className='card-section'>
                        <CCard style={{ width: '18rem' }}>
                              <img src={ SampleImg } alt="Sample" />
                              <CCardBody>
                                    <CCardTitle>Card title</CCardTitle>
                                    <CCardText>
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </CCardText>
                                    <CButton color="primary" href="#">Go somewhere</CButton>
                              </CCardBody>
                        </CCard>
                  </div>


            </div>
      );
}

export default App;





 // const [count, setCount] = useState(1);

      // useEffect(() => {
      //       if(count < 64) {
      //             setTimeout(() => {
      //                   setCount(count + 1)
      //             }, 100);
      //       } else {
      //             setCount (1)
      //       }
           
      // }, [count])