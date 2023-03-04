/**
 * @description: 是否支持MetaMask  service 启动
 * @return {*}
 */
const isMetaMaskInstalled = () => {
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};
/**
 * @description:
 * @param {*}
 * @return {*}
 */
if (isMetaMaskInstalled()) {
  // 调起钱包
  ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
    // do something
    console.log("accounts", accounts);
  });
} else {
  // do something
}
