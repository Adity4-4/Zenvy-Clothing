// src/services/dataAutomation.js

/**
 * Automates the fetching and formatting of e-commerce data
 * into a structured Web3 smart-contract schema.
 */
export const getAutomatedWeb3Data = async () => {
  try {
    // 1. Fetch a large batch of items from DummyJSON
    const response = await fetch("https://dummyjson.com/products?limit=194");
    const data = await response.json();

    // 2. Filter for Zenvy's fashion and luxury aesthetic
    const allowedCategories = [
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "womens-dresses",
      "womens-shoes",
      "womens-watches",
      "womens-bags",
      "womens-jewellery",
      "sunglasses",
      "tops",
    ];

    const luxuryItems = data.products.filter((item) =>
      allowedCategories.includes(item.category),
    );

    // 3. Automate the layout mapping entirely through code
    return luxuryItems.map((item, index) => {
      // Clean up the category naming conventions (e.g., "mens-shirts" -> "MENS SHIRTS")
      const formattedCategory = item.category.replace("-", " ").toUpperCase();

      return {
        id: item.id,
        name: item.title,
        price: `$${item.price.toFixed(2)}`,
        // Calculate a mock Ethereum price based on standard USD value
        ethPrice: `${(item.price / 3000).toFixed(4)} ETH`,
        description: item.description,
        category: formattedCategory,
        // Use the first high-res image array item instead of the small thumbnail
        img: item.images[0] || item.thumbnail,

        // --- AUTOMATED WEB3 METRICS ---
        // Generates sequential token IDs and mock IPFS hashes automatically
        tokenId: `0x7a2${(index + 1000).toString(16)}...${index}f`,
        ipfsHash: `ipfs://QmXoypizjW3WknFiJnKLwHCnL72v${index}EDP1mX`,
        isMinted: index % 3 === 0, // Simulates active minting states dynamically
      };
    });
  } catch (error) {
    console.error("Data automation failed:", error);
    return [];
  }
};
