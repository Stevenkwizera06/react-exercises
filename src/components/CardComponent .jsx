const CardComponent  = ({setup, punchline}) => {
    return ( 
        <div className="w-72 h-52 p-5 bg-white rounded-xl shadow-sm duration-200 hover:shadow-xl hover:shadow-neutral-700 cursor-pointer shadow-black">
          <h2 className="text-2xl font-bold">{setup}</h2>
          <p className="font-thin text-lg">{punchline}</p>
        </div>
     );
}
 
export default CardComponent ;