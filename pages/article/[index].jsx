import React from "react";
import { useRouter } from "next/router";

const ReadMore = () => {
  const router = useRouter();
  const { index } = router.query;

  return (
    <div className='flex flex-col justify-center items-center pb-10 '>
      <div className=' max-w-4xl w-full'>
        <div className='py-2'>
          <h1 className='text-gray-900  font-bold text-xl sm:text-4xl'>
            Docker,kubernetes and skaffold beginner guild
          </h1>
          <div className='pt-2'>
            <p>owoeye tosin</p>
            <p className="text-orange-700">Dec 4,2018</p>
          </div>
        </div>
     
          <pre className="leading-loose text-gray-900 text-xl">
           
           <span className="font-bold text-4xl">L</span> orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            fugiat nesciunt similique, corporis reiciendis facilis itaque quas
            iure ad, recusandae repellendus culpa, accusamus quaerat dolores
            optio ratione ab quis consectetur.fugiat nesciunt similique, corporis reiciendis facilis itaque quas
            iure ad, recusandae repellendus culpa, accusamus quaerat dolores
            optio ratione ab quis consectetur.fugiat nesciunt similique, corporis reiciendis facilis itaque quas
            iure ad, recusandae repellendus culpa, accusamus quaerat dolores
            optio ratione ab quis consectetur.fugiat nesciunt similique, corporis reiciendis facilis itaque quas
            iure ad, recusandae repellendus culpa, accusamus quaerat dolores
            optio ratione ab quis consectetur.fugiat nesciunt similique, corporis reiciendis facilis itaque quas
            iure ad, recusandae repellendus culpa, accusamus quaerat dolores
            optio ratione ab quis consectetur.fugiat nesciunt similique, corporis reiciendis facilis itaque quas
            iure ad, recusandae repellendus culpa, accusamus quaerat dolores
  
            
         
           {/* note writing and code snippet here */}
           <div className="bg-purple-100 text-purple-800 rounded-lg mt-8 p border border-purple-900">
             <code>
                {`function login=>()=>{
                    do some codding here
                    1.taking bath
                    2.wash plate
                    3.cook
                    4.drink
                }`}
             </code>
           </div>
           
           
          </pre>
          <p className="text-center pt-20">The End</p>
        </div>
   
    </div>
  );
};

export default ReadMore;
