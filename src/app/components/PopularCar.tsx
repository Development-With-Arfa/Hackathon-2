import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Specification from "./Specification";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const query = `*[_type=="car" && "popular" in tags]{
   name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    image
}`;

  const product: Product[] = await client.fetch(query);

  return (
    <div className="bg-[#f6f7f9] w-full lg:w-[1440px] h-auto p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      <section className="w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href="/Catagories">
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                {product[0].name}
                <Image
                  src={"/icons/heart-fill.png"}
                  alt=""
                  width={20}
                  height={20}
                />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-row lg:flex-col items-center justify-center gap-4">
              <Image
                src={"/img/car1.png"}
                alt=""
                width={224}
                height={70}
                className="h-[60px] w-[150px] lg:w-[224px] lg:h-[70px] "
              />
              <Specification />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                Rent Now
              </button>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
              {product[1].name}
                <Image src={"/icons/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-row lg:flex-col items-center justify-center gap-4">
              <Image
                src={"/img/car 2.png"}
                alt=""
                width={224}
                height={70}
                className="h-[60px] w-[150px] lg:w-[224px] lg:h-[70px] "
              />
              <Specification />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
              {product[2].name}
                <Image
                  src={"/icons/heart-fill.png"}
                  alt=""
                  width={20}
                  height={20}
                />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-row lg:flex-col items-center justify-center gap-4">
              <Image
                src={"/img/car3.png"}
                alt=""
                width={224}
                height={70}
                className="h-[60px] w-[150px] lg:w-[224px] lg:h-[70px]"
              />
              <Specification />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                Rent Now
              </button>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
              {product[3].name}
                <Image src={"/icons/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image
                src={"/img/car4.png"}
                alt=""
                width={224}
                height={70}
                className="h-[60px] w-[150px] lg:w-[224px] lg:h-[70px]"
              />
              <Specification />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                Rent Now
              </button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
