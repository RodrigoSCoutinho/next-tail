import Counter from "../components/counter"
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import ItemsContainer from "../components/ItemsContainer"
import Image from "next/image"
import Link from "next/link"
import useEffect from "react"

export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col items-center justify-end h-screen bg-center bg-no-repeat bg-cover md:justify-center md:items-start bg-sdBackground md:bg-background">
          <div className="flex flex-col gap-4 md:ml-28">
            {/* <h1 className="leading-normal text-center text-7xl font-[cinzel] font-semibold 	">
              <span className="text-red-600">SCARLET</span> <br /> SEA
            </h1> */}
            <Image src="/aalo.png" alt="placeholder" width={552} height={275} />
            <div className="flex flex-col items-center gap-4">
              <button className="w-2/3 p-2 bg-[#211F1FBD]/50  rounded-sm  text-white hover:bg-black">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=iGHPob4mgnw"
                  className="p-1 font-medium text-white rounded-md text-xl font-[cinzel]"
                >
                  WATCH TRAILER
                </a>
              </button>
              <button className="w-2/3 p-2 bg-[#211F1FBD]/50 font-[cinzel] rounded-sm font-medium text-xl text-white hover:bg-black">
                PRE-REGISTER
              </button>
              <Counter></Counter>
            </div>
          </div>
          <div className="absolute self-center hidden bottom-10 md:flex">
            <Image
              src="/arrow.png"
              alt="placeholder"
              width={100}
              height={100}
            ></Image>
          </div>
        </div>

        <div className="flex flex-col justify-center align-middle bg-[#211F1F] p-12 gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="leading-normal  text-center text-red-600 text-6xl font-[cinzel] font-semibold 	">
              EXPLORE A NEW WORLD
            </h2>
            <h4 className="text-3xl leading-normal text-center text-white ">
              <span className="text-red-600">Rule</span> the sea,
              <span className="text-red-600"> Fight</span> for money, and
              <span className="text-red-600"> Rise </span> in power. Conquer the
              world in a exciting Multiplayer PVP Game.
            </h4>
            <p className="flex self-center max-w-2xl text-xl text-center text-white">
              Explore a thrilling, open-world MMO filled with danger and
              opportunity where you&apos;ll forge a new destiny for yourself as
              an pirate. Endless opportunities to fight, forage, and forge await
              you among the island&apos;s wilderness and towns. Wield deadly
              weapons in a real-time combat system, and fight alone, with a
              small team, or in massed armies for PvP battles — the choices are
              all yours.
            </p>
          </div>
          <div className="flex flex-col items-center justify-around gap-6 md:flex-row">
            <div>
              <h3 className="leading-normal  text-center text-red-600 text-5xl font-[cinzel] font-semibold 	">
                PROVE YOUR SKILLS
              </h3>
              <p className="max-w-2xl text-xl text-center text-white ">
                Attributes are your character&apos;s core qualities: Strength,
                Dexterity, Stamina, Intelligence, and Focus. They define your
                combat strengths and weaknesses, like how much health you have
                and whether you&apos;re better with melee, ranged, or heavy
                weapons. You can redistribute your attribute points, so feel
                free to experiment until you find the sort of fighting style you
                like best.
              </p>
            </div>
            <Image
              src="/prof.webp"
              alt="marine with pistol"
              width={500}
              height={500}
              className="rounded"
            />
          </div>
          <div className="flex flex-col-reverse items-center justify-around gap-6 md:flex-row">
            <Image
              src="/ship.webp"
              alt="warship"
              width={500}
              height={500}
              className="rounded"
            />
            <div>
              <h3 className="leading-normal  text-center text-red-600 text-5xl font-[cinzel] font-semibold 	">
                STAY ALIVE
              </h3>
              <p className="max-w-2xl text-xl text-center text-white ">
                Sea combat is the pinnacle of PvP in Scarlet sea: epic siege
                warfare at a massive scale, with teams of attackers and
                defenders fighting for control and victory. The outcome of each
                War determines which company controls contested territory or
                settlements. Those who control the towns control resources and
                confer benefits to their fellow tripulation and company members.
                If the company currently controlling a settlement successfully
                fends off the invaders, they retain control of the settlement.
                If the attackers are successful, however, they take over.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-around h-screen md:h-[70vh] py-12  px-8 bg-no-repeat bg-cover md:flex-row bg-register"
          id="register"
        >
          <div className="flex flex-col gap-5">
            <h3 className="leading-normal text-center text-red-600 text-3xl md:text-5xl font-[cinzel] font-semibold 	">
              PRE-REGISTER
            </h3>
            <div className="flex px-8 py-4 bg-white rounded-[4px]">
              <form action="#" className="flex flex-col w-full gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="p-2 border border-gray-400 rounded-sm shadow-sm bg-gray-10"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="p-2 border border-gray-400 rounded-sm shadow-sm bg-gray-10"
                    />
                  </div>
                </div>
                <button className="flex self-center px-6 py-2 mt-4 text-white bg-red-500 rounded-sm justify-self-end">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-4 ">
            <h3 className="leading-normal  text-center text-white text-3xl md:text-5xl font-[cinzel] font-semibold 	">
              JOIN THE <br /> COMMUNITY
            </h3>
            <div className="flex justify-center gap-6 mt-6 text-3xl">
              <div className="w-16 h-16 rounded-lg bg-[#D90B31] flex justify-center items-center">
                <FaDiscord />
              </div>
              <div className="w-16 h-16 rounded-lg bg-[#D90B31] flex justify-center items-center">
                <FaTwitter />
              </div>
              <div className="w-16 h-16 rounded-lg bg-[#D90B31] flex justify-center items-center">
                <FaFacebook />
              </div>
              <div className="w-16 h-16 rounded-lg bg-[#D90B31] flex justify-center items-center">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-white bg-gray-900">
        <ItemsContainer />
        <div className="grid grid-cols-1 gap-10 pt-2 pb-8 text-sm text-center text-gray-400 sm:grid-cols-2 lg:grid-cols-2">
          <span>LarapioArts 2022 Apply. All rights reserved</span>
          <span>Terms - Privacy Policy</span>
        </div>
      </footer>
    </>
  )
}
