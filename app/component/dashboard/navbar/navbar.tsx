import {FiBell, FiMessageSquare } from "react-icons/fi";
// import Image from "next/image";
export default function NavBar({ prop }: { prop: { prop: boolean } }) {


  return (
    
    <div className="bg-white flex justify-between p-2 transition-transform shadow-lg">
      <h1 className="text-2xl text-blue-900 leading-tight pl-5  font-semibold">
        OMS
      </h1>
      <div className="flex justify-start space-x-1 pr-14">
        {prop.prop && (
           <>
          
          <div className="flex items-center gap-5">
          <FiMessageSquare size={20} />
          <FiBell size={20} />
          {/* <Image
            src="/profile.jpg"   // Replace with the actual path 
            alt="User Profile"
            width={32}
            height={32}
            className="h-auto rounded-full"
          /> */}
          </div>
          <span className="text-md">paul</span>
        </> 
        )}
        
      </div>
    </div>
    
  );
}
