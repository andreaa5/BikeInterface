import '../css/Form.css'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';


function Form()
{
    const {register, handleSubmit, setError, formState: {errors, isSubmitting}} = useForm();
    const navigate = useNavigate();
    const onSubmit = async(data) =>
    {
        try{
            //await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
            navigate('/results', { state: data });
            //throw new Error(); 
        }catch(error){
            setError("root", {type: "manual", message: "An error occurred while submitting the form"});
        }
        
    }
    return(
        <section>
            <form className="bike-form" onSubmit={handleSubmit(onSubmit)}>
              {/*<input {...register("age",  {required:"Please enter a valid age", pattern:/^[0-9]+$/})} type="text" placeholder="Age"/>
              {errors.age && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '1px' }}>{errors.age.message}</p>}*/}
            
              {/*<input type="text" placeholder="Riding style"/>*/}
              {/*<label htmlFor="ridingStyle">Riding style</label>*/}
              <select {...register("licence", {required:"Please select the licence"})} id="licence">
                <option value="">Select licence</option>
                <option value="a1">A1</option>
                <option value="a2">A2</option>
                <option value="a">A</option>
              </select>
              {errors.licence && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '1px' }}>{errors.licence.message}</p>}
              <select {...register("ridingStyle", {required:"Please select a riding style"})} id="ridingStyle">
                <option value="">Select riding style</option>
                <option value="road">Road</option>
                <option value="motocross">Motocross</option>
                <option value="sport">Sport</option>
                <option value="adventure">Adventure</option>
                <option value="cruiser">Cruiser</option>
              </select>
              {errors.ridingStyle && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '1px' }}>{errors.ridingStyle.message}</p>}
              {/*<select {...register("experience", {required:true})} id="experience">
                <option value="">Select experience</option>
                <option value="beginner">Beginner</option>
                <option value="gravel">Intermediate</option>
                <option value="sport">Advanced</option>
              </select>*/}
              <input {...register("budget", {required:true})} type="text" placeholder="Budget"/>
              <button disabled={isSubmitting} type="submit">{isSubmitting ? "Vroom..." : "Submit"}</button>
              {errors.root && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '1px' }}>{errors.root.message}</p>}
            </form>
        </section>
    )
}

export default Form