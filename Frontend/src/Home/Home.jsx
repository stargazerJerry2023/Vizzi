import './Home.css'

function Home() {


    return (
        <div className="container">
           
               
            <div className="center-box1">
                <div className="box1">
                <img src="./src/logo.png" alt="Description of Image" />
        </div>
            </div>
            <div className="center-box2">
            <div className="box2">
            <div className="box2-left">
            <h2>Who is Vizzi?</h2>
            </div>
            <div className ='text'>
            <p>Every woman deserves care, every woman deserves to be seen, and every child deserves a healthy start, regardless of where they are born.</p>
            <p>Vizzi is an app designed to bring attention to the often-overlooked needs of pregnant women in correctional facilities. These women face unique and profound challenges, with one of the most critical being access to proper nutrition. Vizzi takes information on the nutritional intake of these women from correctional officers and offers advice on how to improve their diet, ensuring they receive the care and sustenance necessary during pregnancy.</p>
            </div>
                </div>.
            </div>
            <div className="center-box3">
            <div className="box3">
            <h2 className="contact-us">Contact Us</h2>
             
            <div className="contact-container">


                <div className="contact-person">
                    <p>Hilary Rojas Rosales</p>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/hilary-rojas-rosales/" target="_blank">
                            <img src="linkedin.png" alt="LinkedIn" className="icon"/>
                                </a>
                                 <a href="mailto:hrojasrosale@binghamton.edu">
                            <img src="gmail.png" alt="Email" className="icon"/>
                        </a>
                    </div>
                </div>


                <div className="contact-person">
                    <p>Anika Nazhat</p>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/anika-nazhat/" target="_blank">
                            <img src="linkedin.png" alt="LinkedIn" className="icon"/>
                        </a>
                        <a href="mailto:nazha24a@mtholyoke.edu">
                            <img src="gmail.png" alt="Email" className="icon"/>
                        </a>
                    </div>
                </div>


           
                <div className="contact-person">
                    <p>Gerardo Vega</p>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/gerardo-vega-5a6501259/" target="_blank">
                            <img src="linkedin.png" alt="LinkedIn" className="icon"/>
                        </a>
                        <a href="mailto:gerardov@bu.edu">
                            <img src="gmail.png" alt="Email" className="icon"/>
                        </a>
                    </div>
                </div>


            </div>
            </div>
            </div>
        </div>


    )
}


export default Home;




