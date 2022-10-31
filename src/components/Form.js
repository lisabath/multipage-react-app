// this is a form component
function Form() {

    const submitFunction = (e) => {
        e.preventDefault()
        console.log("Submitted")
    }

    return (
        <div className="form-container">
            <form
                className="form"
                action=""
                onSubmit={submitFunction}
            >
                <label htmlFor="fName">Name</label>
                <input 
                    type="text" 
                    name="fName" 
                    placeholder="Enter Name"
                    id="fName" 
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Enter Email"
                    id="email"
                />

                <label htmlFor="message"></label>
                <textarea
                    name="message"
                    placeholder="Enter message here"
                    id="message">
                </textarea>

                <button
                    type="submit"
                    className="btn">
                        Submit
                </button>
            </form>
        </div>
    )

} 

  export default Form;
