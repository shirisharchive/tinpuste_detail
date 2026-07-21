//We need to use "useFormContext" in components so that parents can access it
import { useFormContext } from "react-hook-form";
export interface HelloProps {
  movie: string;
}

export const MovieName=()=>{
  const {register,formState:{errors}}=useFormContext<HelloProps>()
  return(
    <div>
      <label htmlFor="movie">Movie Name</label>
      <input id="movie" {...register("movie",{required:true})}/>
      {errors.movie && <span>Movie name is required</span>}
    </div>
    
  )
}