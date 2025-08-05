# Getting Started

A step-by-step guide to using Bitcoin USB Wallet. This covers the detailed process from program download to execution.

## 1. Program Download

### Access GitHub Release Page
1. Open your web browser and go to:
   ```
   https://github.com/hyunsungra/bitcoinusbwallet/releases
   ```

2. Check the latest release version (located at the top)

### Download Executable File
1. Find the **Assets** section (below the release information)
2. Click on the `BitcoinUSBWallet.exe` file to download
3. Wait for the download to complete

![Download Location](/images/assetdownload.png)

## 2. Program Execution

### First Run
1. Double-click the `BitcoinUSBWallet.exe` file in your USB drive
2. **Windows security warning will appear**

### Resolving Windows Security Warning

#### When "Windows protected your PC" window appears:

1. Click the **"More info"** link
   - Initially, you may only see the "Don't run" button
   - You must click "More info" first

![More Info Location](/images/run1.png)

2. When app information is displayed:
   - App: BitcoinUSBWallet.exe
   - Publisher: Unknown Publisher
   
3. Click the **"Run anyway"** button

![Run Location](/images/run2.png)

#### Why security warnings appear:
- Programs made by individual developers don't have Microsoft code signing, so warnings are displayed
- This is normal behavior, and files downloaded directly from GitHub are safe
- This is an open-source project where you can check the source code directly

### Program Start Screen
After passing the security warning, Bitcoin USB Wallet's main screen appears:
- **Create Wallet**: Create a new Bitcoin wallet
- **Load Wallet**: Open existing wallet file
- **Send Bitcoin**: Bitcoin transfer function

![Main Screen](/images/main_eng.png)

## 3. Recommended Usage Environment

### Offline Usage (Recommended)
1. Disconnect internet connection before running the program
   - Turn off Wi-Fi
   - Disconnect ethernet cable
2. Perform wallet creation and management tasks
3. Close the program after completing work
4. Reconnect to internet only when necessary

## 4. Securely Preparing USB Drive

### USB Setup
1. Prepare a USB drive with at least 64MB capacity
2. Connect USB to computer

### File Transfer
1. Find the downloaded `BitcoinUSBWallet.exe` file
   - Usually located in the `Downloads` folder
2. Copy or move the file to a folder on your USB drive

### USB Security
- Always use USB only on secure computers
- Don't use on public computers or PC cafes
- Safely remove USB after use (Safely Remove Hardware)

## 5. Troubleshooting

### When executable file won't open
- Add to antivirus program's exception list
- Temporarily disable Windows Defender real-time protection and run
- Run as administrator (right-click → "Run as administrator")

### When download is blocked
1. Unblock download in browser settings
2. Try with a different browser
3. Copy download link directly from GitHub page and use download manager