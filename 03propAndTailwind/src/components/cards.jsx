import React from 'react'
//we can do directly destructuring //==like {function Cards(username)} instead of function Cards(props){  }
//we can give a default value here instead of pipe for in case of if there is no value is coming 
//like function Cards(username="rajpal",city="gurugram")
function Cards({username,city}) {
    //console.log(props.username);
    
  return (
    <>
    <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
          <div>
            <img
              src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
              alt="test"
              width="300"
              height="300"
              className="rounded-t-xl w-full"
            />
          </div>
          <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
            <div className="flex justify-between">
              <h1 className="font-RubikBold ">Bored ape nft accidental  {username ||"singh123@"} {city || "Noida"}</h1>
              <h1 className="font-bold font-RubikBold">Price</h1>
            </div>
            <div className="flex  justify-between font-mono">
              <p>#345</p> 
              <p>0.01</p>
            </div>
          </div>
        </div>
        </>
  )
}

export default Cards