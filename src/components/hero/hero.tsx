import type { HeroBlockType } from "@/payload-types";
import { Image } from "../image";
import { AnimatedStories } from "./animatedStories";

function Hero(props: HeroBlockType) {
  return (
    <header>
      <div className="flex flex-row items-center px-12 pt-12 relative overflow-clip">
        <div>
          <span className="font-sans text-2xl block">
            <AnimatedStories stories={props.stories} />
          </span>
          <p className="text-8xl text-redleather font-bold">{props.title}</p>
          <div className="font-sans text-pretty text-base max-w-lg flex items-center justify-center mt-6 sm:ml-6 mb-6 relative z-10">
            <svg
              className="w-36"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Star Icon</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2793 6.10904C12.1962 5.61636 12.1337 5.12927 12.0933 4.64213C12.0324 3.91142 12.07 3.17512 12.0484 2.4444C12.039 2.1344 12.0019 1.3262 12.0169 1.20995C12.1525 0.196912 12.9701 0.0418926 13.2093 0.0142141C13.325 -0.00239308 14.5129 -0.135191 14.7692 1.18231C15.0836 2.7932 15.1844 4.41514 15.0731 6.00389C15.3328 7.35461 15.7767 8.69976 16.363 9.91762C18.6957 14.7614 23.1409 15.2319 27.957 15.1876C28.6976 15.1766 29.3127 15.7578 29.3514 16.494C29.3902 17.2358 28.8388 17.878 28.1015 17.9444C25.4094 18.2046 20.6332 20.3635 18.9819 22.611C18.6365 23.0816 18.4355 24.2164 18.1698 25.3291C17.7989 26.8736 17.3577 28.4014 16.8634 29.0435C16.7892 29.1432 15.8874 30.1618 15.6184 30.3112C14.9718 30.6655 14.4543 30.4607 14.1603 30.2724C13.8664 30.0842 13.5337 29.7133 13.4008 29.0989C13.2619 28.4567 13.3792 27.1392 13.3576 26.8569C13.279 25.8328 13.0742 23.8233 12.6563 22.0962C12.431 21.1662 12.1907 20.3082 11.7932 19.8819C10.3218 18.3042 7.96916 18.5367 5.98793 18.7969C5.76041 18.8246 5.5329 18.8578 5.30593 18.8855C4.49938 19.1235 3.64298 19.3007 2.73789 19.4058C1.37112 19.5664 1.14639 18.3098 1.13421 18.2267C1.10875 18.044 1.01408 17.103 2.04427 16.7266C2.15665 16.6878 2.98591 16.5051 3.30532 16.4332C3.75039 16.3335 4.20043 16.256 4.65215 16.1841C9.3182 14.7337 11.8525 10.6594 12.2793 6.10904ZM13.8807 11.1411C15.6422 14.7836 18.3154 16.5439 21.484 17.341H21.4835C19.505 18.3762 17.7054 19.6716 16.7516 20.9725C16.3895 21.4652 16.0574 22.456 15.7579 23.5687C15.5957 22.5335 15.3765 21.4319 15.087 20.4908C14.7576 19.4169 14.3142 18.5257 13.8193 17.9943C12.8638 16.9702 11.6648 16.4 10.3755 16.1177C11.9189 14.7503 13.0891 13.0453 13.8807 11.1411Z"
                fill="#62646B"
              />
            </svg>
            <p className="p-2 sm:border-2 border-black bg-ginger md:border-0 md:bg-transparent">
              {props.description}
            </p>
          </div>
        </div>
        <div className="grow justify-center absolute lg:relative -right-24 lg:-right-0 max-w-xs lg:max-w-full z-0 hidden sm:flex">
          <Image
            media={props.image}
            width={475}
            height={500}
            quality={100}
            priority
            className="z-10 relative"
          />
        </div>
      </div>
    </header>
  );
}

export { Hero };
