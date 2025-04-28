import users from "./data/personaldata.js";
console.log(users);

function UserCard({ nama, alamat, photoProfile, nomorTelpon }) {
  console.log(nama);
  return (
    <div className="w-full rounded-xl mx-20 bg-white border-slate-200 border-1 flex flex-col items-start p-10 h-fit gap-3 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="flex flex-row w-full items-center gap-4 p-3 pb-5 border-b-1 border-slate-200">
        <img
          src={photoProfile}
          alt=""
          className="max-w-xl w-[10%] mt-3 flex items-center rounded-full"
        />
        <h3 className="font-semibold text-3xl w-full">{nama}</h3>
      </div>

      <div className="justify-between items-start h-full py-4 flex w-full max-w-[500px]">
        <div className="flex gap-3 justify-start items-start">
          <img src="/img/address.svg" alt="" className="w-[15%]" />
          <p className="text-xl">{alamat}</p>
        </div>
        <div className="flex gap-3 justify-start items-start">
          <img src="/img/nomer.svg" alt="" className="w-[35%]" />
          <a href="" className="text-blue-600 decoration-solid text-xl">
            <u>{nomorTelpon}</u>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className=" w-full max-w-[900px] m-auto">
      <h1 className="text-4xl font-semibold">My Personal</h1>
      <h1 className="text-4xl font-bold">Contact Book</h1>
      <section className="playerCard-list flex gap-5 flex-col items-center justify-center mt-20">
        {users.map((users, index) => (
          <UserCard
            key={index}
            nama={users.nama}
            alamat={users.alamat}
            photoProfile={users.photoProfile}
            nomorTelpon={users.nomorTelpon}
          />
        ))}
      </section>
    </div>
  );
}
