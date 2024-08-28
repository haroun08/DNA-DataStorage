import React,{useState} from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import { JSBI } from "jsbi";
import Web3Modal from "web3modal";

import { SwapRouter } from "@uniswap/universal-router-sdk";
import {
    TradeType,
    Ether,
    token,
    CurrencyAmount,
    Percent 
} from "@uniswap/sdk-core";
import {Trade as V2Trade} from "@uniswap/v2-sdk";
import {
    Pool,
    nearestUsableTick,
    TickMath,
    TICK_SPACINGS,
    FeeAmount,
    Trade as V3Trade,Route as RouteV3
} from "@uniswap/v3-sdk";

import { MixedRouteTrade,Trade as RouterTrade} from "@uniswap/router-sdk";
import IUniswapV3Pool from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json";

//INTERNAL IMPORT
import { ERC20_ABI,web3Provider,CONNECTING_CONTRACT } from "./constants";
import {shortenAddress,parseErrorMsg} from '../utils/index';

export const CONTEXT = React.createContext();

export const PROVIDER = ({children}) => {
    const TOKEN_SWAP = "TOKEN SWAP DAPP";
    const [loader,setLoader] = useState(false);
    const [address,setAddress] = useState("");
    const [chainID,setChainID] = useState();

    //notification
    const notifyError = (msg) => toast.error(msg,{duration:4000});
    const notifySuccess = (msg) => toast.success(msg,{duration:4000});

//connect wallet function
const connect = async () => {
    try {
        if (!window.ethereum) {
            return notifyError("Please install MetaMask to use this feature.");
        }

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        if (accounts.length > 0) {
            setAddress(accounts[0]);
        } else {
            notifyError("No accounts found. Please make sure you have an account in MetaMask.");
        }

        const provider = await web3Provider(); 
        const network = await provider.getNetwork();
        setChainID(network.chainId);
    } catch (error) {
        const errorMsg = parseErrorMsg(error); 
        notifyError(errorMsg);
        console.error("Error connecting to MetaMask:", error);
    }
};


    // load token data 
    const LOAD_TOKEN = async(token) => {
        try{
            const tokenDetail = await CONNECTING_CONTRACT(token);
            return tokenDetail;
        }
        catch(error){
            const errorMsg= parseErrorMsg(error);
            notifyError(errorMsg);
            console.log(error);
        }
    };

    // INTERNAL FUNCTION
    async function getPool(tokenA,tokenB,feeAmount,provider){
        const[token0,token1] = tokenA.sortsBefore(tokenB) 
        ? [tokenA, tokenB] 
        : [tokenB,tokenA];

        const poolAddress = Pool.getAddress(token0,token1,feeAmount);

        const contract = new ethers.Contract(poolAddress,IUniswapV3Pool,provider);

        let liquidity = await contract.liquidity();

        let {sqrtPrice,tick} = await contract.slot0();

        liquidity = JSBI.BigInt(liquidity.toString());
        sqrtPriceX96 = JSBI.BigInt(sqrtPriceX96.toString());

        console.log("Calling_pool-------------")

        const tickData = [
            {
                index: nearestUsableTick(TickMath.MIN_TICK, TICK_SPACINGS[feeAmount]),
                liquidityNet: liquidity,
                liquidityGross: liquidity
            },
            {
                index: nearestUsableTick(TickMath.MIN_TICK, TICK_SPACINGS[feeAmount]),
                liquidityNet: JSBI.multiply(liquidity, JSBI.BigInt("-1")),
                liquidityGross: liquidity
            }
        ];

            return new Pool(token0, token1, feeAmount, sqrtPriceX96, liquidity, tick, [tickData]);

    }

        //SWAP_OPTION functioninternal
        function swapOptions(options){
            return Object.assign({
                slippageTolerance: new Percent(5,1000),
                recipiant: RECIPEINT,
            },    
        options
        );
        }      
        //BUILD Trade
        function buildTrade(trade){
            return new RouterTrade({
            v2Routes: trades
                .filter((trade)=> trade instanceof V2Trade)
                .map((trade)=>({
                  routev2: trade.route,
                  inputAmount: trade.inputAmount,
                  ouputAmount: trade.ouputAmount,  
                })),
            v3Routes: trades
                .filter((trade)=> trade instanceof V3Trade)
                .map((trade)=>({
                  routev2: trade.route,
                  inputAmount: trade.inputAmount,
                  ouputAmount: trade.ouputAmount,  
                })),
            mixedRoutes: trades
                .filter((trade)=>trade instanceof V3Trade)
                .map((trade)=>({
                    mixedRoute: trade.route,
                    inputAmount: trade.inputAmount,
                    ouputAmount: trade.ouputAmount,
                }))

            })
        }
        // build Trade
        function buildTrade(trade){
            return new RouterTrade({
                v2Routes: trades
                    .filter((trade)=> trade instanceof V2Trade)
                    .map((trade)=>({
                        routev2: trade.route,
                        inputAmount: trade.inputAmount,
                        ouputAmount: trade.ouputAmount
                })),                
                v3Routes: trades
                    .filter((trade)=> trade instanceof V3Trade)
                    .map((trade)=>({
                        routev3: trade.route,
                        inputAmount: trade.inputAmount,
                        ouputAmount: trade.ouputAmount
                })),
                mixedRoutes: trades
                    .filter((trade)=> trade instanceof V3Trade)
                    .map((trade)=>({
                        mixedRoute: trade.route,
                        inputAmount: trade.inputAmount,
                        ouputAmount: trade.ouputAmount
                })),
                tradeType: trades[0].tradeType,
            })
        }

    //demo account 
    const RECIPEINT = "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B";

    //swap function

    const swap = async(token_1,token_2,swapInputAmount)=> {
        try{
            console.log("CALLING ME_______________SWAP");
            const _inputAmount = 1;
            const provider = web3Provider();

            const network = await provider.getNetwork();

            const ETHER = Ether.onChain(1);

            //TOKEN CONTRACT
            const tokenAddress1 = await CONNECTING_CONTRACT(
                "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
            );
            const tokenAddress2 = await CONNECTING_CONTRACT(
                "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            );

            //TOKEN DETAILS
            const TOKEN_A = new Token(
                tokenAddress1.chaineId,
                tokenAddress1.address,
                tokenAddress1.decimals,
                tokenAddress1.symbol,
                tokenAddress1.name
            );

            const TOKEN_B = new Token(
                tokenAddress2.chaineId,
                tokenAddress2.address,
                tokenAddress2.decimals,
                tokenAddress2.symbol,
                tokenAddress2.name
            );

            const WETH_USDC_V3 = await getPool(
               TOKEN_A,
               TOKEN_B,
               FeeAmount.MEDIUM,
               provider 
            );

            const inputEther = ethers.utils.parseEther("1").toString();

            const trade = await V3Trade.fromRoute(
                new RouteV3([WETH_USDC_V3],ETHER,TOKEN_B),
                CurrencyAmount.fromRawAmount(Ether,inputEther),
                TradeType.EXACT_INPUT
            );

            const routerTrade = buildTrade([trade]);

            const opts = swapOptions({});

            const params = SwapRouter.swapERC20CallParameters(routerTrade,opts);

            console.log(WETH_USDC_V3);
            console.log(trade);
            console.log(routerTrade);
            console.log(opts);
            console.log(params);

            let ethBalance ;
            let tokenA;
            let tokenB;

            ethBalance = await provider.getBalance(RECIPEINT);
            tokenA = await tokenAddress1.balance;
            tokenA = await tokenAddress2.balance;
            console.log("--------------Before");
            console.log("ETH Balance:",ethers.utils.formatUnits(ethBalance,18));
            console.log("Token A :",tokenA);
            console.log("Token B :",tokenB);

            const tx = await Signer.snedTranstaction({
                data: params.calldata,
                to:"0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
                value: params.value,
                from: RECIPEINT,
            });

 
            console.log("--------------CALLING ME");
            const receipt = await tx.wait();

            console.log("-------------- SUCCESS");
            console.log("STATUS",receipt.status);

            ethBalance = await provider.getBalance(RECIPEINT);
            tokenA = await tokenAddress1.balance;
            tokenA = await tokenAddress2.balance;

            console.log("--------------AFTER");

            console.log("ETH Balance:",ethers.utils.formatUnits(ethBalance,18));
            console.log("Token A :",tokenA);
            console.log("Token B :",tokenB);
        }
        catch(error){
         const errorMsg= parseErrorMsg(error);
         notifyError(errorMsg);
         console.log(error);
        }     
    };
    return (
        <CONTEXT.Provider value={{TOKEN_SWAP,LOAD_TOKEN,notifyError,notifySuccess,setLoader,loader,connect,address,swap}}>
            {children}
        </CONTEXT.Provider>
    );
};