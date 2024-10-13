import './Report.css';

function Report() {
  return (
    <div>
        <div className="top-border">
            <div className="nav-buttons">
                <button>Logout</button>
            </div>

            <div className="welcome-message">
                <h1>Welcome!</h1>
                <h2>Correctional Facility Report</h2>
            </div>
        </div>

        <form id="prisoner-report" action="/submit" method="POST">
            <div className="form-container">
                <div className="question-box">  
                    <h3>Please answer the following regarding the prisoner</h3> 
                    
                    <div className="form-row">
                        <label htmlFor="id">Id:</label>
                        <input type="text" id="id" name="id"></input>
                    </div>  

                    <div className="form-row">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name"></input>
                    </div>

                    <div className="form-row">
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age"></input>

                                            
                        <label htmlFor="trimester">Trimester:</label>
                        <input type="number" id="trimester" name="trimester"></input>
                    </div>

                    <div className="form-row">
                        <label htmlFor="breakfast">1. What did they have for breakfast?</label>
                        <textarea id="breakfast" name="breakfast" rows="3"></textarea>
                    </div>

                    <div className="form-row">
                        <label htmlFor="lunch">2. What did they have for lunch?</label>
                        <textarea id="lunch" name="lunch" rows="3"></textarea>
                    </div>

                    <div className="form-row">
                        <label htmlFor="dinner">3. What did they have for dinner?</label>
                        <textarea id="dinner" name="dinner" rows="3"></textarea>
                    </div>

                    <div className="form-row">
                        <label htmlFor="vitamins">4. Did they receive any vitamins/supplements today and if so what?</label>
                        <textarea id="vitamins" name="vitamins" rows="3"></textarea>
                    </div>

                    <button type="submit" className="submit-button">Submit</button>

                </div>  
            </div>
            <div className="nutrition-feedback">
                <h3>Nutritional Feedback of the Pregnant Prisoner</h3>
            </div> 
            <div className="api-output">
                <h3>API Output</h3>
            </div>
        </form>




    </div>
  );
}

export default Report;