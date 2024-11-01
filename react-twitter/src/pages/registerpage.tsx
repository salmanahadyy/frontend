import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import axios from "../helpers/axios";
import { useNavigate } from "react-router-dom";
import img from '../assets/new-2023-twitter-logo-x-icon-design_1017-45418.avif'

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .min(3, "password must be 3 characters at minimum")
    .required("password is required"),
});

interface FormValues {
  username: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const initialValue: FormValues = { username: "", email: "", password: "" };
  const handleAdd = async (user: FormValues) => {
    try {
      await axios.post("/users", user);
      alert("user berhasil ditambahkan!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center bg-black h-[100vh]">
        <img src={img} alt="" className="h-10" />
      <div className="p-10 mt-10 rounded-md shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-white ">
          Create Your Account
        </h1>
        <Formik
          initialValues={initialValue}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            handleAdd(values);
            action.resetForm();
          }}
        >
          {(props: FormikProps<FormValues>) => {
            const { handleChange, values, touched, errors } = props;
            return (
              <Form className="space-y-5">
                <div>
                  <label htmlFor="username" className="block text-white">
                    Username:
                  </label>
                  <Field
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    className="border border-blue-700 mb-2 block w-[400px] rounded-md mt-1 bg-transparent text-white"
                    placeholder="name"
                  />
                  {touched.username && errors.username ? (
                    <div className="text-red-500 text-xs">
                      {errors.username}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="block text-white">
                    Email:
                  </label>
                  <Field
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    className="border border-blue-700 block w-[400px] rounded-md mt-1 bg-transparent text-white mb-2"
                    placeholder="email"
                  />
                  {touched.email && errors.email ? (
                    <div className="text-red-500 text-xs">{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="password" className="block text-white">
                    Password:
                  </label>
                  <Field
                    type="text"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    className="border border-blue-700 block w-[400px] rounded-md mt-1 mb-2 bg-transparent text-white"
                    placeholder="password"
                  />
                  {touched.password && errors.password ? (
                    <div className="text-red-500 text-xs">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="bg-blue-700 text-white w-[400px] h-[30px] rounded-md hover hover:bg-blue-800 mt-96"
                >
                  Create Account
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
