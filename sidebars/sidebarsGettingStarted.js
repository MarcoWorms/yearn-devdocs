module.exports = {
  mySidebar: [
    "intro",
    "using-yearn",
    {
      type: "category",
      label: "Products",
      items: [
        {
          type: "category",
          label: "yVaults",
          items: [
            "products/yvaults/overview",
            "products/yvaults/vaults-and-strategies",
            "products/yvaults/vault-tokens",
            "products/yvaults/yvault-advantages",
          ],
        },
        "products/woofy",
        "products/token-addresses",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/how-boost-works",
        "guides/how-to-add-a-custom-token-to-metamask",
        "guides/how-to-understand-yvault-roi",
        "guides/how-to-understand-yveCRV",
      ],
    },
  ],
};
