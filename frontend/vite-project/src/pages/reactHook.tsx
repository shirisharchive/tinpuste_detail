import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"

const Gender = {
    male: "male",
    female: "female",
    other: "other",
} as const;

type Gender = (typeof Gender)[keyof typeof Gender];

interface IFormInput {
    name: string;
    email: string;
    gender: Gender;
    age: number;
}
export const ReactHook = () => {
   const{
     register,//Hami le data form ma register garna lageko
    handleSubmit//handlesubmit le form submit garna lageko

   }=useForm<IFormInput>()
   const onSubmit:SubmitHandler<IFormInput>=(data)=>{
    //api call garna lageko
    console.log(data)
   }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input id="name" {...register("name", { required: true })} />
            <label htmlFor="email">Email</label>
            <input id="email" {...register("email", { required: true })} />
            <label htmlFor="gender">Gender</label>
            <select id="gender" {...register("gender", { required: true })}>
                <option value={Gender.male}>Male</option>
                <option value={Gender.female}>Female</option>
                <option value={Gender.other}>Other</option>
            </select>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" {...register("age", { required: true, min: 18, max: 99 })} />
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>

    );
}
