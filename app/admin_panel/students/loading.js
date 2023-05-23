import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex w-full justify-center">
            <Image
                src="/assets/icons/blue_loading.gif"
                width={30}
                height={30}
                alt="loading"
            />
            <h3> Loading.. </h3>
        </div>
    );
}
