const App = () => {
  return (
    <div className="flex h-screen w-full bg-[#f1f1f1]">
      <div className="flex w-full items-center justify-center">
        <div className="rounded-3xl border-2 border-gray-100 bg-white px-10 py-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-poppins text-5xl font-extrabold">
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Welcome Back
              </span>
            </h1>
            <p className="mt-4 text-center font-poppins text-base font-medium text-gray-500">
              Please enter your details.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex flex-1 flex-col justify-center font-poppins">
              <label className="text-md font-normal" for="email">
                Email
              </label>
              <input
                className="mt-1 w-full rounded-xl border-2 border-violet-500 bg-transparent p-3 focus:outline-offset-0"
                placeholder="jhonray81@example.com"
                type={'email'}
              />
            </div>
            <div className="mt-4 flex flex-1 flex-col justify-center font-poppins">
              <label className="text-md font-normal" for="email">
                Password
              </label>
              <input
                className="mt-1 w-full rounded-xl border-2 border-violet-500 bg-transparent p-3 focus:outline-offset-0"
                placeholder="Enter your password"
                type={'password'}
              />
            </div>
            <div className="mt-8 flex items-center justify-center">
              <button className="font-poppins text-base font-medium text-violet-500 hover:underline hover:underline-offset-8">
                Forgot your password
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button className="text-normal rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 py-3 font-poppins font-bold text-white drop-shadow-md transition-all ease-in-out hover:scale-[1.01] active:scale-[.98] active:duration-75">
                Sign in
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center font-poppins">
              <p className="text-base font-normal">Don't have an account?</p>
              <button className="ml-2 text-base font-normal text-violet-500 hover:underline hover:underline-offset-8">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
