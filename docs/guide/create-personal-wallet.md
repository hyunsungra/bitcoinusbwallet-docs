# Create Personal Wallet

This guide provides step-by-step instructions on how to create a new personal wallet in Bitcoin USB Wallet.

## Run the Program
Run the Bitcoin USB Wallet program and click the new wallet creation button on the main screen.

## Wallet Creation Steps

### 1. Generate Mnemonic Seed (24 words)

The mnemonic seed is a combination of 24 words that forms the core of your wallet. All private keys are generated from these words.
1. Click the **"Generate New Mnemonic"** button
2. 24 words will be automatically generated and displayed on screen

#### Modifying Mnemonic
- **Complete Change**: Click "Generate New Mnemonic" button again to generate all 24 words anew
- **Individual Word Change**: 
  1. Click the word you want to change
  2. When the search box appears, enter the desired word
  3. Select a word from the BIP39 standard word list that appears in search results
  
> 💡 **Note**: You cannot use any random word - only words from the 2048 words defined in the BIP39 standard can be selected

### 2. Set Security Passphrase (Optional)

The passphrase is an additional security layer added to the mnemonic seed.

- **Input field**: "Security Passphrase (Optional)"
- **Characteristics**: 
  - Not a required input
  - Using a passphrase generates a different wallet even with the same mnemonic
  - Feel free to enter sentences or phrases

### 3. Enter Wallet Name

This is a name to distinguish between multiple wallets when managing them.

- **Examples**: "Main Wallet", "Savings", "Trading", etc.
- **Purpose**: Used in encrypted wallet file names

### 4. Set Wallet Password

This password is used to open the wallet file and check wallet information.

#### First Input
- **Input field**: "Wallet Password"
- **Recommendations**:
  - Minimum 8 characters
  - Combination of uppercase, lowercase, numbers, and special characters
  - Strong password that's difficult to guess

### 5. Confirm Password

- **Input field**: "Confirm Wallet Password"
- Re-enter the same password from step 4
- Both passwords must match to proceed to the next step

> 🔐 **Important**: If you forget this password, you cannot open the wallet file. Use a password you will never forget.

### 6. Select Save Path

Specify the location to save the wallet file.

1. Click the **"Select Folder"** button
2. Choose the folder where you want to save the wallet file

> 💾 **Tip**: The wallet file is saved with a `.wallet` extension and is encrypted

### 7. Complete Wallet Creation

1. After confirming all information, click the **"Create Wallet"** button
2. Wait a moment for the wallet file to be created in the specified path
3. Go to that path and check the created wallet file

### 8. Verify Created Wallet

1. To verify the created wallet, check the Load Wallet guide content