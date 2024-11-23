import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const navigate = useNavigate();
    
    const {createUser} = useContext(AuthContext);

    console.log(createUser);

    const handleRegister = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            event.target.reset();
            navigate('/');
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-5">
      <form className="card-body" onSubmit={handleRegister}>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account? Please <Link to='/login' className="font-bold text-blue-700">Login.</Link></p>
      </form>
    </div>
    );
};

export default Register;