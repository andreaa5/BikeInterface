import '../css/Form.css'
import {useForm} from 'react-hook-form'


function Form()
{
    const {register, handleSubmit, setError, formState: {errors, isSubmitting}} = useForm();
    const onSubmit = async(data) =>
    {
        try{
            await new Promise((resolve) => setTimeout(resolve, 1000));
            throw new Error(); 
            console.log(data);
        }catch(error){
            setError("root", {type: "manual", message: "An error occurred while submitting the form"});
        }
        
    }
    return(
        <section>
            <form className="bike-form" onSubmit={handleSubmit(onSubmit)}>
              <input {...register("age",  {required:"Please enter a valid age", pattern:/^[0-9]+$/})} type="text" placeholder="Age"/>
              {errors.age && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '1px' }}>{errors.age.message}</p>}
              {/*<input type="text" placeholder="Riding style"/>*/}
              {/*<label htmlFor="ridingStyle">Riding style</label>*/}
              <select {...register("ridingStyle", {required:"Please select a riding style"})} id="ridingStyle">
                <option value="">Select riding style</option>
                <option value="road">Road</option>
                <option value="gravel">Gravel</option>
                <option value="sport">Sport</option>
                <option value="mountain">Mountain</option>
                <option value="commute">Commute</option>
              </select>
              <select {...register("experience", {required:true})} id="experience">
                <option value="">Select experience</option>
                <option value="beginner">Beginner</option>
                <option value="gravel">Intermediate</option>
                <option value="sport">Advanced</option>
              </select>
              {/*<input type="text" placeholder="Experience"/>*/}
              <input {...register("budget", {required:true})} type="text" placeholder="Budget"/>
              <button disabled={isSubmitting} type="submit">{isSubmitting ? "Loading..." : "Submit"}</button>
              {errors.root && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '1px' }}>{errors.root.message}</p>}
            </form>
        </section>
    )
}

export default Form