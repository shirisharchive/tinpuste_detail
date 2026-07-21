import { useFormContext } from "react-hook-form";

export interface IAuthProp {
  email: string;
  password: string;
}

export const Auth = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IAuthProp>();

  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
          })}
        />
        <span>{errors.email?.message}</span>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        <span>{errors.password?.message}</span>
      </div>
    </>
  );
};