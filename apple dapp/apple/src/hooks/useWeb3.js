import React, { useEffect, useState } from 'react'
import Web3 from "web3/dist/web3.min.js"



const useWeb3 = () => {
    // 주소 담을 상태값
    const [account, setAccount] = useState();
    // web3 객체 담을 상태값
    const [web3,setWeb3] =useState();

    const getRequestAccount = async () =>{
        // 연결된 계정 주소 가져오기 연결된 계정이 없다면
        // 연결시도 eth_requestAccounts 함수 실행 
        const [account] = await window.ethereum.request({
            method : "eth_requestAccounts"
        })
        return account;
    }

    // 생명주기 마운트 처음에 한번만 실행
    useEffect(() =>{
        // 즉시실행 화살표 함수
        (async () =>{
            // 연결된 주소 가져오고
            const account = await getRequestAccount();
            // web3 객체 만들어주고
            const web3 = new Web3(window.ethereum);
            setAccount(account);
            setWeb3(web3);
        })();
    },[])

    // web3 객체 연결된 주소 반환 해주는 커스텀 훅
    return [web3, account];
}

export default useWeb3