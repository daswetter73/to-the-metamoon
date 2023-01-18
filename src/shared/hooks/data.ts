const contractDetails = {
  address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  abi: JSON.parse(process.env.NEXT_PUBLIC_ABI),
  chainId: Number(process.env.NEXT_PUBLIC_CHAIN_ID),
};

export { contractDetails };
