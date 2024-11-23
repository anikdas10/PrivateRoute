import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

;

const Login = () => {
    const navigate = useNavigate();
    const {signInUser} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
            event.target.reset();
            navigate('/');
        })
        .catch(err=>{
            console.log(err);
        })


    }

    return (
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-5">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" 
          name="email"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" 
          name="password"
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Don't have an account? Please <Link to='/register' className="font-bold text-blue-700">Register.</Link></p>
      </form>
    </div>
    );
};

export default Login;