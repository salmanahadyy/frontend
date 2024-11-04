import { IUser } from "@/types/user";

async function getData(): Promise<IUser[]> {
  const res = await fetch("http://localhost:2000/users");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

export default async function UserPage() {
  const data = await getData();
  console.log(data);
  return (
    <div className="flex justify-center">
      <table className="table-auto mt-10 border border-black">
        <thead className="p-4 bg-green-700">
          <tr>
            <th className="p-2 min-w-[50px] border">No</th>
            <th className="p-2 min-w-[200px] border">Username</th>
            <th className="p-2 min-w-[200px] border">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            return (
              <tr key={idx} className="hover:bg-gray-100 cursor-pointer">
                <td className="p-2 text-center border">{idx + 1}</td>
                <td className="p-2 text-center border">{item.username}</td>
                <td className="p-2 text-center border">{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
