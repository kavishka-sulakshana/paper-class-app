import Image from "next/image";

const Loading = ({ text, width, height }) => {
    return (
        <div className="flex w-full justify-center items-center">
            <Image
                src="/assets/icons/blue_loading.gif"
                width={width}
                height={height}
                alt="loading"
            />
            <h3 className="text-black"> {text} </h3>
        </div>
    );
}

export default Loading 