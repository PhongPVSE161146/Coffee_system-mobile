import React, { createContext, useContext, useState } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
    const [walletBalance, setWalletBalance] = useState(6000000);

    return (
        <WalletContext.Provider value={{ walletBalance, setWalletBalance }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = () => useContext(WalletContext);
