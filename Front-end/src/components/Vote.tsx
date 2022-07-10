import React, { useEffect, useState } from "react";
import VOTINGCOTRACT from "../../Voting.json";
import "../App.scss";
import PROFILE from "../assets/profile.jpg";
import { FaRocket } from "react-icons/fa";
import { AiFillCloud, AiOutlineCloud, AiTwotoneCloud } from "react-icons/ai";
import Web3 from "web3";
import toast, { Toaster } from "react-hot-toast";
import CandidateAvatar from "../utils/Candidate.json";
// https://testnet.snowtrace.io/address/0x2dba96742f3b24a68F3979D9ADBC535d274429fD#code
// https://testnet.snowtrace.io/address/0x81790038dd6465e5DBDfd1C195d3f96C3411a113#code

declare global {
  interface Window {
    ethereum?: any;
    web3: any;
  }
}

interface CandidateType {
  0: string;
  1: string;
  2: string;
  4: string;
}

export const Vote = () => {
  const [Loader, setLoader] = useState<boolean>(false);
  const [LoadErr, setLoadErr] = useState<boolean>(false);
  const [Login, setLogin] = useState<boolean>(false);
  const [Account, setAccount] = useState<string>();
  const [effect, setEffect] = useState(false);
  const [ERRORmsg, setERRORmsg] = useState<string>("Wallet Note Connected");
  const { ethereum } = window;
  const [CandiTSX, setCandiTSX] = useState<any>();
  // const { ethereum } = window;

  useEffect(() => {}, []);
  const changeNetwork = () => {
    if (ethereum.networkVersion !== "43113") {
      ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Web3.utils.toHex(43113) }],
        })
        .catch((err) => {
          if (err.code === 4902) {
            ethereum
              .request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainName: "AVAX FUJI TESTNET",
                    chainId: Web3.utils.toHex(43113),
                    nativeCurrency: {
                      name: "Avalanche",
                      decimals: 18,
                      symbol: "AVAX",
                    },
                    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
                  },
                ],
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            setLoadErr(true);
            setERRORmsg(
              "Please Add Fuji Testnet to YOUR metamask And Try reconnecting"
            );
            alert(
              "Please Add Fuji Testnet to YOUR metamask And Try reconnecting"
            );
          }
        });
    }
  };
  let CandidateList: CandidateType[] = [];

  const FetchUsers = async () => {
    const web3 = new Web3(ethereum);
    const VotingContract = new web3.eth.Contract(
      VOTINGCOTRACT.abi as any,
      VOTINGCOTRACT.networks[43113].address
    );
    const CandidateCount = await VotingContract.methods.CandidateCount().call();
    console.log(CandidateCount, "hurrayy");
    let i = 0;

    const CandidateAvatars = JSON.parse(JSON.stringify(CandidateAvatar));

    for (i; i < CandidateCount; i++) {
      let Candidate: CandidateType = await VotingContract.methods
        .GetCandidate(i)
        .call();
      if (!CandidateAvatars[Candidate[1]]) {
        Candidate[4] =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLm52RvGbCjacKhbHremh7XSoC0p0GPIQyIlFdsCa3Ix5cPh1ilizm6eaZk8SK7i6ZoNI";
      } else {
        Candidate[4] = CandidateAvatars[Candidate[1]];
      }
      CandidateList.push(Candidate);
    }
    console.log(CandidateList);
    let CandidatesTSX = CandidateList.map((candi) => (
      <div className='form-glass-control flex items-center justify-between md:space-x-16 space-x-4'>
        <img src={candi[4]} className='rounded-full w-12 h-12' />
        <span className='text-violet-400 flex space-x-3'>
          <div className='md:block hidden'>
            {candi[1].slice(0, 5) + "...." + candi[1].slice(-4)} |{" "}
          </div>{" "}
          <div>{candi[0]}</div>
        </span>
        <button className='border px-5 py-3 bg-green-400 rounded-xl hover:shadow-xl'>
          Vote
        </button>
      </div>
    ));
    setCandiTSX(CandidatesTSX);
    console.log(CandiTSX, "candiTSX");
    setLoader(true);
  };

  const ConnectWallet = () => {
    if (typeof ethereum !== "undefined") {
      // const web3 = new Web3(window.web3.currentProvider);
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => {
          setAccount(res[0]);
          changeNetwork();
          FetchUsers();
        })
        .catch((err) => {
          setERRORmsg("User rejected!! Please try Reconnecting");
          console.log(err);
          setLoadErr(true);
          // setLoader(true);
          return;
        });
      /*
    request change network to ropsten
     */
    } else {
      setERRORmsg("Please Install Metamask");

      setLoadErr(true);
    }
  };

  return (
    <div className=' h-screen'>
      <div className=''>
        <div className='wrapper-form'>
          {/* BAck ground animation  */}
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <div className='card-glass'>
            {/* LOADER  */}
            <div
              className={`Loadcircle py-48 `}
              style={{
                display: `${Loader || LoadErr || !Login ? "none" : ""}`,
              }}
            >
              <div className='loader '>
                <div className='rocket'>
                  <i className='fas fa-rocket '>
                    <FaRocket />
                  </i>
                  <i className='fas fa-cloud '>
                    <AiTwotoneCloud className=' translate-x-11 translate-y-7 text-5xl ' />
                  </i>
                  <i className='fas fa-cloud '>
                    <AiFillCloud className='-translate-x-6 text-5xl' />
                  </i>
                  <i className='fas fa-cloud '>
                    <AiFillCloud className='-translate-x-11 -translate-y-28 text-5xl' />
                  </i>
                  <i className='fas fa-cloud '>
                    <AiFillCloud className=' translate-x-11 -translate-y-14 text-5xl ' />
                  </i>
                </div>
                <span>
                  <i></i>
                </span>
              </div>
            </div>
            {/* Login Button  */}
            <div
              className={`card-glass-header`}
              style={{ display: `${Login ? "none" : ""}` }}
            >
              <div
                className='text-violet-600 font-semibold text-xl md:text-4xl'
                onClick={() => {
                  console.log(Loader, Account);
                }}
              >
                <button
                  onClick={() => {
                    setLogin(true);
                    ConnectWallet();
                  }}
                  className='border px-6 border-gray-600 rounded-3xl hover:shadow-xl'
                >
                  LOGIN
                </button>
              </div>
            </div>
            {/* error msg  */}
            <div
              className={`card-glass-header ${LoadErr ? "hidden" : ""}`}
              style={{ display: `${LoadErr && !Loader ? "" : "none"}` }}
            >
              <div
                className='text-violet-600 font-semibold text-xl md:text-4xl'
                onClick={() => {
                  console.log(Loader, Account);
                }}
              >
                {ERRORmsg}
              </div>
            </div>
            {/* HEADER FOR BOX  */}
            <div
              className={`card-glass-header ${Loader ? "hidden" : ""}`}
              style={{ display: `${Loader ? "" : "none"}` }}
            >
              <div
                className='text-violet-600 font-semibold text-xl md:text-4xl'
                onClick={() => {
                  console.log(Loader, Account);
                }}
              >
                LIST OF CANDIDATES
              </div>
            </div>
            {/* Candidates BOX  */}
            <div
              className='md:glass-container'
              style={{ display: `${Loader ? "" : "none"}` }}
            >
              {CandiTSX}
            </div>
          </div>
        </div>
      </div>
      {/* TOASTER */}
      <Toaster />
    </div>
  );
};
