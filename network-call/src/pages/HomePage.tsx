import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import { IUser } from "../types/user";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [reload,setReload] = useState<boolean>(false)
  const navigate = useNavigate()
  const getData = async () => {
    try {
      const { data } = await axios.get("/users");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async(user:IUser)=>{
      const confirmSubmit = confirm(`apakah yakin ingin menghapus data ${user.username}?`)
      if(confirmSubmit){
        try {
           await axios.delete(`/users/${user.id}`)
           setReload(!reload)
           alert(`data ${user.username} berhasil dihapus!`)
        } catch (error) {
            console.log(error)
        }
      }
      }
  
  useEffect(() => {
    getData();
  }, [reload]);

  return <div className="flex justify-center">
    <table className="table-auto mt-10 border border-black">
        <thead className="p-4 bg-green-700">
            <tr>
                <th className="p-2 min-w-[50px] border">No</th>
                <th className="p-2 min-w-[200px] border">Username</th>
                <th className="p-2 min-w-[200px] border">Email</th>
                <th className="p-2 min-w-[50px] border"></th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((item,idx)=>{
                    return (
                        <tr key ={idx} className="hover:bg-gray-100 cursor-pointer">
                            <td onClick={()=>navigate(`/${item.id}`)} className="p-2 text-center border">{idx + 1}</td>
                            <td onClick={()=>navigate(`/${item.id}`)} className="p-2 text-center border">{item.username}</td>
                            <td onClick={()=>navigate(`/${item.id}`)} className="p-2 text-center border">{item.email}</td>
                            <td className="p-2 border text-center">
                                <MdDeleteOutline onClick={()=>handleDelete(item)} className="text-red-600 text-lg" />
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  </div>;
}
