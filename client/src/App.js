// React imports
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

// Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Upload from './artifacts/contracts/Upload.sol/Upload.json';
// Components
import Home from './components/Home';

function App() {
    const [account, setAccount] = useState('');
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const loadProvider = async () => {
            if (provider) {
                window.ethereum.on('chainChanged', () => {
                    window.location.reload();
                });

                window.ethereum.on('accountsChanged', () => {
                    window.location.reload();
                });
                await provider.send('eth_requestAccounts', []);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                setAccount(address);
                let contractAddress =
                    '0x5FbDB2315678afecb367f032d93F642f64180aa3';

                const contract = new ethers.Contract(
                    contractAddress,
                    Upload.abi,
                    signer
                );
                //console.log(contract);
                setContract(contract);
                setProvider(provider);
            } else {
                console.error('Metamask is not installed');
            }
        };
        provider && loadProvider();
    }, []);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },

        typography: {
            fontFamily: "'Open Sans', sans-serif",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Home contract={contract} account={account} />
        </ThemeProvider>
    );
}

export default App;
