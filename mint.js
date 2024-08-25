// NFT Collection Class
class NFTCollection {
  constructor() {
    this.nfts = [];
  }

  // Mint a new NFT
  mintNFT(name, description, image) {
    const newNFT = {
      id: this.nfts.length + 1,
      name,
      description,
      image,
    };
    this.nfts.push(newNFT);
    console.log(`NFT #${newNFT.id} minted: ${newNFT.name}`);
  }

  // Print details of all NFTs to the console
  printNFTDetails() {
    console.log("NFT Collection:");
    this.nfts.forEach((nft) => {
      console.log(`  #${nft.id}: ${nft.name} - ${nft.description}`);
    });
  }

  // Print the total supply of the NFT collection to the console
  printTotalSupply() {
    console.log(`Total Supply: ${this.nfts.length} NFTs`);
  }
}

// Create a new NFT collection
const myCollection = new NFTCollection();

// Mint three NFTs
myCollection.mintNFT("NFT 1", "This is the first NFT", "https://example.com/nft1.png");
myCollection.mintNFT("NFT 2", "This is the second NFT", "https://example.com/nft2.png");
myCollection.mintNFT("NFT 3", "This is the third NFT", "https://example.com/nft3.png");

// Print the details of all NFTs
myCollection.printNFTDetails();

// Print the total supply of the NFT collection
myCollection.printTotalSupply();

// Code read-aloud explanation:

// In this code, we define a class called NFTCollection that has three methods: mintNFT, printNFTDetails, and printTotalSupply.

// The mintNFT method creates a new NFT object with a unique ID, name, description, and image, and adds it to the collection. It also logs a message to the console indicating that the NFT has been minted.

// The printNFTDetails method loops through the collection and logs the details of each NFT to the console.

// The printTotalSupply method logs the total number of NFTs in the collection to the console.

// We then create a new instance of the NFTCollection class and mint three NFTs using the mintNFT method.

// Finally, we call the printNFTDetails and printTotalSupply methods to display the details of the NFTs and the total supply of the collection.
