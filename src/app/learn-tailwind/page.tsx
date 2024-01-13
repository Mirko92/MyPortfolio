"use client"

export default function LearnTailwindCSS() {
  return (<>
    <h1 className="text-3xl font-bold underline">Learn Tailwind CSS</h1>

    <div
      className="
        group 
        rounded-lg border border-transparent 
        px-5 py-4 
        transition-colors 
        hover:border-gray-300 hover:bg-gray-100 
        hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
      "
    >
      Qualcosa in questo punto
    </div>

    <div
      className="
        p-6 
        max-w-sm mx-auto 
        bg-white bg-opacity-75
        rounded-xl shadow-lg 
        flex items-center space-x-4
      "
    >
      <div className="shrink-0">
        <img src="/vercel.svg" alt="Vercel Logo" className="h-24 w-24" />
      </div>

      <div>
        <div className="text-xl font-medium text-black">
          Qualcosa
        </div>
        <p className="text-slate-400 font-medium">
          Qualcos'altro
        </p>
      </div>

      <button
        className="
          px-4 py-1 
          text-sm text-purple-600 
          font-semibold 
          rounded-full
          border border-purple-200 
          hover:text-white hover:bg-purple-600 hover:border-transparent 
          focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
        "
      >Click here</button>

    </div>

    <button
      className="
        px-4 py-1 
        bg-violet-500 
        rounded-full
        hover:bg-violet-600 
        active:bg-violet-700 
        focus:outline-none focus:ring focus:ring-violet-300
      "
    >
      Save changes
    </button>


    <div
      className=" mt-3
        p-3 bg-white text-yellow-500 
        border-solid border-yellow-300 border-4
        hover:border-violet-500
        group
      "
    >
      Bianco
      <div className="p-3 bg-black border-solid border-yellow-300 border-4 group-hover:border-violet-600">
        Nero
        <div className="p-3 bg-red-600 border-solid border-yellow-300 border-4 group/red">
          Rossso
          <div className="p-3 bg-blue-600 border-solid border-yellow-300 border-4 group-hover/red:text-2xl">
            Blue
          </div>
        </div>
      </div>
    </div>



    <ul>
      <li className="hover:bg-yellow-100 first:bg-red-300 bg-purple-200 p-4"> Prova </li>
      <li className="hover:bg-yellow-100 first:bg-red-300 bg-purple-200 p-4"> Prova </li>
      <li className="hover:bg-yellow-100 first:bg-red-300 bg-purple-200 p-4"> Prova </li>
      <li className="hover:bg-yellow-100 first:bg-red-300 bg-purple-200 p-4"> Prova </li>
      <li className="hover:bg-yellow-100 first:bg-red-300 bg-purple-200 p-4"> Prova </li>
      <li className="hover:bg-yellow-100 first:bg-red-300 bg-purple-200 p-4"> Prova </li>
      <li className="hover:bg-yellow-100 first:bg-red-300 bg-purple-200 p-4"> Prova </li>
      <li className="hover:bg-yellow-100 first:bg-red-300 bg-purple-200 p-4"> Prova </li>
      <li className="hover:bg-yellow-100 first:bg-red-300 bg-purple-200 p-4"> Prova </li>
      <li className="hover:bg-yellow-100 first:bg-red-300 bg-purple-200 p-4"> Prova </li>
    </ul>

    <hr className="my-4" />

    <blockquote className="text-white text-2xl font-semibold italic text-center">
      When you look
      <span className="relative px-2">
        <span className="block absolute -inset-1 -skew-y-3 bg-pink-500 -z-10" aria-hidden="true"></span>
        <span className="relative text-white">annoyed</span>
      </span>
      all the time, people think that you're busy.
    </blockquote>


  </>);
}