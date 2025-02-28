

function Newsletter() {
    return (

      <div className="newsletterContainer flex flex-col p-10 w-[450px] rounded-2xl bg-[#262626] gap-5 items-center box-border text-green">
        <h2 className="uppercase text-5xl font-bold mt-10">NEWSLETTER</h2>
        <h4 className="text-gray-400">Subscribe and get 20% off your first purchase.</h4>
        <form className="relative flex flex-row">
        <div class="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
  <button
    class="!absolute right-1 top-1 z-10 select-none rounded bg-green text-black hover:bg-black   py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-green/20 transition-all   focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
    type="button"
    data-ripple-light="true"
  >
    <h3 glitch="SEND">Send</h3>
  </button>
  <input
    type="email"
    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
    placeholder=" "
    required
  />
  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-green  peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-green peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ">
    Email Address
  </label>
</div>
        </form>
      </div>

    );
  }

  export default Newsletter;