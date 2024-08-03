import React from 'react'

const Cards = () => {
  return (
    <div className=" bg-cyan-600 h-96  place-content-center  ">

      <div className="flex flex-row">

        {/* Card designing start Here */}

        <div className=" p-6 rounded-lg max-w-sm m-20 bg-white flex  items-center space-x-4">
          <div>
            <img
              className=" w-10 h-10 "
              src="https://imgs.search.brave.com/F_lTTLJswFS7G9NyFV3xOqi17rwqfdspBNcbMmzvPls/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQ4LzUxLzUz/LzM2MF9GXzU0ODUx/NTMzMl9pemhybm44/NDZ6RVlocUxKWnhR/SzVreHVaRGRVVkFv/di5qcGc"
              alt=""
            />
          </div>
          <div>
            <div className="text-lg font-medium text-black ">
              <span className=" underline ">
                <b>
                  <a
                    className=" text-black "
                    target="_blank"
                    href="https://www.linkedin.com/in/shivankit-agarwal"
                  >
                    My Linkedin Profile
                  </a>
                </b>
              </span>{" "}
              <br />
              <p className=" text-sm text-slate-500">
                <i>
                  Click on <i>"My Linkedin Profile"</i> for Connecting with me.
                </i>
              </p>
              <hr />
              <p className="text-xs">( Designed using Tailwind Css)</p>
            </div>
          </div>
        </div>

        {/* New Card Start Here */}

        <div className="bg-white rounded-lg p-6 max-w-sm mx-auto space-x-5 shadow-xl h-60 w-64 ">
          <div>
            <div className="grid place-content-center">
              <img
                className=" w-20 h-20  "
                src="https://imgs.search.brave.com/F_lTTLJswFS7G9NyFV3xOqi17rwqfdspBNcbMmzvPls/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQ4LzUxLzUz/LzM2MF9GXzU0ODUx/NTMzMl9pemhybm44/NDZ6RVlocUxKWnhR/SzVreHVaRGRVVkFv/di5qcGc"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="font-medium">
              <span className="underline text-lg font-medium ">
                <b>
                  <a
                    className="text-black"
                    href="https://www.linkedin.com/in/shivankit-agarwal"
                  >
                    My linkedIn Profile
                  </a>
                </b>
              </span>
              <p className="text-slate-500 text-sm">
                <i>
                  Click on <i>"My Linkedin Profile"</i> for Connecting with me.
                </i>
              </p>
              <hr />
              <p className=" text-xs ">(Designed with Tailwind CSS)</p>
            </div>
          </div>
        </div>

        {/* New Card Start Here */}

        <div className=" p-6 rounded-lg max-w-sm m-20 bg-white flex shadow-xl items-center space-x-4">
          <div>
            <div className="text-lg font-medium text-black ">
              <span className=" underline ">
                <b>
                  <a
                    className=" text-black "
                    target="_blank"
                    href="https://www.linkedin.com/in/shivankit-agarwal"
                  >
                    My Linkedin Profile
                  </a>
                </b>
              </span>{" "}
              <br />
              <p className=" text-sm text-slate-500">
                <i>
                  Click on <i>"My Linkedin Profile"</i> for Connecting with me.
                </i>
              </p>
              <hr />
              <p className="text-xs">( Designed using Tailwind Css)</p>
            </div>
          </div>
          <div>
            <img
              className=" w-10 h-10 "
              src="https://imgs.search.brave.com/F_lTTLJswFS7G9NyFV3xOqi17rwqfdspBNcbMmzvPls/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQ4LzUxLzUz/LzM2MF9GXzU0ODUx/NTMzMl9pemhybm44/NDZ6RVlocUxKWnhR/SzVreHVaRGRVVkFv/di5qcGc"
              alt=""
            />
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Cards