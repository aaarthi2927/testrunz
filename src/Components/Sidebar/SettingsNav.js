import { MdSettings } from 'react-icons/md';

export function SettingsNav({ name }) {
  return (
    <div  className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
    <MdSettings className="text-2xl text-gray-600 group-hover:text-[#F1C232]"/>
     <h3 className="text-sm text-black group-hover:text-[#F1C232] font-semibold">{name}</h3>
        </div>
  );
}
