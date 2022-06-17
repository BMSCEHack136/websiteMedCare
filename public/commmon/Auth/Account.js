// import React, { useEffect, useContext } from 'react'
// import { GlobalContext } from 'src/commmon/GlobalData'
// // import Button from 'src/utils/Button';
// import Button from '@mui/material/Button'
// const Account = () => {
//   const { setEthereum, setCurrentAccount } = useContext(GlobalContext)

//   const checkIfWalletIsConnected = async () => {
//     try {
//       const { ethereum } = window

//       if (!ethereum) {
//         console.log('Make sure you have metamask!')
//         return
//       } else {
//         setEthereum(ethereum)
//         console.log('fejj', ethereum)
//         localStorage.setItem('eths', ethereum)
//         console.log('chainID', ethereum.chainId)
//       }

//       const accounts = await ethereum.request({ method: 'eth_accounts' })

//       if (accounts.length !== 0) {
//         const account = accounts[0]
//         console.log('Found an authorized account:', account)
//         setCurrentAccount(account)
//       } else {
//         console.log('No authorized account found')
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const connectWallet = async () => {
//     try {
//       const { ethereum } = window

//       if (!ethereum) {
//         alert('Get MetaMask!')
//         return
//       }

//       const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

//       console.log('Connected', accounts[0])
//       setCurrentAccount(accounts[0])
//       localStorage.getItem('cc', accounts[0])
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useEffect(() => {
//     checkIfWalletIsConnected()
//   })

//   return (
//     <>
//       {/* <Button onClick={connectWallet} name={"Wallet"} marginRight={20} background={'#2F80ED'} >

//             </Button> */}
//       {/* <Button variant="contained" onClick={} style={{ marginRight: '20px', background: '#2F80ED' }} >
//                 Wallet
//             </Button> */}
//       <Button
//         variant="contained"
//         onClick={connectWallet}
//         style={{
//           background: '#151B24',
//           color: '#fff',
//           border: '3px solid #2F80ED',
//           borderRadius: '6px',
//           padding: '6px',
//           marginRight: '24px',
//           fontFamily: 'poppins',
//         }}
//       >
//         Connect
//       </Button>
//     </>
//   )
// }

// export default Account
