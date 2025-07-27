import '../css/Form.css'


function Form()
{
    return(
        <section>
            <form className="bike-form">
              <input type="text" placeholder="Age"/>
              <input type="text" placeholder="Riding style"/>
              <input type="text" placeholder="Experience"/>
              <input type="text" placeholder="Budget"/>
              <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Form