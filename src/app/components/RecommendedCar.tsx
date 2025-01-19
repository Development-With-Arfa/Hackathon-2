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

export default async function Cars() {
  const query = `*[_type=="car" && "recommended" in tags]{
     name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      originalPrice,
      tags,
      image
  }`;
  const product: Product[] = await client.fetch(query);
  return (
    <div className="bg-[#f6f7f9] w-full lg:w-[1440px] h-auto p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      <section className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                {product[0].name}
                <Image src={"/icons/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image
                src={"/img/car5.png"}
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
              {product[1].name}
                <Image
                  src={"/icons/heart-fill.png"}
                  alt=""
                  width={20}
                  height={20}
                />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-row lg:flex-col items-center justify-center gap-4">
              <Image
                src={"/img/car6.png"}
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
              {product[2].name}
                <Image src={"/icons/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-row lg:flex-col items-center justify-center gap-4">
              <Image
                src={"/img/car7.png"}
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
                <Image
                  src={"/icons/heart-fill.png"}
                  alt=""
                  width={20}
                  height={20}
                />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-row lg:flex-col items-center justify-center gap-4">
              <Image
                src={"/img/car8.png"}
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
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
              {product[4].name}
                <Image
                  src={"/icons/heart-fill.png"}
                  alt=""
                  width={20}
                  height={20}
                />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-row lg:flex-col items-center justify-center gap-4">
              <Image
                src={"/img/car9.png"}
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
              {product[5].name}
                <Image src={"/icons/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-row lg:flex-col items-center justify-center gap-4">
              <Image
                src={"/img/car10.png"}
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
              {product[6].name}
                <Image
                  src={"/icons/heart-fill.png"}
                  alt=""
                  width={20}
                  height={20}
                />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-row lg:flex-col items-center justify-center gap-4">
              <Image
                src={"/img/car11.png"}
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
              {product[7].name}
                <Image src={"/icons/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-row lg:flex-col items-center justify-center gap-4">
              <Image
                src={"/img/car12.png"}
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

      <section className="button w-full text-center">
        <Link href="/Catagories">
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}
