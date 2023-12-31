import React, { useState } from 'react'
import Card from './Card'
const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return (
            <Card key={data.id} {...data} />
        );
    }

    return (
        <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
    );
};
const Home = () => {
    const [quote, setQuote] = useState(null)

    const handleGenerate = async () => {
        try {
            const response = await fetch("https://famous-quotes4.p.rapidapi.com/random?category=all&count=1",
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-RapidAPI-Key': 'd8a1a435fbmsh7591d8e086b50bap10475ejsn4896677667ea',
                        'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
                    }
                }
            )
            const result = await response.json();
            // console.log(result)
            setQuote(result)
            console.log(quote)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div className='w-full px-4 py-8 flex flex-col items-center justify-center'>
                <button className='font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md' onClick={handleGenerate}> Generate</button>
            </div>
            
                <div className='mt-10 mx-auto w-72'>
                    {quote?<Card {...quote[0]}/>:<></>}
                </div>
            
        </>
    )
}

export default Home