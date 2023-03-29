const CardComponent = ({firstName, lastName, employment, image}) => {
  return ( 
      <div className="w-[20rem] h-[25rem] group [perspective: 1000px]  p-5 bg-white rounded-xl shadow-sm  hover:shadow-xl hover:shadow-neutral-700 cursor-pointer shadow-black">
        <div className="relative [transform-style: preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:[backface-visibility:hidden] transition-all duration-200">
          <div className="absolute top-0 left-0 ">
            <img alt="" src={image} className="object-cover"/>
            <h2 className="text-2xl font-bold">{`${firstName} ${lastName}`}</h2>
            <p className="font-thin text-lg">{employment.title}</p>
          </div>
          <div className="absolute top-10 [transform:rotateY(180deg)] duration-200 group-hover:[backface-visibility:visibile] [backface-visibility:hidden]">
            <h3 className="text-3xl font-bold">More Information</h3>
          </div>
        </div>
      </div>
   );
}

export default CardComponent;
