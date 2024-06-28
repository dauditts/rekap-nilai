import Image from "next/image";
import Breadcrumb from "./components/Breadcrumb";

const matkul = [
  {
    matkul: "Pemrograman Web",
    label: "PW-02-01",
    url: "/PW-02-01",
  },
  {
    matkul: "Pemrograman Web",
    label: "PW-02-02",
    url: "/PW-02-02",
  },
  {
    matkul: "Pemrograman Web",
    label: "PW-02-03",
    url: "/PW-02-03",
  },
  {
    matkul: "Pemrograman Fungsional",
    label: "PF-01-03",
    url: "/PF-01-03",
  },
];

export default function Home() {
  return (
    <div>
      <Breadcrumb />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        Selamat datang di Web Rekap Nilai dengan dosen pengampu Daud Muhajir (MHJ)
      </div>
      <div className="w-full pt-2 px-4 sm:px-6 md:px-8 lg:ps-72">
        Pilih matakuliah melalui tombol dibawah ini atau pada menu sidebar
      </div>
      {/* <!-- Card Section --> */}
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-6 mx-auto lg:ps-72">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {/* <!-- Card --> */}
          {matkul.map((item, index) => (
            <a key={index} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href={item.url}>
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                      {item.label}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      {item.matkul}
                    </p>
                  </div>
                  <div className="ps-3">
                    <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* <!-- End Card --> */}
      </div>
      <div className="w-full pt-2 px-4 sm:px-6 md:px-8 lg:ps-72">
        Kemudian masukkan username pada inputan yang tersedia pada masing-masing menu matakuliah berupa email yang terdaftar pada LMS tanpa @... (contoh : daudmuhajir@telkomuniversity.ac.id maka username nya dalah daudmuhajir)
      </div>
      <div className="w-full pt-2 px-4 sm:px-6 md:px-8 lg:ps-72">
        Disclaimer : Web ini masih dalam pengembangan
      </div>
    </div>
  );
}
