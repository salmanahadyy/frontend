import Modal from "../modal";
import { Form, Formik, FormikHelpers } from "formik";
import { UserLogin } from "../../types/user";
import { loginSchema } from "../../helpers/schema";
import { Input } from "../input";
import useModal from "../../hooks/useModal";

const initialValues: UserLogin = {
  email: "",
  password: "",
};

export const LoginModal = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const onLogin = async (data: UserLogin, action: FormikHelpers<UserLogin>) => {
    try {
      console.log(data);
      action.resetForm();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button
        onClick={openModal}
        className="bg-transparent text-blue-400 border border-gray-500 hover:bg-blue-950 py-2 px-8 w-[300px] font-bold rounded-full flex justify-center gap-3"
      >
        Masuk
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values, action) => {
            onLogin(values, action);
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form className="h-full flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-bold">Masuk ke X</h1>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  {isSubmitting ? "Loading .." : "Masuk"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
};