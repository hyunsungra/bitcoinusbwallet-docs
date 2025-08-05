# Load Personal Wallet

This explains how to load and check wallet information from previously created Bitcoin USB Wallet files.

## Wallet Opening Process

### 1. Start from Main Menu

After running the program, click the **"Load Wallet"** button on the main screen.

### 2. Select Wallet File

1. Click the **"Select File"** button
2. When the file explorer opens, find your saved wallet file
   - Usually has a `.wallet` extension
   - Navigate to the folder where the wallet file is stored
3. Select the desired wallet file and click **"Open"**

### 3. Enter Wallet Password

- Enter the password you set when creating the wallet accurately
- Be careful with case sensitivity

### 4. Open Wallet

Click the **"Open Wallet"** button. If the password is correct, wallet information will be displayed.

## Check Wallet Information

When password authentication succeeds, you can check the following wallet information. For security purposes, sensitive information is hidden by default and can be viewed through the **"Show"** button.

### 1. Mnemonic Seed

- Displayed in hidden state by default
- Click the **"Show"** button to display the 24 words
- When displayed on screen, make sure no one else is around

### 2. Passphrase

- Displayed in hidden state by default
- Click the **"Show"** button to display the actual passphrase

### 3. Public Address (Bitcoin Address)

- Public address is displayed by default
- Example: Address starting with `bc1q`

#### QR Code
- QR code is automatically generated and displayed below the address
- Provided for convenience as exchange apps support QR codes

#### Copy Function
- Click the **"Copy"** button to copy the address to clipboard
- Can be easily pasted in exchanges or other wallets

### 4. Private Key

- Displayed in hidden state by default
- Click the **"Show"** button to display the actual private key

#### QR Code and Copy
- QR code is also displayed below the private key
- Can copy to clipboard with **"Copy Private Key"** button
- Be extremely careful when copying private keys or using QR codes

## Need a Backup?
- You can write down the mnemonic seed and passphrase on paper for storage
- Physical backups are safe from hacking but risk loss or damage
- Instead, copy the wallet file to another location for backup

**Keeping encrypted wallet files is the safest method:**

✅ **Advantages**:
- Protected by strong encryption
- Easy to copy and backup in digital form
- Less risk of physical damage

With just the wallet file and password, you can always access your wallet. Managing these two things safely is the most important.

**💡 Warning**: Never expose your mnemonic, passphrase, or private key to others. The same applies to wallet files and wallet passwords.