 const fromAirDropSignature = await connection.requestAirdrop(
    new PublicKey(process.argv[2]),
    2 * LAMPORTS_PER_SOL
);

