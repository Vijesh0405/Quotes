import React from 'react';





const Card = ({text, author, category }) => (
  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card px-4 py-4 bg-red-100">
    <div className="w-full h-auto object-cover rounded-xl">
        <p className="text-2xl font-semibold">{text}</p>
    </div>
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#f0986d] m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">{category}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{author[0]}</div>
          <p className="text-white text-sm">{author}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;