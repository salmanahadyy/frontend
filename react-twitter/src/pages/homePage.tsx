import { useNavigate } from 'react-router-dom';
import gambar from '../assets/new-2023-twitter-logo-x-icon-design_1017-45418.avif'



function HomePage() {
 const navigate= useNavigate()
    return (
    <div className="flex h-full bg-black text-white">
      {/* Bagian Kiri (Logo X) */}
      <div className="flex items-center justify-center w-[500px]">
      <img src={gambar} alt="" />
      </div>

      {/* Bagian Kanan (Formulir Masuk) */}
      <div className="flex flex-col items-center justify-center w-1/2 p-8 space-y-4">
        <h1 className="text-4xl font-bold">Happening now</h1>
        <p className="text-xl font-semibold">Join today.</p>

        {/* Tombol Masuk dengan Google */}
        <button className="flex items-center w-[300px] p-3 space-x-2 bg-white text-black rounded-full hover:bg-gray-200">
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo" className="w-6 h-6" />
          <span className="text-lg">Sign up with Google</span>
        </button>

        {/* Tombol Masuk dengan Apple */}
        <button className="flex items-center w-[300px] p-3 space-x-2 bg-white text-black rounded-full hover:bg-gray-200">
          <img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" alt="Apple Logo" className="w-6 h-6" />
          <span className="text-lg">Sign up with Apple</span>
        </button>

        {/* Divider */}
        <div className="flex items-center w-full my-4">
          <hr className="w-[300px] border-t border-gray-500" />
          <span className="px-4 text-gray-500">or</span>
          <hr className="w-[300px] border-t border-gray-500" />
        </div>

        {/* Tombol Buat Akun */}
        <button onClick={()=>navigate("/register")} className="w-[300px] p-3 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600">
          Create account
        </button>

        {/* Syarat dan Ketentuan */}
        <p className="text-sm text-gray-500 text-center mt-5">
          By signing up, you agree to the <a href="#" className="text-blue-400">Terms of Service</a> and <a href="#" className="text-blue-400">Privacy Policy</a>, including <a href="#" className="text-blue-400">Cookie Use</a>.
        </p>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default HomePage;
