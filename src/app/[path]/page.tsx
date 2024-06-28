import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import TableNilai from "../components/TableNilai";

export default function Home({ params }: any) {
  return (
    <div>
      <Breadcrumb path={params.path} />
      <div className="w-full pt-4 px-4 sm:px-6 md:px-8 lg:ps-72">
        Masukkan username dibawah ini untuk melihat nilai {params.path}
      </div>
      <TableNilai path={params.path} />
    </div>
  );
}
