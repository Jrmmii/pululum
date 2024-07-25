require("dotenv").config();
const readline = require("readline");
const readlineSync = require("readline-sync");
const chalk = require("chalk");
const {
  printName
} = require("./utils/name");
const {
  checkIn,
  faucetETH,
  faucetGOON,
  swapTokens,
  stake
} = require("./src/main");
const predict = require('./src/predict');
const createToken = require("./src/createToken");
function promptUser(_0x23e64a) {
  return new Promise(_0x13dba8 => {
    const _0x171ea1 = readline.createInterface({
      'input': process.stdin,
      'output': process.stdout
    });
    _0x171ea1.question(chalk.blueBright(_0x23e64a), _0x152e0 => {
      _0x171ea1.close();
      _0x13dba8(_0x152e0);
    });
  });
}
function inputPassword() {
  const _0x1f7744 = readlineSync.question("Langsung enter gan: ", {
    'hideEchoBack': true,
    'mask': ''
  });
  if (_0x1f7744 !== "") {
    console.error("Incorrect password. Access denied.");
    process.exit(0x1);
  }
}
async function main() {
  inputPassword();
  printName();
  console.log(chalk.yellow("Available Scripts:"));
  console.log("1. CheckIn");
  console.log("2. Claim Faucet ETH");
  console.log("3. Claim Faucet GOON");
  console.log("4. Swap GOON/goonUSD");
  console.log("5. Stake goonUSD");
  console.log("6. Predict ETH/BTC/ARB Price");
  console.log("7. Create Asset Tokenized ");
  console.log("0. Exit Program");
  const _0x19b4e2 = await promptUser("\nChoose the script to run: ");
  if (_0x19b4e2 === '1') {
    await checkIn();
  } else {
    if (_0x19b4e2 === '2') {
      await faucetETH();
    } else {
      if (_0x19b4e2 === '3') {
        await faucetGOON();
      } else {
        if (_0x19b4e2 === '4') {
          await swapTokens();
        } else {
          if (_0x19b4e2 === '5') {
            await stake();
          } else {
            if (_0x19b4e2 === '6') {
              await predict();
            } else {
              if (_0x19b4e2 === '7') {
                await createToken();
              } else if (_0x19b4e2 === '0') {
                console.log(chalk.green("Exiting program. Goodbye!"));
                process.exit(0x0);
              } else {
                console.log(chalk.red("Invalid choice. Please restart and choose 1 - 5."));
              }
            }
          }
        }
      }
    }
  }
}
main()["catch"](console.error);